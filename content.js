// All text and media live here. Fill src with a relative asset path. Empty paths show placeholders.
// Keep task, category and baseline IDs stable when changing their display names.
window.RESEARCH = {
  "project": {
    "name": "PROJECT",
    "title": [
      "[Full Research Paper Title",
      "Goes Here in Two",
      "or Three Lines]"
    ],
    "authors": [
      [
        {
          "name": "[Author One]",
          "affiliation": "1,*"
        },
        {
          "name": "[Author Two]",
          "affiliation": "2,*"
        },
        {
          "name": "[Author Three]",
          "affiliation": "1"
        }
      ],
      [
        {
          "name": "[Author Four]",
          "affiliation": "2"
        },
        {
          "name": "[Author Five]",
          "affiliation": "3"
        },
        {
          "name": "[Author Six]",
          "affiliation": "1"
        }
      ]
    ],
    "affiliations": "[1 Institution One] · [2 Institution Two] · [3 Institution Three]",
    "authorNote": "[Author contribution note]",
    "footer": "[Research group · Year]",
    "hero": {
      "src": "",
      "poster": "",
      "type": "image",
      "alt": "[Project hero image]"
    },
    "institutions": [
      {
        "name": "[Institution One]",
        "logo": ""
      },
      {
        "name": "[Institution Two]",
        "logo": ""
      },
      {
        "name": "[Institution Three]",
        "logo": ""
      }
    ],
    "links": {
      "paper": "",
      "arxiv": "",
      "code": ""
    }
  },
  "abstract": {
    "summary": "[One sentence describing the problem, the proposed method, and its main contribution.]",
    "paragraphs": [
      "[Introduce the research problem and explain why it matters. Describe the challenge that existing approaches leave unresolved.]",
      "[Summarize the proposed approach, the role of each input modality, and how the two arms are controlled. Close with the main finding supported by the experiments.]"
    ],
    "contributions": [
      "[First key contribution]",
      "[Second key contribution]",
      "[Third key contribution]"
    ]
  },
  "method": {
    "intro": "[Explain the overall approach in two or three sentences, from observations and instructions to coordinated robot actions.]",
    "figure": {
      "src": "",
      "alt": "[Overall method architecture]",
      "caption": "[Figure 1. Explain the main components and the flow of information.]"
    },
    "diagram": {
      "inputs": [
        "[Visual input]",
        "[Additional modality]",
        "[Language instruction]"
      ],
      "model": "[Model / policy]",
      "representation": "[Shared representation]",
      "outputs": [
        "[Left-arm action]",
        "[Right-arm action]"
      ]
    },
    "stages": [
      {
        "name": "[Stage one]",
        "subtitle": "[Input & representation]",
        "description": "[Describe what enters this stage, how it is represented, and what information is passed to the next stage.]",
        "detail": "[Input / output / key design choice]"
      },
      {
        "name": "[Stage two]",
        "subtitle": "[Fusion & reasoning]",
        "description": "[Explain how the modalities are combined and which part of the method enables the intended behavior.]",
        "detail": "[Input / output / key design choice]"
      },
      {
        "name": "[Stage three]",
        "subtitle": "[Bimanual control]",
        "description": "[Describe action prediction and execution, including how observations close the loop.]",
        "detail": "[Input / output / key design choice]"
      }
    ]
  },
  "experiments": {
    "intro": "[Describe the evaluation setting and what these five tasks are designed to test.]",
    "baselines": [
      {
        "id": "baseline-a",
        "name": "[Baseline A]"
      },
      {
        "id": "baseline-b",
        "name": "[Baseline B]"
      }
    ],
    "categories": [
      {
        "id": "success",
        "label": "Successful trials",
        "note": "[Describe the success criterion and the behavior to look for. Categories refer to our method; baseline outcomes can differ.]"
      },
      {
        "id": "failure",
        "label": "Failure cases",
        "note": "[Describe the failure mode, the point where execution breaks down, and the comparison to the baseline.]"
      },
      {
        "id": "observations",
        "label": "Interesting observations",
        "note": "[Describe an unexpected behavior, a recovery, a response to perturbation, or another phenomenon worth examining.]"
      }
    ],
    "tasks": [
      {
        "id": "task-1",
        "name": "[Task 01 name]",
        "description": "[Briefly describe the goal, the objects involved, and the required two-arm interaction.]",
        "setup": "[Robot / environment / input modalities]",
        "cases": [
          {
            "id": "success-1",
            "category": "success",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "success-2",
            "category": "success",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "failure-1",
            "category": "failure",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "failure-2",
            "category": "failure",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "observations-1",
            "category": "observations",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "observations-2",
            "category": "observations",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          }
        ]
      },
      {
        "id": "task-2",
        "name": "[Task 02 name]",
        "description": "[Briefly describe the goal, the objects involved, and the required two-arm interaction.]",
        "setup": "[Robot / environment / input modalities]",
        "cases": [
          {
            "id": "success-1",
            "category": "success",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "success-2",
            "category": "success",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "failure-1",
            "category": "failure",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "failure-2",
            "category": "failure",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "observations-1",
            "category": "observations",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "observations-2",
            "category": "observations",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          }
        ]
      },
      {
        "id": "task-3",
        "name": "[Task 03 name]",
        "description": "[Briefly describe the goal, the objects involved, and the required two-arm interaction.]",
        "setup": "[Robot / environment / input modalities]",
        "cases": [
          {
            "id": "success-1",
            "category": "success",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "success-2",
            "category": "success",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "failure-1",
            "category": "failure",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "failure-2",
            "category": "failure",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "observations-1",
            "category": "observations",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "observations-2",
            "category": "observations",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          }
        ]
      },
      {
        "id": "task-4",
        "name": "[Task 04 name]",
        "description": "[Briefly describe the goal, the objects involved, and the required two-arm interaction.]",
        "setup": "[Robot / environment / input modalities]",
        "cases": [
          {
            "id": "success-1",
            "category": "success",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "success-2",
            "category": "success",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "failure-1",
            "category": "failure",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "failure-2",
            "category": "failure",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "observations-1",
            "category": "observations",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "observations-2",
            "category": "observations",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          }
        ]
      },
      {
        "id": "task-5",
        "name": "[Task 05 name]",
        "description": "[Briefly describe the goal, the objects involved, and the required two-arm interaction.]",
        "setup": "[Robot / environment / input modalities]",
        "cases": [
          {
            "id": "success-1",
            "category": "success",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "success-2",
            "category": "success",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "failure-1",
            "category": "failure",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "failure-2",
            "category": "failure",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "observations-1",
            "category": "observations",
            "title": "[Example 01]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          },
          {
            "id": "observations-2",
            "category": "observations",
            "title": "[Example 02]",
            "instruction": "[Natural-language instruction for this trial]",
            "note": "[Explain what happens in this example and the comparison or phenomenon the viewer should notice.]",
            "ours": {
              "src": "",
              "poster": "",
              "outcome": "[Outcome]",
              "note": "[Our method — trial-specific note]"
            },
            "baselines": {
              "baseline-a": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline A — trial-specific note]"
              },
              "baseline-b": {
                "src": "",
                "poster": "",
                "outcome": "[Outcome]",
                "note": "[Baseline B — trial-specific note]"
              }
            }
          }
        ]
      }
    ]
  },
  "results": {
    "intro": "[Summarize the quantitative evaluation protocol, trial counts, and metric definitions. Fill each cell with the measured result.]",
    "metric": "[Metric name]",
    "methods": [
      {
        "name": "Ours",
        "values": [
          "—",
          "—",
          "—",
          "—",
          "—"
        ],
        "ours": true
      },
      {
        "name": "[Baseline A]",
        "values": [
          "—",
          "—",
          "—",
          "—",
          "—"
        ]
      },
      {
        "name": "[Baseline B]",
        "values": [
          "—",
          "—",
          "—",
          "—",
          "—"
        ]
      }
    ],
    "note": "[Table 1. Add units, aggregation details, and the meaning of uncertainty where applicable.]"
  },
  "citation": "@article{project_year,\n  title   = {[Full paper title]},\n  author  = {[Author list]},\n  journal = {[Venue or preprint]},\n  year    = {[Year]}\n}"
};
