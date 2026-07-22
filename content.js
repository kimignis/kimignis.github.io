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
        linkedin: "https://www.linkedin.com/in/%EB%AF%BC%EC%8B%9D-%EA%B9%80-9b32a8293/",
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
            ko: "경희대학교 빅데이터응용학과 박사과정이자 산업AI연구실 연구원입니다. 제조 시스템의 의사결정을 지원하는 산업 인공지능을 연구하며 Process Mining, GNN, LLM, AI Agents를 활용합니다.",
            en: "I am a Ph.D. student in Big Data Analytics and a researcher at Kyung Hee University's Industrial AI Lab. I study Industrial AI for manufacturing decisions using process mining, GNNs, LLMs, and AI agents."
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
            ko: "산업경영공학을 전공하고 빅데이터응용학 석사를 마쳤습니다. 현재 제조 현장의 지능형 지원을 위한 AI Agents, Agentic AI, Multi-Agent Systems, 설명가능 AI를 연구하며 생산 스케줄링·물류 최적화와 운영 전문지식을 연결하는 실용적이고 신뢰할 수 있는 산업 AI를 설계하고 있습니다.",
            en: "After studying Industrial & Management Systems Engineering and completing an M.S. in Big Data Analytics, I now research AI agents, agentic AI, multi-agent systems, and explainable AI for manufacturing assistance, connecting production scheduling and logistics optimization with operational expertise."
        },
        statement: {
            ko: "현장에 쓰이는 모델은 정확도뿐 아니라, 왜 그런 판단을 했는지 사람의 언어로 설명할 수 있어야 한다고 생각합니다.",
            en: "Models used in the field should not only be accurate; they should explain their decisions in language people can act on."
        }
    },

    education: [
        {
            period: "2025.02—2029.02",
            degree: { ko: "빅데이터응용학과 박사과정", en: "Ph.D. Student · Big Data Analytics" },
            school: { ko: "경희대학교", en: "Kyung Hee University" },
            detail: { ko: "산업AI연구실", en: "Industrial AI Lab." }
        },
        {
            period: "2023.03—2025.02",
            degree: { ko: "빅데이터응용학 석사", en: "M.S. · Big Data Analytics" },
            school: { ko: "경희대학교", en: "Kyung Hee University" },
            detail: { ko: "산업AI연구실", en: "Industrial AI Lab." }
        },
        {
            period: "2017.03—2023.02",
            degree: { ko: "산업경영공학 학사", en: "B.S. · Industrial & Management Systems Engineering" },
            school: { ko: "경희대학교", en: "Kyung Hee University" },
            detail: { ko: "동아리와 학회 · CAPTIMA", en: "Student club and society · CAPTIMA" }
        }
    ],

    credentials: [
        {
            issued: "2023.10",
            title: { ko: "Deep Learning Specialization", en: "Deep Learning Specialization" },
            issuer: { ko: "Coursera", en: "Coursera" }
        },
        {
            issued: "2023.09",
            title: { ko: "Google for Developers Machine Learning Bootcamp", en: "Google for Developers Machine Learning Bootcamp" },
            issuer: { ko: "Google Developers Group", en: "Google Developers Group" }
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
            year: "2025.09—2026.02",
            type: { ko: "한국연구재단 · 연구조원", en: "National Research Foundation of Korea · Research assistant" },
            title: {
                ko: "비언어적 의사전달을 위한 뇌-AI 인터페이스 및 뇌파-언어 모델 개발",
                en: "Brain–AI Interface and Brainwave-to-Language Model for Nonverbal Communication"
            },
            summary: {
                ko: "비언어적 의사전달을 지원하는 뇌-AI 인터페이스와 뇌파 기반 언어 모델 개발 과제에 참여했습니다.",
                en: "Participated in developing a brain–AI interface and brainwave-based language model for nonverbal communication."
            },
            tags: ["Brain–AI Interface", "Multimodal AI", "Language Model"]
        },
        {
            year: "2025.07—2025.09",
            type: { ko: "현대엔지비 · 멘토", en: "Hyundai NGV · Mentor" },
            title: {
                ko: "부트캠퍼스 과정 기획·개발 자문 및 교육",
                en: "Bootcamp Curriculum Planning, Development Advisory, and Training"
            },
            summary: {
                ko: "딥러닝 기반 부트캠프의 과정 기획과 개발을 자문하고 교육 멘토로 참여했습니다.",
                en: "Advised on the planning and development of a deep-learning bootcamp and contributed as an educational mentor."
            },
            tags: ["Deep Learning", "Education", "Mentoring"]
        },
        {
            year: "2025.04—2026.02",
            type: { ko: "한화오션 · 연구조원", en: "Hanwha Ocean · Research assistant" },
            title: {
                ko: "설비 및 공정 통합 관제를 위한 제조 특화 SLM 개발",
                en: "Manufacturing-Specific SLM for Integrated Equipment and Process Monitoring"
            },
            summary: {
                ko: "설비와 공정 정보를 통합 관제하는 제조 도메인 특화 소형 언어 모델의 알고리즘 개발에 참여했습니다.",
                en: "Contributed to algorithm development for a manufacturing-specific small language model that integrates equipment and process monitoring."
            },
            tags: ["SLM", "Manufacturing AI", "Integrated Monitoring"]
        },
        {
            year: "2024.10—2025.09",
            type: { ko: "SK하이닉스 · 연구조원", en: "SK hynix · Research assistant" },
            title: {
                ko: "디지털 트윈 환경을 위한 Bottleneck 공정 목표 WIP 산출 및 관리방안 연구",
                en: "Target WIP Estimation and Control for Bottleneck Processes in a Digital-Twin Environment"
            },
            summary: {
                ko: "On-die Oscilloscope 데이터를 활용해 반도체 병목 공정의 목표 WIP를 산출하고 관리하는 알고리즘을 개발했습니다.",
                en: "Developed algorithms to estimate and manage target WIP for semiconductor bottleneck processes using on-die oscilloscope data."
            },
            tags: ["Digital Twin", "Semiconductor FAB", "WIP Control"]
        },
        {
            year: "2024.09—2026.02",
            type: { ko: "한국산업기술기획평가원 · 연구조원", en: "KEIT · Research assistant" },
            title: {
                ko: "생성형 AI 및 소량데이터 기반 온디바이스 AI 품질 검사 최적화 기술 개발",
                en: "Generative and Small-Data On-Device AI for Optimized Quality Inspection"
            },
            summary: {
                ko: "제한된 제조 데이터를 활용해 현장에서 동작하는 온디바이스 AI 품질 검사 기술을 최적화하는 연구에 참여했습니다.",
                en: "Participated in optimizing on-device AI quality inspection that operates with limited manufacturing data."
            },
            tags: ["Generative AI", "On-device AI", "Quality Inspection"]
        },
        {
            year: "2024.03—2025.11",
            type: { ko: "정보통신기획평가원 · 연구조원", en: "IITP · Research assistant" },
            title: {
                ko: "인공지능융합혁신인재양성 — 경희대학교",
                en: "AI Convergence Innovation Talent Development — Kyung Hee University"
            },
            summary: {
                ko: "산업 문제와 AI 기술을 연결하는 융합형 연구·교육 프로그램의 3·4단계 과제에 참여했습니다.",
                en: "Contributed to phases three and four of an interdisciplinary research and education program connecting industrial problems with AI."
            },
            tags: ["AI Convergence", "Industrial AI", "Research Education"]
        },
        {
            year: "2024.03—2025.02",
            type: { ko: "경희대학교 · 연구조원", en: "Kyung Hee University · Research assistant" },
            title: {
                ko: "설명가능한 AI를 이용한 Transformer 기반 풍력 발전 예측 기술 개발",
                en: "Transformer-Based Wind-Power Forecasting with Explainable AI"
            },
            summary: {
                ko: "기상 데이터 기반 풍력 발전 예측 모델에 설명가능성을 결합하는 딥러닝 알고리즘을 개발했습니다.",
                en: "Developed deep-learning algorithms that combine weather-based wind-power forecasting with explainable AI."
            },
            tags: ["Transformer", "Explainable AI", "Wind Power"]
        },
        {
            year: "2023.03—2025.02",
            type: { ko: "한국연구재단 BK21 · 연구조원", en: "NRF BK21 · Research assistant" },
            title: {
                ko: "지속가능 빅데이터 신산업 선도인력 교육연구단",
                en: "Education and Research Group for Sustainable Big-Data Industries"
            },
            summary: {
                ko: "지속가능한 빅데이터 신산업을 이끌 연구인력 양성을 위한 BK21 교육·연구 과제에 참여했습니다.",
                en: "Participated in a BK21 education and research initiative for developing talent in sustainable big-data industries."
            },
            tags: ["BK21", "Big Data", "Research Education"]
        },
        {
            year: "2023.11—2024.04",
            type: { ko: "씨에스피아이 · 연구조원", en: "CSPI · Research assistant" },
            title: {
                ko: "AI를 활용한 하이퍼클러스터 기반 디스패칭 규칙 생성",
                en: "AI-Driven Dispatching Rule Generation for Hyper-Cluster Systems"
            },
            summary: {
                ko: "하이퍼클러스터 환경의 운영 의사결정을 지원하는 머신러닝 기반 디스패칭 규칙 생성 알고리즘을 개발했습니다.",
                en: "Developed machine-learning algorithms for dispatching rule generation to support operations in hyper-cluster environments."
            },
            tags: ["Machine Learning", "Dispatching", "Decision Support"]
        },
        {
            year: "2023.04—2023.09",
            type: { ko: "씨에스피아이 · 연구조원", en: "CSPI · Research assistant" },
            title: {
                ko: "AI 기반 반도체 디스패칭 검증 및 해석 규칙 생성 기술 고도화",
                en: "AI-Based Semiconductor Dispatching Validation and Interpretable Rule Generation"
            },
            summary: {
                ko: "반도체 디스패칭 결과를 검증하고 사람이 이해할 수 있는 운영 규칙을 생성하는 AI 알고리즘을 고도화했습니다.",
                en: "Advanced AI algorithms that validate semiconductor dispatching results and generate human-interpretable operating rules."
            },
            tags: ["Semiconductor FAB", "Interpretable ML", "Dispatching"]
        },
        {
            year: "2023.01—2024.02",
            type: { ko: "방위사업청 · 연구조원", en: "Defense Acquisition Program Administration · Research assistant" },
            title: {
                ko: "자율운항 성능 고도화를 위한 해상환경 학습 데이터셋 구축체계 AI 모델링 및 고도화",
                en: "AI Modeling and Advancement of Maritime-Environment Datasets for Autonomous Navigation"
            },
            summary: {
                ko: "자율운항 성능 향상을 위한 해상환경 학습 데이터셋 구축과 AI 모델링 연구에 단계별로 참여했습니다.",
                en: "Contributed across project phases to maritime-environment dataset construction and AI modeling for autonomous navigation."
            },
            tags: ["Autonomous Navigation", "Dataset Engineering", "Deep Learning"]
        },
        {
            year: "2023.01—2023.04",
            type: { ko: "한국산업기술기획평가원 · 연구조원", en: "KEIT · Research assistant" },
            title: {
                ko: "운항성능 저하 분석 기반 최적 선체 관리 시점 결정 기술 개발",
                en: "Optimal Hull-Maintenance Timing through Ship Performance Degradation Analysis"
            },
            summary: {
                ko: "실제 운항 환경의 성능 저하를 분석해 선박 운항비 절감을 위한 최적 선체 관리 시점을 도출하는 연구에 참여했습니다.",
                en: "Participated in analyzing real-world ship performance degradation to determine hull-maintenance timing that reduces operating costs."
            },
            tags: ["Maritime AI", "Predictive Maintenance", "Optimization"]
        }
    ],

    publications: [
        {
            category: "domestic-conference",
            title: {
                ko: "생성형 AI를 활용한 대화형 공정 모니터링 지원 시스템 개발",
                en: "Development of an Interactive Process Monitoring Support System Using Generative AI"
            },
            authors: "김민식, 정솔, 강명구, 정유진, 백민우, 정재윤",
            venue: {
                ko: "한국디지털산업학회 춘계학술대회 · 2026.04.25",
                en: "The Korean Society of Digital Industry Spring Conference · Apr 25, 2026"
            },
            award: { ko: "학술대회 우수논문상", en: "Conference Best Paper Award" }
        },
        {
            category: "domestic-conference",
            title: {
                ko: "Text-to-SQL을 활용한 관계형 데이터베이스 연동 LLM 기반 질의응답 시스템",
                en: "An LLM-Based Question-Answering System for Relational Databases Using Text-to-SQL"
            },
            authors: "정솔, 김민식, 강명구, 정재윤",
            venue: {
                ko: "한국전자거래학회 추계학술대회 · 2025.11.29",
                en: "The Society for e-Business Studies Fall Conference · Nov 29, 2025"
            },
            award: { ko: "학술대회 우수논문상", en: "Conference Best Paper Award" }
        },
        {
            category: "domestic-conference",
            title: {
                ko: "도메인 특화 시계열 파운데이션 모델을 이용한 다중 단계 풍력 발전량 예측",
                en: "Multi-Step Wind Power Forecasting Using a Domain-Specific Time-Series Foundation Model"
            },
            authors: "강명구, 정솔, 김민식, 정재윤",
            venue: {
                ko: "한국전자거래학회 추계학술대회 · 2025.11.29",
                en: "The Society for e-Business Studies Fall Conference · Nov 29, 2025"
            }
        },
        {
            category: "domestic-conference",
            title: {
                ko: "시계열 파운데이션 인공지능 모델을 활용한 다중 단계 풍력 발전 예측",
                en: "Multi-Step Wind Power Forecasting Using Time-Series Foundation AI Models"
            },
            authors: "강명구, 김민식, 정재윤",
            venue: {
                ko: "한국컴퓨터종합학술대회 · 2025.07.02–04",
                en: "Korea Computer Congress (KCC 2025) · Jul 2–4, 2025"
            }
        },
        {
            category: "domestic-conference",
            title: {
                ko: "LLM을 이용한 고장진단의 설명가능 AI 기술 개발",
                en: "Explainable AI for Fault Diagnosis Using Large Language Models"
            },
            authors: "김민식, 최서현, 정재윤",
            venue: {
                ko: "한국전자거래학회 추계학술대회 · 2024.10.11–12",
                en: "The Society for e-Business Studies Fall Conference · Oct 11–12, 2024"
            }
        },
        {
            category: "domestic-conference",
            title: {
                ko: "시계열 DB를 이용한 풍력발전 예측 머신러닝 시스템 개발",
                en: "Machine-Learning System for Wind-Power Forecasting Using a Time-Series Database"
            },
            authors: "강명구, 정솔, 김민식, 정재윤",
            venue: {
                ko: "한국전자거래학회 추계학술대회 · 2024.10.11–12",
                en: "The Society for e-Business Studies Fall Conference · Oct 11–12, 2024"
            }
        },
        {
            category: "domestic-conference",
            title: {
                ko: "트랜스포머를 활용한 제주도 풍력 발전량 예측 모형",
                en: "Jeju Wind-Power Forecasting Model Using Transformers"
            },
            authors: "김민식, 한영석, 정재윤",
            venue: {
                ko: "한국CDE학회 동계학술대회 · 2023.02.08–10",
                en: "Society for Computational Design and Engineering Winter Conference · Feb 8–10, 2023"
            }
        },
        {
            category: "international-conference",
            title: {
                ko: "반도체 FAB에서 해석 가능한 머신러닝을 이용한 디스패칭 규칙 발견",
                en: "Discovering Dispatching Rules in a Semiconductor Fab Using Interpretable Machine Learning"
            },
            authors: "Minsik Kim, Young-Suk Han, Josue Obregon, Jae-Yoon Jung*",
            venue: {
                ko: "FAIM 2024 · Lecture Notes in Mechanical Engineering · 2024.12 · Scopus",
                en: "FAIM 2024 · Lecture Notes in Mechanical Engineering · Dec 2024 · Scopus"
            },
            url: "https://doi.org/10.1007/978-3-031-74482-2_11"
        },
        {
            category: "international-conference",
            title: {
                ko: "그래프 신경망을 활용한 생산 네트워크의 WIP 기반 병목 예측",
                en: "WIP-Based Bottleneck Prediction in Production Networks Using Graph Neural Networks"
            },
            authors: "Seohyun Choi, Minsik Kim, Jae-Yoon Jung*",
            venue: {
                ko: "2026 INFORMS Annual Meeting · San Francisco, CA · 2026.11.01–04",
                en: "2026 INFORMS Annual Meeting · San Francisco, CA · Nov 1–4, 2026"
            },
            status: { kind: "scheduled", label: { ko: "발표 예정", en: "Scheduled presentation" } }
        },
        {
            category: "international-conference",
            title: {
                ko: "프로세스 디스커버리 기반 그래프 신경망을 통한 WIP 예측 고도화",
                en: "Enhancing WIP Prediction through Process Discovery-Based Graph Neural Networks"
            },
            authors: "Minsik Kim, Seohyun Choi, Jae-Yoon Jung*",
            venue: {
                ko: "2026 INFORMS Annual Meeting · San Francisco, CA · 2026.11.01–04",
                en: "2026 INFORMS Annual Meeting · San Francisco, CA · Nov 1–4, 2026"
            },
            status: { kind: "scheduled", label: { ko: "발표 예정", en: "Scheduled presentation" } }
        },
        {
            category: "international-conference",
            title: {
                ko: "상상 언어 명령 제어를 위한 End-to-End EEG–LLM 프레임워크",
                en: "An End-to-End EEG–LLM Framework for Imagined Speech Command Control"
            },
            authors: "Myeonggu Kang, Yujin Chung, Minsik Kim, Chang S. Nam, Jae-Yoon Jung*",
            venue: {
                ko: "2026 INFORMS Annual Meeting · San Francisco, CA · 2026.11.01–04",
                en: "2026 INFORMS Annual Meeting · San Francisco, CA · Nov 1–4, 2026"
            },
            status: { kind: "scheduled", label: { ko: "발표 예정", en: "Scheduled presentation" } }
        },
        {
            category: "international-conference",
            title: {
                ko: "Industry 5.0을 위한 Human-on-the-Loop LLM 기반 적응형 품질 예측 시스템",
                en: "A Human-on-the-Loop LLM Framework for Adaptive Quality Prediction Systems for Industry 5.0"
            },
            authors: "Minsik Kim, Jae-Yoon Jung*",
            venue: {
                ko: "2025 INFORMS Annual Meeting · Atlanta, GA · 2025.10.26–29",
                en: "2025 INFORMS Annual Meeting · Atlanta, GA · Oct 26–29, 2025"
            }
        },
        {
            category: "international-conference",
            title: {
                ko: "설명가능한 인공지능을 활용한 풍력 발전량 예측",
                en: "Wind Power Generation Forecasting Using Explainable Artificial Intelligence"
            },
            authors: "Sol Jeong, Minsik Kim, Myeong-Gu Kang, Jae-Yoon Jung*",
            venue: {
                ko: "CIIS 2024 · Nagoya, Japan · 2024.11.22–24",
                en: "7th International Conference on Computational Intelligence and Intelligent Systems (CIIS 2024) · Nagoya, Japan · Nov 22–24, 2024"
            }
        },
        {
            category: "international-journal",
            title: {
                ko: "적응형 품질 예측 시스템을 위한 Human-on-the-Loop LLM 프레임워크",
                en: "A Human-on-the-Loop LLM Framework for Adaptive Quality Prediction Systems"
            },
            authors: "Minsik Kim, Jae-Yoon Jung",
            venue: { ko: "Target journal: F", en: "Target journal: F" },
            status: { kind: "preparation", label: { ko: "원고 작성 중", en: "Manuscript in preparation" } }
        },
        {
            category: "international-journal",
            title: {
                ko: "대규모 언어 모델이 생성한 자연어 설명을 통한 제조 분석용 인간 중심 설명가능 AI",
                en: "Human-Centered Explainable AI for Manufacturing Analytics through Natural Language Explanations Generated by Large Language Models"
            },
            authors: "Minsik Kim, Jae-Yoon Jung*",
            venue: { ko: "CII", en: "CII" },
            status: { kind: "submitted", label: { ko: "2026.07.22 투고 완료", en: "Submitted · Jul 22, 2026" } }
        },
        {
            category: "international-journal",
            title: {
                ko: "기상 예보를 활용한 Dual-Input Encoder–Decoder Transformer 기반 단기 풍력 발전량 예측",
                en: "Short-Term Wind Power Forecasting Using a Dual-Input Encoder–Decoder Transformer with Weather Forecasts"
            },
            authors: "Minsik Kim, Jae-Yoon Jung*",
            venue: { ko: "ECM", en: "ECM" },
            status: { kind: "review", label: { ko: "리뷰 중 · 2026.05.18 투고", en: "Under review · Submitted May 18, 2026" } }
        }
    ],

    publicationCategories: [
        {
            id: "domestic-conference",
            label: { ko: "국내 학술대회", en: "Domestic Conference" }
        },
        {
            id: "domestic-journal",
            label: { ko: "국내 저널", en: "Domestic Journal" }
        },
        {
            id: "international-conference",
            label: { ko: "해외 학술대회", en: "International Conference" }
        },
        {
            id: "international-journal",
            label: { ko: "해외 저널", en: "International Journal" }
        }
    ],

    skills: [
        {
            title: { ko: "Research focus", en: "Research focus" },
            items: {
                ko: ["산업 인공지능", "AI 에이전트", "설명가능 AI"],
                en: ["Industrial AI", "AI agents", "Explainable AI"]
            }
        },
        {
            title: { ko: "Methods", en: "Methods" },
            items: {
                ko: ["Process Mining · GNN", "LLM · Agentic AI", "Multi-Agent Systems"],
                en: ["Process mining · GNNs", "LLMs · Agentic AI", "Multi-agent systems"]
            }
        },
        {
            title: { ko: "Domains", en: "Domains" },
            items: {
                ko: ["지능형 제조 지원", "생산 스케줄링", "물류 최적화"],
                en: ["Manufacturing assistance", "Production scheduling", "Logistics optimization"]
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
            ko: "산업 AI, 제조 지능, AI Agents, XAI에 관한 연구와 협업 제안을 환영합니다. 공개 작업과 최신 프로필은 LinkedIn, GitHub, 연구실 페이지에서 확인할 수 있습니다.",
            en: "I welcome research conversations and collaborations around Industrial AI, manufacturing intelligence, AI agents, and XAI. Current work and profile updates are available on LinkedIn, GitHub, and the lab page."
        },
        links: [
            { label: "LinkedIn", url: "https://www.linkedin.com/in/%EB%AF%BC%EC%8B%9D-%EA%B9%80-9b32a8293/", icon: "linkedin" },
            { label: "GitHub", url: "https://github.com/kimignis", icon: "github" },
            { label: "IAI Lab.", url: "http://iai.khu.ac.kr/wiki/wiki.php/Members#s-3", icon: "building-2" }
        ]
    }
};
