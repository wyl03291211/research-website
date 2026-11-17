(() => {
  "use strict";
  const content = window.RESEARCH;
  const byId = id => document.getElementById(id);
  const put = (id, text) => { byId(id).textContent = text; };

  function textElement(tag, text, className) {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
  }

  function choiceButton(label, selected, action, className) {
    const button = textElement("button", label, className);
    button.type = "button";
    button.setAttribute("aria-pressed", String(selected));
    button.addEventListener("click", action);
    return button;
  }

  const project = content.project;
  document.title = project.name + " · " + project.title.join(" ");
  document.querySelector('meta[name="description"]').content = content.abstract.summary;
  document.querySelector(".project-name").textContent = project.name;
  put("footer-credit", project.footer);
  document.querySelectorAll("[data-project-name]").forEach(element => { element.textContent = project.name; });
  byId("paper-title").replaceChildren(...project.title.map(line => textElement("span", line, "title-line")));
  document.querySelector(".authors").replaceChildren(...project.authors.map(row => {
    const paragraph = document.createElement("p");
    row.forEach(author => {
      const name = textElement("span", author.name, "author-name");
      if (author.affiliation) name.append(textElement("sup", author.affiliation));
      paragraph.append(name);
    });
    return paragraph;
  }));
  const affiliations = document.querySelector(".affiliations");
  const credits = [project.affiliations, project.authorNote].filter(Boolean);
  affiliations.replaceChildren(...credits.map(credit => textElement("p", credit)));
  affiliations.hidden = credits.length === 0;
  document.querySelectorAll(".resources button.resource").forEach((button, index) => {
    const url = [project.links.paper, project.links.arxiv, project.links.code][index];
    if (!url) return;
    const link = document.createElement("a");
    link.className = button.className;
    link.href = url;
    link.append(...button.childNodes);
    button.replaceWith(link);
  });
  if (project.hero.src) {
    const figure = document.querySelector(".hero-media");
    const stillImage = figure.querySelector("img");
    const media = project.hero.type === "video" ? document.createElement("video") : stillImage;
    if (media.tagName === "VIDEO") {
      media.muted = true;
      media.autoplay = !matchMedia("(prefers-reduced-motion: reduce)").matches;
      media.loop = true;
      media.playsInline = true;
      media.preload = "metadata";
      if (project.hero.poster) media.poster = project.hero.poster;
      media.setAttribute("aria-label", project.hero.alt);
    } else {
      media.alt = project.hero.alt;
    }
    media.addEventListener("error", () => media.remove());
    if (media.getAttribute("src") !== project.hero.src) media.src = project.hero.src;
    if (media !== stillImage) stillImage.replaceWith(media);

    if (media.tagName === "IMG" && project.hero.motion) {
      const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");
      const animation = document.createElement("video");
      animation.className = "hero-motion";
      animation.muted = true;
      animation.defaultMuted = true;
      animation.loop = true;
      animation.playsInline = true;
      animation.preload = "none";
      animation.setAttribute("aria-hidden", "true");
      animation.addEventListener("playing", () => {
        if (motionPreference.matches) return;
        animation.classList.add("is-playing");
      });
      const showStillImage = () => animation.classList.remove("is-playing");
      animation.addEventListener("pause", showStillImage);
      animation.addEventListener("error", showStillImage);
      figure.append(animation);

      function updatePlayback() {
        if (motionPreference.matches) {
          animation.pause();
          showStillImage();
          return;
        }
        if (!animation.hasAttribute("src")) animation.src = project.hero.motion;
        animation.play().catch(showStillImage);
      }
      motionPreference.addEventListener("change", updatePlayback);
      updatePlayback();
    }
  }
  project.institutions.forEach((institution, index) => {
    const slot = document.querySelectorAll(".logo-placeholder")[index];
    if (!slot) return;
    if (!institution.logo) {
      slot.setAttribute("aria-label", institution.name);
      slot.hidden = true;
      return;
    }
    const image = new Image();
    image.alt = institution.name;
    image.addEventListener("load", () => {
      slot.replaceChildren(image);
      slot.closest(".institutions").hidden = false;
    });
    image.src = institution.logo;
  });
  const cover = document.querySelector("main");
  document.querySelector(".replay").hidden = false;
  document.querySelector(".replay").addEventListener("click", () => {
    cover.classList.remove("entrance");
    void cover.offsetWidth;
    cover.classList.add("entrance");
  });

  byId("abstract-paragraphs").replaceChildren(...content.abstract.paragraphs.map(text => textElement("p", text)));
  const experiment = content.experiments;
  const gallery = byId("video-gallery");
  const taskNames = new Map(experiment.tasks.map(task => [task.id, task.name]));
  let playingVideo;

  put("experiments-intro", experiment.intro);

  gallery.addEventListener("play", event => {
    if (playingVideo !== event.target) playingVideo?.pause();
    playingVideo = event.target;
  }, true);

  function videoCard(clip) {
    const taskName = taskNames.get(clip.task) || clip.task;
    const card = document.createElement("figure");
    card.className = "video-card";

    const frame = document.createElement("div");
    frame.className = "video-card-media";
    const placeholder = textElement("div", "Video placeholder", "video-card-placeholder");
    const icon = textElement("span", "", "video-card-icon");
    icon.setAttribute("aria-hidden", "true");
    placeholder.prepend(icon);
    frame.append(placeholder);

    if (clip.src) {
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.muted = true;
      video.preload = "none";
      video.setAttribute("aria-label", taskName);
      if (clip.poster) video.poster = clip.poster;
      video.addEventListener("error", () => {
        video.hidden = true;
        placeholder.textContent = "Video unavailable";
        placeholder.hidden = false;
      });
      placeholder.hidden = true;
      video.src = clip.src;
      frame.append(video);
    }

    const caption = document.createElement("figcaption");
    caption.append(textElement("strong", taskName));
    if (clip.caption) caption.append(textElement("p", clip.caption));
    card.append(frame, caption);
    return card;
  }

  function showMethod(method) {
    playingVideo?.pause();
    playingVideo = null;
    gallery.replaceChildren(...experiment.categories.map(category => {
      const group = document.createElement("section");
      group.className = "video-group";
      group.dataset.category = category.id;
      const heading = textElement("h3", category.label);
      heading.id = "video-group-" + category.id;
      group.setAttribute("aria-labelledby", heading.id);
      group.append(heading);
      const clips = method.groups[category.id] || [];
      if (clips.length) {
        const grid = document.createElement("div");
        grid.className = "video-grid";
        grid.append(...clips.map(videoCard));
        group.append(grid);
      } else {
        group.append(textElement("p", "No clips available.", "video-group-empty"));
      }
      return group;
    }));
  }

  const methodButtons = experiment.methods.map((method, index) => {
    const button = choiceButton(method.name, index === 0, () => {
      if (button.getAttribute("aria-pressed") === "true") return;
      methodButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
      showMethod(method);
    });
    button.setAttribute("aria-controls", "video-gallery");
    return button;
  });
  byId("video-methods").append(...methodButtons);
  showMethod(experiment.methods[0]);

  const dialog = byId("media-dialog");
  const dialogContent = byId("dialog-content");
  const zoomFigure = byId("zoom-figure");

  function setFigureZoom(magnified) {
    dialogContent.classList.toggle("is-magnified", magnified);
    zoomFigure.setAttribute("aria-pressed", String(magnified));
    dialogContent.scrollTo(0, 0);
  }

  zoomFigure.addEventListener("click", () => {
    setFigureZoom(zoomFigure.getAttribute("aria-pressed") !== "true");
  });

  function openDialog(title, element) {
    put("dialog-title", title);
    dialogContent.replaceChildren(element);
    setFigureZoom(false);
    dialog.showModal();
    byId("close-dialog").focus();
  }
  const paperFigures = { overview: content.abstract.figure, method: content.method.figure };
  document.querySelectorAll("[data-figure]").forEach(figure => {
    const details = paperFigures[figure.dataset.figure];
    const button = figure.querySelector(".figure-image");
    const image = button.querySelector("img");
    image.alt = details.alt;
    image.width = details.width;
    image.height = details.height;
    image.src = details.src;
    button.addEventListener("click", () => {
      const enlarged = new Image();
      enlarged.alt = details.alt;
      enlarged.src = details.src;
      openDialog(details.title, enlarged);
    });
  });
  byId("close-dialog").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => {
    dialogContent.replaceChildren();
  });

  const { tasks: resultTasks, benchmark, ablation } = content.results;
  const averageIndex = resultTasks.length;
  const taskNamesForResults = resultTasks.map(task => task.name);
  const resultColumns = [...taskNamesForResults, "Average"];
  const percent = (value, precision = 0) => value.toFixed(precision) + "%";

  function resultSwitch(id, controls, items, onSelect) {
    const buttons = items.map((item, index) => {
      const button = choiceButton(item.label, index === 0, () => {
        buttons.forEach(other => other.setAttribute("aria-pressed", String(other === button)));
        onSelect(item);
      });
      button.setAttribute("aria-controls", controls);
      return button;
    });
    byId(id).replaceChildren(...buttons);
  }

  function resultBar(label, value, tone) {
    const row = document.createElement("li");
    row.className = "result-bar";
    row.dataset.tone = tone;
    const track = textElement("span", "", "result-track");
    track.setAttribute("aria-hidden", "true");
    const bar = textElement("span", "", "result-fill");
    bar.style.width = value + "%";
    track.append(bar);
    const name = textElement("span", "", "result-bar-label");
    name.append(label);
    row.append(name, track,
      textElement("strong", percent(value), "result-value"));
    return row;
  }

  function resultTable(columns, rows, className = "result-table") {
    const table = document.createElement("table");
    table.className = className;
    const header = table.createTHead().insertRow();
    columns.forEach(label => {
      const cell = textElement("th", label);
      cell.scope = "col";
      header.append(cell);
    });
    const body = table.createTBody();
    rows.forEach(({ label, values, featured }) => {
      const row = body.insertRow();
      if (featured) row.className = "result-featured";
      const name = document.createElement("th");
      name.scope = "row";
      name.append(label);
      row.append(name, ...values.map(value => textElement("td", value)));
    });
    return table;
  }

  function benchmarkStat(value, label) {
    const stat = textElement("div", "", "benchmark-stat");
    stat.append(textElement("strong", value), textElement("span", label));
    return stat;
  }

  function benchmarkColumn(task, method, value) {
    const label = percent(value, Number.isInteger(value) ? 0 : 1);
    const item = textElement("li", "", "benchmark-column");
    item.dataset.tone = method.tone;
    item.tabIndex = 0;
    item.setAttribute("aria-label", task + ", " + method.name + ", " + label);
    const fill = textElement("span", "", "benchmark-column-fill");
    fill.style.height = value + "%";
    fill.setAttribute("aria-hidden", "true");
    const score = textElement("span", label, "benchmark-score");
    fill.append(score);
    item.append(fill);
    return item;
  }

  byId("benchmark-legend").replaceChildren(...benchmark.methods.map(method => {
    const item = textElement("li", method.name);
    item.dataset.tone = method.tone;
    return item;
  }));

  function showBenchmark(mode) {
    const [ours, ...baselines] = benchmark.methods;
    const oursAverage = ours[mode.id][averageIndex];
    const strongest = baselines.reduce((best, current) =>
      current[mode.id][averageIndex] > best[mode.id][averageIndex] ? current : best);
    const lead = oursAverage - strongest[mode.id][averageIndex];
    byId("benchmark-summary").replaceChildren(
      benchmarkStat(percent(oursAverage, 1), "HiMoDex average across five tasks"),
      benchmarkStat("+" + lead.toFixed(1) + " pp", "Over " + strongest.name + ", the strongest baseline")
    );
    put("benchmark-caption", mode.description);
    byId("benchmark-chart").replaceChildren(...resultColumns.map((task, index) => {
      const group = textElement("li", "", "benchmark-group");
      if (index === averageIndex) group.classList.add("benchmark-average");
      const bars = textElement("ul", "", "benchmark-columns");
      bars.append(...benchmark.methods.map(method => benchmarkColumn(task, method, method[mode.id][index])));
      group.append(bars, textElement("span", task, "benchmark-task-label"));
      return group;
    }));
  }

  resultSwitch("benchmark-modes", "benchmark-view", benchmark.modes, showBenchmark);
  showBenchmark(benchmark.modes[0]);
  put("benchmark-tighten", benchmark.tightenNote);
  byId("benchmark-table").replaceChildren(resultTable(
    ["Method", "Input", ...resultColumns],
    benchmark.modes.flatMap(mode => benchmark.methods.map(method => ({
      label: method.name,
      values: [mode.id.toUpperCase(), ...method[mode.id].map(value => percent(value, 1))],
      featured: method.tone === "hi"
    })))
  ));
  byId("parameter-table").replaceChildren(resultTable(
    ["Method (VTFA)", "Total (millions)", "Trainable (millions)"],
    benchmark.methods.map(method => ({
      label: method.tone === "hi" ? method.name + "\u2020" : method.name,
      values: [method.total, method.trainable],
      featured: method.tone === "hi"
    }))
  ));

  const ablationTask = byId("ablation-task");
  const ablationById = new Map(ablation.rows.map(row => [row.id, row]));
  let activeAblation = ablation.groups[0];

  function ablationLabel(name) {
    const parts = name.split(/\bL_(sig|state|W)\b/);
    if (parts.length === 1) return name;

    const label = document.createDocumentFragment();
    label.append(parts[0]);
    for (let index = 1; index < parts.length; index += 2) {
      const symbol = textElement("span", "", "loss-symbol");
      symbol.append(textElement("i", "L"), textElement("sub", parts[index]));
      label.append(symbol, parts[index + 1]);
    }
    return label;
  }

  function taskFailures(task, taskIndex, rows) {
    const content = document.createDocumentFragment();
    const failureCodes = task.failures.map((_, index) => "F" + (index + 1));
    const table = resultTable(["Configuration", ...failureCodes], rows.map(row => ({
      label: ablationLabel(row.name),
      values: row.failures[taskIndex],
      featured: row.full
    })), "result-table failure-table");
    table.tBodies[0].querySelectorAll("td").forEach(cell => {
      cell.style.setProperty("--count", Number(cell.textContent));
    });
    const key = textElement("ul", "", "failure-key");
    task.failures.forEach((name, index) => {
      const item = document.createElement("li");
      item.append(textElement("strong", failureCodes[index]), " " + name);
      key.append(item);
    });
    content.append(textElement("h4", "Failure counts"), table, key);
    return content;
  }

  function showAblation() {
    const index = Number(ablationTask.value);
    const rows = activeAblation.ids.map(id => ablationById.get(id));
    put("ablation-metric", resultColumns[index] + " · Success rate (0–100%)");
    byId("ablation-bars").replaceChildren(...rows.map(row =>
      resultBar(ablationLabel(row.name), row.rates[index], row.full ? "hi" : "variant")));
    const task = resultTasks[index];
    const panel = byId("ablation-context");
    panel.hidden = !task;
    if (task) panel.replaceChildren(taskFailures(task, index, rows));
  }

  ablationTask.add(new Option("Five-task average", averageIndex));
  resultTasks.forEach((task, index) => ablationTask.add(new Option(task.name, index)));
  ablationTask.addEventListener("change", showAblation);
  resultSwitch("ablation-groups", "ablation-view", ablation.groups, group => {
    activeAblation = group;
    showAblation();
  });
  showAblation();
  put("ablation-tighten", "¹ Tighten Screw measures the approach stage.");
  byId("ablation-table").replaceChildren(resultTable(
    ["Configuration", ...resultColumns],
    ablation.rows.map(row => ({
      label: ablationLabel(row.name),
      values: row.rates.map(value => percent(value)),
      featured: row.full
    }))
  ));

  put("citation-code", content.citation);
  byId("copy-citation").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(content.citation);
      put("copy-status", "Citation copied.");
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(byId("citation-code"));
      selection.removeAllRanges();
      selection.addRange(range);
      put("copy-status", "Citation selected. Press Ctrl+C or Command+C to copy.");
    }
  });
  const sectionLinks = [...document.querySelectorAll(".nav-links a")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach(link => {
          if (link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-15% 0px -60% 0px" });
    sectionLinks.forEach(link => observer.observe(document.querySelector(link.hash)));
  }
})();
