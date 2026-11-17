// All text and media live here. Fill src with a relative asset path. Empty paths show placeholders.
// Keep task and category IDs stable when changing their display names.
window.RESEARCH = {
  "project": {
    "name": "HiMoDex",
    "title": [
      "Many Senses, One World:",
      "Learning Hierarchical Multimodal World Representations for Bimanual Dexterous Manipulation"
    ],
    "authors": [
      [
        {
          "name": "Author 1",
          "affiliation": ""
        },
        {
          "name": "Author 2",
          "affiliation": ""
        },
        {
          "name": "Author 3",
          "affiliation": ""
        }
      ]
    ],
    "affiliations": "",
    "authorNote": "",
    "footer": "Anonymous submission",
    "hero": {
      "src": "assets/hero-overview-dark.png",
      "motion": "assets/hero-overview-motion.mp4",
      "poster": "",
      "type": "image",
      "alt": "Vision, fingertip tactile, force–torque and audio feed the multimodal world representation for the WAM policy, which produces bimanual actions and predicts future states during training."
    },
    "institutions": [],
    "links": {
      "paper": "",
      "arxiv": "",
      "code": ""
    }
  },
  "abstract": {
    "summary": "HiMoDex learns hierarchical multimodal world-state representations for bimanual dexterous manipulation.",
    "paragraphs": [
      "Bimanual dexterous manipulation relies on multimodal inputs that capture visual context and non-visual physical interaction cues for precise and coordinated control. To address the challenge of effectively integrating these modalities for policy learning, we propose HiMoDex, a two-stage framework centered on hierarchical multimodal world-state representations. In Stage 1, we pretrain a hierarchical representation network on the collected dataset of 1.19 million synchronized multimodal time steps. The network integrates visual context with tactile, force-torque, and audio cues into unified world-state embeddings. In Stage 2, we freeze the pretrained network and use its embeddings to condition a shared world-action transformer. The transformer jointly learns action generation and action-conditioned future-state prediction. Experiments across five real-world tasks show that HiMoDex achieves an average success rate of 78.7%, representing an absolute improvement of 32.0% over the strongest evaluated baseline. Extensive ablations validate the benefits of hierarchical representation learning and two-stage training. Failure-mode analyses further help explain performance differences across model variants. Code, data, and demos will be released at website."
    ],
    "figure": {
      "src": "assets/figure-1.png",
      "width": 1640,
      "height": 1660,
      "alt": "The bimanual robot with multi-view vision, fingertip tactile sensing, wrist force–torque sensing and audio, above a summary of the two training stages.",
      "title": "Fig. 1 · Bimanual dexterous system"
    }
  },
  "method": {
    "figure": {
      "src": "assets/figure-2.webp",
      "width": 3200,
      "height": 2500,
      "alt": "Two-stage HiMoDex training pipeline showing multimodal representation pretraining and a shared world-action transformer with action generation and future-state prediction heads.",
      "title": "Fig. 2 · HiMoDex training pipeline"
    }
  },
  "experiments": {
    "intro": "Browse demonstrations by method across the five real-world tasks.",
    "tasks": [
      {"id": "task-1", "name": "Pack Conveyor Box"},
      {"id": "task-2", "name": "Wipe Whiteboard"},
      {"id": "task-3", "name": "Insert Plug"},
      {"id": "task-4", "name": "Scrub Pan"},
      {"id": "task-5", "name": "Tighten Screw"}
    ],
    "categories": [
      {"id": "success", "label": "Successful trials"},
      {"id": "failure", "label": "Failure cases"},
      {"id": "observations", "label": "Generalization & interesting observations"}
    ],
    // Under each method, add or remove clip entries in its groups. task refers to a task ID above.
    "methods": [
      {
        "name": "HiMoDex",
        "groups": {
          "success": [
            {"task": "task-1", "src": "", "poster": "", "caption": ""},
            {"task": "task-2", "src": "", "poster": "", "caption": ""},
            {"task": "task-3", "src": "", "poster": "", "caption": ""},
            {"task": "task-4", "src": "", "poster": "", "caption": ""},
            {"task": "task-5", "src": "", "poster": "", "caption": ""}
          ],
          "failure": [
            {"task": "task-1", "src": "", "poster": "", "caption": ""},
            {"task": "task-2", "src": "", "poster": "", "caption": ""},
            {"task": "task-3", "src": "", "poster": "", "caption": ""},
            {"task": "task-4", "src": "", "poster": "", "caption": ""},
            {"task": "task-5", "src": "", "poster": "", "caption": ""}
          ],
          "observations": [
            {"task": "task-1", "src": "", "poster": "", "caption": ""},
            {"task": "task-2", "src": "", "poster": "", "caption": ""},
            {"task": "task-3", "src": "", "poster": "", "caption": ""},
            {"task": "task-4", "src": "", "poster": "", "caption": ""},
            {"task": "task-5", "src": "", "poster": "", "caption": ""}
          ]
        }
      },
      {
        "name": "Qwen3Pi",
        "groups": {
          "success": [
            {"task": "task-1", "src": "", "poster": "", "caption": ""},
            {"task": "task-2", "src": "", "poster": "", "caption": ""},
            {"task": "task-3", "src": "", "poster": "", "caption": ""},
            {"task": "task-4", "src": "", "poster": "", "caption": ""},
            {"task": "task-5", "src": "", "poster": "", "caption": ""}
          ],
          "failure": [
            {"task": "task-1", "src": "", "poster": "", "caption": ""},
            {"task": "task-2", "src": "", "poster": "", "caption": ""},
            {"task": "task-3", "src": "", "poster": "", "caption": ""},
            {"task": "task-4", "src": "", "poster": "", "caption": ""},
            {"task": "task-5", "src": "", "poster": "", "caption": ""}
          ],
          "observations": [
            {"task": "task-1", "src": "", "poster": "", "caption": ""},
            {"task": "task-2", "src": "", "poster": "", "caption": ""},
            {"task": "task-3", "src": "", "poster": "", "caption": ""},
            {"task": "task-4", "src": "", "poster": "", "caption": ""},
            {"task": "task-5", "src": "", "poster": "", "caption": ""}
          ]
        }
      },
      {
        "name": "JEPA-WAM",
        "groups": {
          "success": [
            {"task": "task-1", "src": "", "poster": "", "caption": ""},
            {"task": "task-2", "src": "", "poster": "", "caption": ""},
            {"task": "task-3", "src": "", "poster": "", "caption": ""},
            {"task": "task-4", "src": "", "poster": "", "caption": ""},
            {"task": "task-5", "src": "", "poster": "", "caption": ""}
          ],
          "failure": [
            {"task": "task-1", "src": "", "poster": "", "caption": ""},
            {"task": "task-2", "src": "", "poster": "", "caption": ""},
            {"task": "task-3", "src": "", "poster": "", "caption": ""},
            {"task": "task-4", "src": "", "poster": "", "caption": ""},
            {"task": "task-5", "src": "", "poster": "", "caption": ""}
          ],
          "observations": [
            {"task": "task-1", "src": "", "poster": "", "caption": ""},
            {"task": "task-2", "src": "", "poster": "", "caption": ""},
            {"task": "task-3", "src": "", "poster": "", "caption": ""},
            {"task": "task-4", "src": "", "poster": "", "caption": ""},
            {"task": "task-5", "src": "", "poster": "", "caption": ""}
          ]
        }
      }
    ]
  },
  "results": {
    "tasks": [
      {
        "name": "Pack Conveyor Box",
        "failures": [
          "Insecure object grasp",
          "Failed to grasp the object"
        ]
      },
      {
        "name": "Wipe Whiteboard",
        "failures": [
          "Failed to grasp the eraser",
          "Insecure eraser grasp",
          "Marks remained after wiping"
        ]
      },
      {
        "name": "Insert Plug",
        "failures": [
          "Failed to grasp the plug",
          "Failed to insert the plug"
        ]
      },
      {
        "name": "Scrub Pan",
        "failures": [
          "Too little force to activate the switch",
          "Pressed off target and missed the switch",
          "Too few scrubbing strokes"
        ]
      },
      {
        "name": "Tighten Screw\u00b9",
        "failures": [
          "Grasp failure",
          "Failed to approach the screw"
        ]
      }
    ],
    "benchmark": {
      "modes": [
        {
          "id": "vtfa",
          "label": "Full multimodal",
          "description": "VTFA \u00b7 Vision, tactile, force\u2013torque, and audio"
        },
        {
          "id": "v",
          "label": "Vision only",
          "description": "V \u00b7 Vision only"
        }
      ],
      "methods": [
        {
          "name": "HiMoDex",
          "tone": "hi",
          "vtfa": [
            100,
            90,
            76.7,
            83.3,
            43.3,
            78.7
          ],
          "v": [
            100,
            83.3,
            10,
            66.7,
            20,
            56
          ],
          "total": "814.08",
          "trainable": "327.62"
        },
        {
          "name": "Qwen3Pi",
          "tone": "qwen",
          "vtfa": [
            100,
            80,
            13.3,
            0,
            36.7,
            46
          ],
          "v": [
            96.7,
            83.3,
            6.7,
            0,
            23.3,
            42
          ],
          "total": "2,609.18",
          "trainable": "2,606.04"
        },
        {
          "name": "JEPA-WAM",
          "tone": "jepa",
          "vtfa": [
            96.7,
            93.3,
            0,
            16.7,
            26.7,
            46.7
          ],
          "v": [90, 80, 0, 10, 20, 40],
          "total": "1,356.64",
          "trainable": "556.44"
        }
      ],
      "tightenNote": "\u00b9 Tighten Screw scores grasping the screwdriver and moving it near the screw. Full tightening was 0% for all methods."
    },
    "ablation": {
      "groups": [
        {
          "label": "Sensor inputs",
          "ids": [
            "09",
            "10",
            "11",
            "01"
          ]
        },
        {
          "label": "Pretraining losses",
          "ids": [
            "01",
            "02",
            "03",
            "04"
          ]
        },
        {
          "label": "Fusion design",
          "ids": [
            "01",
            "05",
            "06",
            "08"
          ]
        },
        {
          "label": "Training strategy",
          "ids": [
            "01",
            "12",
            "13"
          ]
        }
      ],
      "rows": [
        {
          "id": "01",
          "name": "HiMoDex (VTFA)",
          "full": true,
          "rates": [100, 80, 70, 80, 40, 74],
          "failures": [
            [0, 0],
            [0, 0, 2],
            [0, 3],
            [2, 0, 0],
            [6, 0]
          ]
        },
        {
          "id": "02",
          "name": "w/o L_sig",
          "rates": [100, 90, 10, 0, 20, 44],
          "failures": [
            [0, 0],
            [0, 0, 1],
            [6, 3],
            [0, 10, 0],
            [8, 0]
          ]
        },
        {
          "id": "03",
          "name": "w/o L_state",
          "rates": [100, 80, 0, 10, 30, 44],
          "failures": [
            [0, 0],
            [0, 0, 2],
            [0, 10],
            [9, 0, 0],
            [5, 2]
          ]
        },
        {
          "id": "04",
          "name": "w/o L_sig + L_state",
          "rates": [70, 70, 30, 10, 10, 38],
          "failures": [
            [1, 2],
            [0, 0, 3],
            [0, 7],
            [0, 0, 9],
            [5, 4]
          ]
        },
        {
          "id": "05",
          "name": "Flat fusion",
          "rates": [90, 70, 40, 70, 20, 58],
          "failures": [
            [0, 1],
            [2, 0, 1],
            [2, 4],
            [3, 0, 0],
            [5, 3]
          ]
        },
        {
          "id": "06",
          "name": "H-concat",
          "rates": [90, 90, 0, 40, 20, 48],
          "failures": [
            [0, 1],
            [0, 0, 1],
            [6, 4],
            [3, 3, 0],
            [8, 0]
          ]
        },
        {
          "id": "08",
          "name": "w/o gates",
          "rates": [90, 80, 20, 70, 40, 60],
          "failures": [
            [0, 1],
            [0, 0, 2],
            [0, 8],
            [3, 0, 0],
            [6, 0]
          ]
        },
        {
          "id": "09",
          "name": "V (Vision)",
          "rates": [100, 70, 10, 70, 20, 54],
          "failures": [
            [0, 0],
            [0, 0, 3],
            [0, 9],
            [2, 0, 1],
            [8, 0]
          ]
        },
        {
          "id": "10",
          "name": "VT (Vision, tactile)",
          "rates": [100, 70, 70, 70, 40, 70],
          "failures": [
            [0, 0],
            [0, 0, 3],
            [0, 3],
            [2, 0, 1],
            [6, 0]
          ]
        },
        {
          "id": "11",
          "name": "VTF (Vision, tactile, force\u2013torque)",
          "rates": [100, 90, 60, 60, 50, 72],
          "failures": [
            [0, 0],
            [0, 0, 1],
            [0, 4],
            [4, 0, 0],
            [5, 0]
          ]
        },
        {
          "id": "12",
          "name": "w/o L_W",
          "rates": [100, 80, 20, 60, 20, 56],
          "failures": [
            [0, 0],
            [0, 0, 2],
            [0, 8],
            [0, 0, 4],
            [8, 0]
          ]
        },
        {
          "id": "13",
          "name": "End-to-end training",
          "rates": [100, 50, 30, 40, 40, 52],
          "failures": [
            [0, 0],
            [0, 3, 2],
            [0, 7],
            [4, 0, 2],
            [6, 0]
          ]
        }
      ]
    }
  },
  "citation": "@unpublished{himodex,\n  title  = {Many Senses, One World: Learning Hierarchical Multimodal World Representations for Bimanual Dexterous Manipulation},\n  author = {Anonymous}\n}"
};
