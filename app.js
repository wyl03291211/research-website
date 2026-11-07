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
    row.forEach((author, index) => {
      if (index) paragraph.append(", ");
      const name = textElement("span", author.name, "author-name");
      name.append(textElement("sup", author.affiliation));
      paragraph.append(name);
    });
    return paragraph;
  }));
  document.querySelector(".affiliations").replaceChildren(
    textElement("p", project.affiliations), textElement("p", project.authorNote)
  );
  document.querySelectorAll(".resources .resource").forEach((button, index) => {
    const url = [project.links.paper, project.links.arxiv, project.links.code, "#experiments"][index];
    if (!url) return;
    const link = document.createElement("a");
    link.className = button.className;
    link.href = url;
    link.append(...button.childNodes);
    button.replaceWith(link);
  });
  if (project.hero.src) {
    const media = document.createElement(project.hero.type === "video" ? "video" : "img");
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
    media.addEventListener(media.tagName === "VIDEO" ? "loadeddata" : "load", () => {
      document.querySelector(".hero-media .media-placeholder").hidden = true;
    });
    media.src = project.hero.src;
    document.querySelector(".hero-media").append(media);
  }
  project.institutions.forEach((institution, index) => {
    const slot = document.querySelectorAll(".logo-placeholder")[index];
    if (!slot) return;
    if (!institution.logo) {
      slot.setAttribute("aria-label", institution.name);
      return;
    }
    const image = new Image();
    image.alt = institution.name;
    image.addEventListener("load", () => slot.replaceChildren(image));
    image.src = institution.logo;
  });
  const cover = document.querySelector("main");
  document.querySelector(".replay").hidden = false;
  document.querySelector(".replay").addEventListener("click", () => {
    cover.classList.remove("entrance");
    void cover.offsetWidth;
    cover.classList.add("entrance");
  });

  put("abstract-summary", content.abstract.summary);
  byId("abstract-paragraphs").replaceChildren(...content.abstract.paragraphs.map(text => textElement("p", text)));
  byId("contributions").replaceChildren(...content.abstract.contributions.map(text => textElement("li", text)));
  put("method-intro", content.method.intro);
  put("method-caption", content.method.figure.caption);
  put("diagram-model", content.method.diagram.model);
  put("diagram-representation", content.method.diagram.representation);
  for (const side of ["inputs", "outputs"]) {
    byId("diagram-" + side).replaceChildren(...content.method.diagram[side].map(text => textElement("div", text, "diagram-node")));
  }
  let architectureView = byId("architecture");
  if (content.method.figure.src) {
    const image = new Image();
    image.alt = content.method.figure.alt;
    image.addEventListener("load", () => {
      architectureView.replaceWith(image);
      architectureView = image;
    });
    image.src = content.method.figure.src;
  }
  function selectStage(index) {
    document.querySelectorAll(".stage-button").forEach((button, position) => {
      button.setAttribute("aria-pressed", String(index === position));
    });
    put("stage-description", content.method.stages[index].description);
    put("stage-note", content.method.stages[index].detail);
  }
  content.method.stages.forEach((stage, index) => {
    const button = choiceButton("", index === 0, () => selectStage(index), "stage-button");
    button.setAttribute("aria-controls", "stage-detail");
    button.append(textElement("span", "0" + (index + 1)), textElement("strong", stage.name), textElement("small", stage.subtitle));
    byId("method-stages").append(button);
  });
  selectStage(0);

  const experiment = content.experiments;
  const state = {
    task: 0,
    category: experiment.categories[0].id,
    example: 0,
    compare: true,
    baseline: experiment.baselines[0]?.id || ""
  };
  put("experiments-intro", experiment.intro);
  experiment.baselines.forEach(baseline => byId("baseline-selector").add(new Option(baseline.name, baseline.id)));

  const videos = [byId("ours-video"), byId("baseline-video")];
  const play = byId("play-together");
  const timeline = byId("timeline");
  let mediaVersion = 0;
  let loadedVideos = [];
  let currentVideos = [];
  let playing = false;
  let buffering = false;
  let playRequest = 0;
  let sharedDuration = 0;

  function timeLabel(seconds) {
    const value = Math.max(0, Math.floor(seconds || 0));
    return Math.floor(value / 60) + ":" + String(value % 60).padStart(2, "0");
  }
  function displayTime(value) {
    timeline.value = Math.min(value, sharedDuration);
    byId("playback-time").textContent = timeLabel(value) + " / " + timeLabel(sharedDuration);
  }
  function pauseVideos() {
    playRequest++;
    playing = false;
    buffering = false;
    videos.forEach(video => video.pause());
    play.textContent = state.compare ? "▷ Play together" : "▷ Play video";
  }
  function seekVideos(time) {
    currentVideos.forEach(video => { video.currentTime = Math.min(time, video.duration); });
    displayTime(time);
  }
  function updatePlayback() {
    const pending = loadedVideos.some(video => video.dataset.failed !== "true" && video.readyState < 1);
    currentVideos = loadedVideos.filter(video => video.dataset.failed !== "true" && Number.isFinite(video.duration) && video.duration > 0);
    sharedDuration = currentVideos.length ? Math.min(...currentVideos.map(video => video.duration)) : 0;
    const usable = currentVideos.length > 0 && !pending;
    play.disabled = !usable;
    byId("restart-videos").disabled = !usable;
    timeline.disabled = !usable;
    timeline.max = sharedDuration || 1;
    displayTime(usable ? currentVideos[0].currentTime : 0);
    document.querySelectorAll("[data-expand]").forEach((button, index) => {
      button.disabled = !currentVideos.includes(videos[index]);
    });
    const failed = loadedVideos.some(video => video.dataset.failed === "true");
    put("playback-status", failed ? "A video could not be loaded. Check its file path or format." :
      pending ? "Loading video metadata…" :
      !usable ? "[Videos to be added]" :
      currentVideos.length === 2 ? "Paired playback · shared time range · muted" : "One video available · muted");
  }
  async function playVideos() {
    if (play.disabled) return;
    if (currentVideos[0].currentTime >= sharedDuration - 0.05) seekVideos(0);
    const request = ++playRequest;
    const version = mediaVersion;
    playing = true;
    buffering = false;
    play.textContent = state.compare ? "Ⅱ Pause together" : "Ⅱ Pause video";
    const results = await Promise.allSettled(currentVideos.map(video => video.play()));
    if (request !== playRequest || version !== mediaVersion) return;
    if (results.some(result => result.status === "rejected")) {
      pauseVideos();
      put("playback-status", "Playback could not start. Retry or open an individual video.");
    }
  }
  play.addEventListener("click", () => { if (playing) pauseVideos(); else void playVideos(); });
  byId("restart-videos").addEventListener("click", () => seekVideos(0));
  timeline.addEventListener("input", () => seekVideos(Number(timeline.value)));
  byId("playback-speed").addEventListener("change", event => {
    videos.forEach(video => { video.playbackRate = Number(event.target.value); });
  });
  function advanceTimeline() {
    if (!playing || buffering || !currentVideos.length) return;
    const clock = currentVideos[0];
    if (clock.currentTime >= sharedDuration - 0.04 || clock.ended) {
      if (byId("loop-videos").checked) {
        seekVideos(0);
        void playVideos();
      } else {
        pauseVideos();
        seekVideos(sharedDuration);
      }
      return;
    }
    currentVideos.slice(1).forEach(video => {
      if (Math.abs(video.currentTime - clock.currentTime) > 0.2) video.currentTime = clock.currentTime;
    });
    displayTime(clock.currentTime);
  }
  videos.forEach(video => {
    video.addEventListener("timeupdate", advanceTimeline);
    video.addEventListener("ended", advanceTimeline);
    video.addEventListener("waiting", () => {
      if (!playing || !currentVideos.includes(video)) return;
      playRequest++;
      buffering = true;
      currentVideos.forEach(item => item.pause());
      put("playback-status", "Buffering paired videos…");
    });
    video.addEventListener("canplay", () => {
      if (!buffering || !playing || !currentVideos.every(item => item.readyState >= 3)) return;
      seekVideos(currentVideos[0].currentTime);
      updatePlayback();
      void playVideos();
    });
  });

  function setMedia(video, asset, side, context) {
    const placeholder = byId(side + "-placeholder");
    const source = asset || {};
    byId(side + "-outcome").textContent = source.outcome || "[Outcome]";
    byId(side + "-note").textContent = source.note || "[Comparison for this baseline is not available]";
    placeholder.querySelector(".placeholder-context").textContent = context;
    placeholder.hidden = false;
    video.hidden = true;
    video.removeAttribute("src");
    video.removeAttribute("poster");
    video.load();
    video.dataset.failed = "false";
    video.onloadedmetadata = null;
    video.onerror = null;
    if (!source.src) return;
    const version = mediaVersion;
    loadedVideos.push(video);
    if (source.poster) video.poster = source.poster;
    video.onloadedmetadata = () => {
      if (version !== mediaVersion) return;
      video.hidden = false;
      placeholder.hidden = true;
      video.playbackRate = Number(byId("playback-speed").value);
      updatePlayback();
    };
    video.onerror = () => {
      if (version !== mediaVersion) return;
      pauseVideos();
      video.dataset.failed = "true";
      video.hidden = true;
      placeholder.hidden = false;
      placeholder.querySelector(".placeholder-context").textContent = "Video unavailable · check source";
      updatePlayback();
    };
    video.src = source.src;
    video.load();
  }
  function selectedCases() {
    return experiment.tasks[state.task].cases.filter(example => example.category === state.category);
  }
  function renderCase() {
    pauseVideos();
    mediaVersion++;
    loadedVideos = [];
    currentVideos = [];
    const task = experiment.tasks[state.task];
    const examples = selectedCases();
    const example = examples[state.example];
    const category = experiment.categories.find(item => item.id === state.category);
    const baseline = experiment.baselines.find(item => item.id === state.baseline);
    byId("case-selector").replaceChildren(...examples.map((item, index) => {
      const button = choiceButton(item.title, state.example === index, () => {
        state.example = index;
        renderCase();
        byId("case-selector").children[index].focus({ preventScroll: true });
      });
      button.setAttribute("aria-controls", "case-instruction");
      return button;
    }));
    put("category-note", category.note);
    put("case-instruction", example?.instruction || "[No examples in this category yet]");
    put("case-note", example?.note || "[Add a case for this category]");
    put("baseline-title", baseline?.name || "[Baseline]");
    const context = task.name + " / " + category.label + " / " + (example?.title || "");
    setMedia(videos[0], example?.ours, "ours", context);
    setMedia(videos[1], state.compare ? example?.baselines?.[state.baseline] : null, "baseline", context);
    byId("baseline-filter").hidden = !state.compare;
    videos[1].closest(".player-card").hidden = !state.compare;
    document.querySelector(".comparison").classList.toggle("single", !state.compare);
    updatePlayback();
  }
  function selectCategory(category) {
    state.category = category;
    state.example = 0;
    document.querySelectorAll("#category-selector button").forEach((button, index) => {
      button.setAttribute("aria-pressed", String(experiment.categories[index].id === category));
    });
    renderCase();
  }
  experiment.categories.forEach(category => {
    byId("category-selector").append(choiceButton(category.label, category.id === state.category, () => selectCategory(category.id)));
  });
  experiment.tasks.forEach((task, index) => {
    const button = choiceButton("", index === 0, () => {
      state.task = index;
      renderTask();
    }, "task-button");
    button.append(textElement("span", "TASK " + String(index + 1).padStart(2, "0")), textElement("strong", task.name));
    button.setAttribute("aria-controls", "task-title");
    byId("task-selector").append(button);
  });
  function renderTask() {
    const task = experiment.tasks[state.task];
    state.baseline = experiment.baselines[0]?.id || "";
    byId("baseline-selector").value = state.baseline;
    document.querySelectorAll(".task-button").forEach((button, index) => {
      button.setAttribute("aria-pressed", String(index === state.task));
    });
    put("task-title", task.name);
    put("task-description", task.description);
    put("task-setup", task.setup);
    selectCategory("success");
  }
  byId("baseline-selector").addEventListener("change", event => {
    state.baseline = event.target.value;
    renderCase();
  });
  byId("layout-selector").addEventListener("change", event => {
    state.compare = event.target.value === "compare";
    renderCase();
  });
  renderTask();

  const dialog = byId("media-dialog");
  function openDialog(title, element) {
    put("dialog-title", title);
    byId("dialog-content").replaceChildren(element);
    dialog.showModal();
  }
  byId("enlarge-method").addEventListener("click", () => {
    const figure = architectureView.cloneNode(true);
    figure.removeAttribute("id");
    figure.querySelectorAll("[id]").forEach(element => element.removeAttribute("id"));
    openDialog("Method overview", figure);
  });
  document.querySelectorAll("[data-expand]").forEach((button, index) => {
    button.addEventListener("click", () => {
      pauseVideos();
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.muted = true;
      video.src = videos[index].currentSrc;
      video.addEventListener("loadedmetadata", () => { video.currentTime = videos[index].currentTime; }, { once: true });
      openDialog(index === 0 ? "Our method" : byId("baseline-title").textContent, video);
    });
  });
  byId("close-dialog").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => {
    byId("dialog-content").querySelectorAll("video").forEach(video => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    });
    byId("dialog-content").replaceChildren();
  });

  put("results-intro", content.results.intro);
  put("results-metric", content.results.metric);
  put("results-note", content.results.note);
  const headings = document.createElement("tr");
  const methodHeading = textElement("th", "Method");
  methodHeading.scope = "col";
  headings.append(methodHeading);
  experiment.tasks.forEach((task, index) => {
    const heading = textElement("th", "Task " + String(index + 1).padStart(2, "0"));
    heading.scope = "col";
    heading.title = task.name;
    headings.append(heading);
  });
  byId("results-table").querySelector("thead").append(headings);
  content.results.methods.forEach(method => {
    const row = document.createElement("tr");
    if (method.ours) row.className = "ours-row";
    const name = textElement("th", method.name);
    name.scope = "row";
    row.append(name, ...experiment.tasks.map((_, index) => textElement("td", method.values[index] ?? "—")));
    byId("results-table").querySelector("tbody").append(row);
  });
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
