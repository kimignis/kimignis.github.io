/*
 * 이 파일만 수정하면 홈페이지의 주요 내용이 바뀝니다.
 * ko / en 값을 함께 채우면 우측 상단 언어 전환에 자동 반영됩니다.
 * 자세한 예시는 docs/EDITING.md를 참고하세요.
 */

window.PORTFOLIO_CONTENT = {
    site: {
        url: "https://kimignis.github.io/",
        defaultLanguage: "ko",
        github: "https://github.com/kimignis",
        lab: "http://iai.khu.ac.kr/wiki/wiki.php/Members#s-3"
    },

    profile: {
        name: { ko: "김민식", en: "Minsik Kim" },
        nameEnglish: "Minsik Kim",
        kicker: {
            ko: "Kyung Hee University · Industrial AI Lab.",
            en: "Kyung Hee University · Industrial AI Lab."
        },
        headline: {
            ko: "설명 가능한 AI로\n사람과 현장을 잇습니다.",
            en: "Building explainable AI\nfor people and the field."
        },
        intro: {
            ko: "경희대학교 빅데이터응용학과 박사과정 김민식입니다. 설명가능 AI와 LLM을 중심으로 제조·생산 시스템의 예측과 의사결정을 연구합니다.",
            en: "I am a Ph.D. student in Big Data Analytics at Kyung Hee University, studying explainable AI and LLMs for prediction and decision-making in manufacturing and production systems."
        },
        role: {
            ko: "빅데이터응용학과 박사과정",
            en: "Ph.D. Student · Big Data Analytics"
        },
        affiliation: {
            ko: "경희대학교 산업지능연구실",
            en: "Industrial AI Lab. · Kyung Hee University"
        },
        bio: {
            ko: "산업경영공학을 전공하고 빅데이터응용학 석사를 마쳤습니다. 앙상블 트리에서 규칙을 추출하고 LLM으로 자연어 설명을 만드는 석사 연구를 바탕으로, 인간 중심의 제조 AI를 확장하고 있습니다.",
            en: "After studying Industrial & Management Systems Engineering and completing an M.S. in Big Data Analytics, I am extending my master's work on rule extraction and LLM-generated explanations toward human-centered manufacturing AI."
        },
        statement: {
            ko: "현장에 쓰이는 모델은 정확도뿐 아니라, 왜 그런 판단을 했는지 사람의 언어로 설명할 수 있어야 한다고 생각합니다.",
            en: "Models used in the field should not only be accurate; they should explain their decisions in language people can act on."
        }
    },

    education: [
        {
            period: "2025—Present",
            degree: { ko: "빅데이터응용학과 박사과정", en: "Ph.D. Student · Big Data Analytics" },
            school: { ko: "경희대학교", en: "Kyung Hee University" }
        },
        {
            period: "2023—2025",
            degree: { ko: "빅데이터응용학 석사", en: "M.S. · Big Data Analytics" },
            school: { ko: "경희대학교", en: "Kyung Hee University" }
        },
        {
            period: "2017—2023",
            degree: { ko: "산업경영공학 학사", en: "B.S. · Industrial & Management Systems Engineering" },
            school: { ko: "경희대학교", en: "Kyung Hee University" }
        }
    ],

    researchMatrix: {
        methods: [
            { ko: "설명가능 AI", en: "XAI" },
            { ko: "대규모 언어 모델", en: "LLM" },
            { ko: "인간 중심 AI", en: "Human-Centered AI" }
        ],
        applications: [
            { ko: "생산 AI", en: "Production AI" },
            { ko: "제조 AI", en: "Manufacturing AI" },
            { ko: "생성형 AI", en: "Generative AI" }
        ],
        cells: [
            {
                title: { ko: "설명 가능한 생산 의사결정", en: "Explainable production decisions" },
                description: {
                    ko: "반도체 FAB의 디스패칭 규칙과 생산 흐름을 사람이 검토할 수 있는 근거로 바꿉니다.",
                    en: "Turn semiconductor FAB dispatching rules and production flows into evidence people can inspect."
                }
            },
            {
                title: { ko: "생산 지식의 언어화", en: "Production knowledge in language" },
                description: {
                    ko: "현장의 운영 지식과 모델 결과를 LLM으로 연결해 자연어 설명과 피드백 흐름을 설계합니다.",
                    en: "Connect operational knowledge and model outputs with LLMs to design explanations and feedback loops."
                }
            },
            {
                title: { ko: "사람 중심 생산 지능", en: "Human-centered production intelligence" },
                description: {
                    ko: "운영자의 판단과 모델의 예측이 서로 보완되는 생산 의사결정 방식을 탐구합니다.",
                    en: "Explore production decisions where operator judgment and model predictions reinforce each other."
                }
            },
            {
                title: { ko: "제조 모델의 판단 근거", en: "Evidence behind manufacturing models" },
                description: {
                    ko: "앙상블 모델에서 규칙을 추출해 품질 예측과 제조 분석의 판단 구조를 드러냅니다.",
                    en: "Extract rules from ensemble models to reveal the reasoning behind quality prediction and manufacturing analytics."
                }
            },
            {
                title: { ko: "LLM 기반 제조 설명", en: "LLM-assisted manufacturing explanations" },
                description: {
                    ko: "추출된 규칙을 LLM이 이해하기 쉬운 자연어로 변환해 현장 검토 가능성을 높입니다.",
                    en: "Use LLMs to translate extracted rules into accessible language for practical review."
                }
            },
            {
                title: { ko: "Human-on-the-loop 제조 AI", en: "Human-on-the-loop manufacturing AI" },
                description: {
                    ko: "사람의 피드백을 품질 예측 시스템에 다시 연결해 현장 변화에 적응하는 AI를 연구합니다.",
                    en: "Feed human feedback into quality prediction systems to study AI that adapts to field changes."
                }
            },
            {
                title: { ko: "생성 모델의 해석 가능성", en: "Interpreting generative models" },
                description: {
                    ko: "생성형 모델의 결과가 어떤 근거와 맥락에서 만들어졌는지 검토할 수 있는 설명 방식을 탐색합니다.",
                    en: "Explore explanations that make the evidence and context behind generative outputs inspectable."
                }
            },
            {
                title: { ko: "산업 지식을 다루는 LLM", en: "LLMs for industrial knowledge" },
                description: {
                    ko: "산업 데이터와 도메인 지식을 연결해 현장에서 활용 가능한 언어 기반 AI를 설계합니다.",
                    en: "Connect industrial data and domain knowledge to design language-based AI for real operations."
                }
            },
            {
                title: { ko: "사람과 생성형 AI의 협업", en: "Human–generative AI collaboration" },
                description: {
                    ko: "사람이 생성 결과를 이해하고 수정하며 다음 판단에 반영할 수 있는 상호작용을 연구합니다.",
                    en: "Study interactions that help people understand, revise, and act on generative outputs."
                }
            }
        ],
        featuredPath: [0, 1, 2, 5, 4, 7, 6]
    },

    researchLoop: [
        {
            icon: "message-circle-question",
            label: "QUESTION",
            title: { ko: "문제를 연구 질문으로", en: "Frame the question" },
            description: {
                ko: "현장의 모호한 문제를 관찰 가능한 변수와 검증 가능한 연구 질문으로 바꿉니다.",
                en: "Turn an ambiguous field problem into observable variables and a testable research question."
            }
        },
        {
            icon: "brain-circuit",
            label: "MODEL",
            title: { ko: "구조를 학습하는 모델", en: "Learn the structure" },
            description: {
                ko: "데이터와 도메인 지식을 함께 사용해 예측 성능뿐 아니라 문제의 구조를 학습합니다.",
                en: "Use data and domain knowledge to learn the structure of the problem, not prediction performance alone."
            }
        },
        {
            icon: "scan-search",
            label: "EVIDENCE",
            title: { ko: "판단 근거를 사람의 언어로", en: "Make evidence legible" },
            description: {
                ko: "규칙 추출과 LLM을 연결해 모델의 판단 근거를 사람이 검토할 수 있는 설명으로 만듭니다.",
                en: "Connect rule extraction and LLMs to turn model reasoning into explanations people can inspect."
            }
        },
        {
            icon: "route",
            label: "DECISION",
            title: { ko: "피드백을 다시 의사결정으로", en: "Return to decisions" },
            description: {
                ko: "사람의 피드백을 다시 모델과 운영 과정에 연결해 현장의 다음 의사결정을 돕습니다.",
                en: "Feed human feedback back into the model and workflow to support the next field decision."
            }
        }
    ],

    focus: [
        {
            title: { ko: "인간 중심 XAI", en: "Human-centered XAI" },
            trace: ["MODEL", "RULE", "EXPLANATION"],
            description: {
                ko: "앙상블 모델에서 규칙을 추출하고 LLM으로 자연어 설명을 생성해, 제조 분석 결과를 사람이 검토하고 활용할 수 있게 합니다.",
                en: "Extract rules from ensemble models and turn them into natural-language explanations with LLMs so manufacturing insights can be inspected and used by people."
            }
        },
        {
            title: { ko: "생산 지능", en: "Production intelligence" },
            trace: ["FAB", "FLOW", "DECISION"],
            description: {
                ko: "반도체 FAB의 디스패칭 규칙과 생산 네트워크의 병목·재공품 흐름을 학습해, 더 설명 가능한 운영 의사결정을 탐구합니다.",
                en: "Learn dispatching rules and WIP flows in semiconductor fabs to support more interpretable operational decisions."
            }
        },
        {
            title: { ko: "에너지 예측", en: "Energy forecasting" },
            trace: ["WEATHER", "SEQUENCE", "FORECAST"],
            description: {
                ko: "기상 예보와 관측 데이터를 함께 사용하는 Transformer 기반 시계열 모델로 풍력 발전량의 단기 예측을 연구합니다.",
                en: "Study short-term wind-power forecasting with Transformer-based time-series models that combine weather forecasts and observations."
            }
        }
    ],

    work: [
        {
            year: "2025—",
            type: { ko: "박사 연구 · XAI + LLM", en: "Doctoral research · XAI + LLM" },
            title: { ko: "설명에서 상호작용으로", en: "From explanation to interaction" },
            summary: {
                ko: "LLM이 생성한 자연어 규칙 설명과 human-on-the-loop 피드백을 결합해, 제조 품질 예측 시스템이 현장 변화에 적응하는 방식을 연구합니다.",
                en: "Investigating how LLM-generated rule explanations and human-on-the-loop feedback can help manufacturing quality prediction systems adapt to change."
            },
            tags: ["Explainable AI", "LLM", "Human-in-the-loop"]
        },
        {
            year: "2023—24",
            type: { ko: "출판 연구 · 생산 AI", en: "Published research · Production AI" },
            title: { ko: "반도체 FAB 디스패칭 규칙 발견", en: "Discovering semiconductor dispatching rules" },
            summary: {
                ko: "블랙박스 예측 성능에 머무르지 않고, 해석 가능한 머신러닝을 이용해 반도체 생산 현장의 작업 할당 규칙을 발견했습니다.",
                en: "Used interpretable machine learning to discover actionable job-dispatching rules in a semiconductor fab, moving beyond black-box prediction alone."
            },
            tags: ["Semiconductor FAB", "Interpretable ML", "FAIM 2024"],
            url: "https://doi.org/10.1007/978-3-031-74482-2_11"
        },
        {
            year: "2022—",
            type: { ko: "시계열 연구 · 스마트 에너지", en: "Time-series research · Smart energy" },
            title: { ko: "기상 정보를 결합한 풍력 발전량 예측", en: "Wind-power forecasting with weather data" },
            summary: {
                ko: "기상 예보와 관측의 차이를 함께 다루는 dual-input encoder–decoder Transformer로 단기 풍력 발전량 예측을 고도화하고 있습니다.",
                en: "Developing a dual-input encoder–decoder Transformer that jointly models weather forecasts and observations for short-term wind-power forecasting."
            },
            tags: ["Transformer", "Time series", "Wind power"]
        }
    ],

    publications: [
        {
            title: {
                ko: "반도체 FAB에서 해석 가능한 머신러닝을 이용한 디스패칭 규칙 발견",
                en: "Discovering Dispatching Rules in a Semiconductor Fab Using Interpretable Machine Learning"
            },
            authors: "Minsik Kim, Young-Suk Han, Josue Obregon, Jae-Yoon Jung",
            venue: {
                ko: "FAIM 2024 · Lecture Notes in Mechanical Engineering, 2024",
                en: "FAIM 2024 · Lecture Notes in Mechanical Engineering, 2024"
            },
            url: "https://doi.org/10.1007/978-3-031-74482-2_11"
        },
        {
            title: {
                ko: "대규모 언어 모델이 생성한 자연어 설명을 통한 제조 분석용 인간 중심 설명가능 AI",
                en: "Human-Centered Explainable AI for Manufacturing Analytics through Natural Language Explanations Generated by Large Language Models"
            },
            authors: "Minsik Kim, Jae-Yoon Jung",
            venue: { ko: "저널 원고 심사 중, 2026", en: "Journal manuscript under review, 2026" }
        },
        {
            title: {
                ko: "기상 예보를 활용한 Dual-Input Encoder–Decoder Transformer 기반 단기 풍력 발전량 예측",
                en: "Short-Term Wind Power Forecasting Using a Dual-Input Encoder–Decoder Transformer with Weather Forecasts"
            },
            authors: "Minsik Kim, Jae-Yoon Jung",
            venue: { ko: "저널 원고 심사 중, 2026", en: "Journal manuscript under review, 2026" }
        },
        {
            title: {
                ko: "Industry 5.0을 위한 Human-on-the-Loop LLM 기반 적응형 품질 예측 시스템",
                en: "A Human-on-the-Loop LLM Framework for Adaptive Quality Prediction Systems for Industry 5.0"
            },
            authors: "Minsik Kim, Jae-Yoon Jung",
            venue: { ko: "INFORMS Annual Meeting, 2025", en: "INFORMS Annual Meeting, 2025" }
        }
    ],

    skills: [
        {
            title: { ko: "Research focus", en: "Research focus" },
            items: {
                ko: ["설명가능 AI", "대규모 언어 모델", "인간 중심 AI"],
                en: ["Explainable AI", "Large language models", "Human-centered AI"]
            }
        },
        {
            title: { ko: "Methods", en: "Methods" },
            items: {
                ko: ["딥러닝 · 머신러닝", "Transformer", "규칙 추출 · GNN"],
                en: ["Deep & machine learning", "Transformers", "Rule extraction · GNNs"]
            }
        },
        {
            title: { ko: "Domains", en: "Domains" },
            items: {
                ko: ["제조 분석", "반도체 생산 시스템", "재생에너지 예측"],
                en: ["Manufacturing analytics", "Semiconductor production", "Renewable-energy forecasting"]
            }
        },
        {
            title: { ko: "Toolbox", en: "Toolbox" },
            items: {
                ko: ["Python", "PyTorch", "TensorFlow"],
                en: ["Python", "PyTorch", "TensorFlow"]
            }
        }
    ],

    contact: {
        heading: {
            ko: "설명 가능한 AI를\n함께 이야기해요.",
            en: "Let’s talk about\nAI people can understand."
        },
        body: {
            ko: "제조 AI, XAI, LLM, 시계열 예측에 관한 연구와 협업 제안을 환영합니다. 공개 작업과 최신 기록은 GitHub와 연구실 페이지에서 확인할 수 있습니다.",
            en: "I welcome research conversations and collaborations around manufacturing AI, XAI, LLMs, and time-series forecasting. Current public work is available on GitHub and the lab page."
        },
        links: [
            { label: "GitHub", url: "https://github.com/kimignis", icon: "github" },
            { label: "IAI Lab.", url: "http://iai.khu.ac.kr/wiki/wiki.php/Members#s-3", icon: "building-2" },
            { label: "FAIM 2024", url: "https://doi.org/10.1007/978-3-031-74482-2_11", icon: "book-open-text" }
        ]
    }
};
