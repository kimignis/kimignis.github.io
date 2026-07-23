(function () {
    "use strict";

    const content = window.PORTFOLIO_CONTENT;
    if (!content) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const state = {
        language: localStorage.getItem("portfolio-language") || content.site.defaultLanguage || "ko",
        matrixIndex: 4,
        researchLoopIndex: 0,
        publicationFilter: "all",
        pastProjectsExpanded: false,
        matrixAnimation: null
    };

    const copy = {
        ko: {
            skipLink: "본문으로 바로가기",
            openMenu: "메뉴 열기",
            closeMenu: "메뉴 닫기",
            heroRole: "Industrial AI Researcher",
            current: "CURRENT",
            affiliation: "AFFILIATION",
            viewProfile: "프로필 살펴보기",
            activeProjects: "진행 연구",
            researchRecords: "연구 기록",
            researchTracks: "핵심 연구축",
            matrixEyebrow: "RESEARCH MAP · INTERACTIVE",
            matrixTitle: "연구 응용 분야 × 연구 방법",
            matrixInstruction: "교차점을 선택해 연구 주제를 살펴보세요.",
            methods: "RESEARCH METHODS",
            applications: "RESEARCH APPLICATIONS",
            profileLabel: "PROFILE",
            profileTitle: "산업의 문제를<br>설명 가능한 지능으로.",
            researchLoopLabel: "RESEARCH OPERATING LOOP",
            researchLoopTitle: "현장의 질문이 설명 가능한 의사결정이 되는 과정",
            researchLoopInstruction: "단계를 선택해 연구 방식을 살펴보세요.",
            educationTitle: "학력과 경험",
            profileResearchTitle: "관심 연구 영역",
            focusLede: "모델의 성능과 사람이 이해할 수 있는 근거를 함께 설계합니다.",
            workLabel: "RESEARCH PROJECT",
            workTitle: "참여한<br>연구 과제",
            workLede: "현재 진행 중인 과제와 완료한 산업체·정부 R&D 과제를 참여기간과 역할 중심으로 정리했습니다.",
            workOngoing: "Ongoing",
            workPast: "Past",
            projectActive: "ACTIVE",
            projectCompleted: "COMPLETED",
            projectTotal: "TOTAL PROJECTS",
            showPastProjects: "지난 과제 더 보기",
            hidePastProjects: "지난 과제 접기",
            publicationLabel: "PUBLICATION",
            publicationTitle: "논문과 발표",
            publicationLede: "대표 연구는 크게, 전체 기록은 유형별 아카이브로 구분했습니다.",
            selectedPublicationLabel: "SELECTED RESEARCH",
            selectedPublicationTitle: "지금 주목할 연구",
            selectedPublicationNote: "수상·투고·리뷰 중인 연구를 우선 보여줍니다.",
            archiveLabel: "RESEARCH ARCHIVE",
            archiveTitle: "전체 연구 기록",
            publicationAll: "전체",
            publicationEmpty: "현재 등록된 항목이 없습니다.",
            contactLabel: "CONTACT / COLLABORATION",
            backToTop: "맨 위로",
            nav: ["Profile", "Publications", "Research Projects", "Contact"]
        },
        en: {
            skipLink: "Skip to main content",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            heroRole: "Industrial AI Researcher",
            current: "CURRENT",
            affiliation: "AFFILIATION",
            viewProfile: "Explore profile",
            activeProjects: "Active R&D",
            researchRecords: "Research records",
            researchTracks: "Research tracks",
            matrixEyebrow: "RESEARCH MAP · INTERACTIVE",
            matrixTitle: "Applications × Methods",
            matrixInstruction: "Select an intersection to explore the research.",
            methods: "RESEARCH METHODS",
            applications: "RESEARCH APPLICATIONS",
            profileLabel: "PROFILE",
            profileTitle: "Turning industrial problems<br>into explainable intelligence.",
            researchLoopLabel: "RESEARCH OPERATING LOOP",
            researchLoopTitle: "From field questions to explainable decisions",
            researchLoopInstruction: "Select a stage to inspect the research process.",
            educationTitle: "Education & Experience",
            profileResearchTitle: "Research Interests",
            focusLede: "I design model performance together with evidence people can understand.",
            workLabel: "RESEARCH PROJECT",
            workTitle: "Research<br>projects",
            workLede: "Ongoing and completed industry and government-funded R&D projects, organized by participation period and role.",
            workOngoing: "Ongoing",
            workPast: "Past",
            projectActive: "ACTIVE",
            projectCompleted: "COMPLETED",
            projectTotal: "TOTAL PROJECTS",
            showPastProjects: "Show more past projects",
            hidePastProjects: "Collapse past projects",
            publicationLabel: "PUBLICATION",
            publicationTitle: "Papers and talks",
            publicationLede: "Featured studies lead into a complete archive organized by publication type.",
            selectedPublicationLabel: "SELECTED RESEARCH",
            selectedPublicationTitle: "Research in focus",
            selectedPublicationNote: "Awarded, submitted, and under-review work appears first.",
            archiveLabel: "RESEARCH ARCHIVE",
            archiveTitle: "Complete research record",
            publicationAll: "All",
            publicationEmpty: "No entries at this time.",
            contactLabel: "CONTACT / COLLABORATION",
            backToTop: "Back to top",
            nav: ["Profile", "Publications", "Research Projects", "Contact"]
        }
    };

    const navItems = [
        { id: "profile", index: 0 },
        { id: "publications", index: 1 },
        { id: "projects", index: 2 },
        { id: "contact", index: 3 }
    ];

    function localized(value) {
        if (value == null) return "";
        if (typeof value === "string") return value;
        return value[state.language] || value.ko || value.en || "";
    }

    function formatAuthors(authors, className = "publication-self") {
        const escaped = authors.replace(/[&<>"']/g, (character) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;",
            "'": "&#039;"
        })[character]);
        return escaped.replace(/김민식|Minsik Kim/g, (name) => `<strong class="${className}">${name}</strong>`);
    }

    function textAll(selector, value) {
        document.querySelectorAll(selector).forEach((element) => {
            element.textContent = value;
        });
    }

    function initIcons() {
        if (window.lucide) window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
    }

    function renderNavigation() {
        const markup = navItems.map((item) => (
            `<a class="nav-link" href="#${item.id}" data-nav-target="${item.id}">${copy[state.language].nav[item.index]}</a>`
        )).join("");
        document.querySelector("[data-nav-links]").innerHTML = markup;
        document.querySelector("[data-mobile-nav-links]").innerHTML = markup;
    }

    function renderStaticCopy() {
        document.documentElement.lang = state.language;
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            if (copy[state.language][key] != null) element.innerHTML = copy[state.language][key];
        });

        textAll("[data-profile-name-ko]", content.profile.name.ko);
        textAll("[data-profile-name-en]", content.profile.nameEnglish);
        textAll("[data-profile-kicker]", localized(content.profile.kicker));
        textAll("[data-profile-headline]", localized(content.profile.headline));
        textAll("[data-profile-intro]", localized(content.profile.intro));
        textAll("[data-profile-role]", localized(content.profile.role));
        textAll("[data-profile-affiliation]", localized(content.profile.affiliation));
        textAll("[data-profile-bio]", localized(content.profile.bio));
        textAll("[data-profile-statement]", localized(content.profile.statement));
        textAll("[data-contact-heading]", localized(content.contact.heading));
        textAll("[data-contact-body]", localized(content.contact.body));

        document.querySelectorAll("[data-github-link]").forEach((link) => { link.href = content.site.github; });
        textAll("[data-language-current]", state.language.toUpperCase());
        textAll("[data-language-next]", state.language === "ko" ? "EN" : "KO");
        const switcher = document.querySelector("[data-language-switch]");
        switcher.setAttribute("aria-label", state.language === "ko" ? "Switch to English" : "한국어로 전환");
        document.getElementById("hero-title").setAttribute("aria-label", `${content.profile.name.ko} ${content.profile.nameEnglish}`);
        document.querySelector(".hero-headline").setAttribute("aria-label", localized(content.profile.headline).replace(/\n/g, " "));
    }

    function renderHeroSignals() {
        const items = [
            { value: content.work.filter((item) => item.status === "ongoing").length, label: copy[state.language].activeProjects },
            { value: content.publications.length, label: copy[state.language].researchRecords },
            { value: content.focus.length, label: copy[state.language].researchTracks }
        ];
        document.querySelector("[data-hero-signals]").innerHTML = items.map((item) => `
            <div>
                <dt>${item.label}</dt>
                <dd>${String(item.value).padStart(2, "0")}</dd>
            </div>
        `).join("");
    }

    function renderEducation() {
        document.querySelector("[data-education-list]").innerHTML = content.education.map((item) => `
            <article class="education-item">
                <time>${item.period}</time>
                <div>
                    <h3>${localized(item.degree)}</h3>
                    <p>${localized(item.school)}</p>
                    ${item.detail ? `<p class="education-detail">${localized(item.detail)}</p>` : ""}
                </div>
            </article>
        `).join("");
    }

    function renderCredentials() {
        document.querySelector("[data-credential-list]").innerHTML = `
            <header class="credential-heading">
                <span>${state.language === "ko" ? "자격증 / 수료증" : "Credentials"}</span>
                <span>${String(content.credentials.length).padStart(2, "0")}</span>
            </header>
            ${content.credentials.map((item) => `
                <article class="credential-item">
                    <time>${item.issued}</time>
                    <div>
                        <h3>${localized(item.title)}</h3>
                        <p>${localized(item.issuer)}</p>
                    </div>
                    <i data-lucide="badge-check" aria-hidden="true"></i>
                </article>
            `).join("")}
        `;
    }

    function renderSkills() {
        document.querySelector("[data-skill-list]").innerHTML = content.skills.map((group) => `
            <section class="skill-group">
                <h3>${localized(group.title)}</h3>
                <ul>${localized(group.items).map((item) => `<li>${item}</li>`).join("")}</ul>
            </section>
        `).join("");
    }

    function renderFocus() {
        const icons = ["scan-search", "workflow", "wind"];
        document.querySelector("[data-focus-list]").innerHTML = content.focus.map((item, index) => `
            <article class="focus-item" data-reveal>
                <div class="focus-card-topline">
                    <span class="focus-number">${String(index + 1).padStart(2, "0")}</span>
                    <i data-lucide="${icons[index]}" aria-hidden="true"></i>
                </div>
                <h3>${localized(item.title)}</h3>
                <div class="focus-trace">${item.trace.map((trace) => `<span>${trace}</span>`).join("")}</div>
                <p>${localized(item.description)}</p>
            </article>
        `).join("");
    }

    function updateResearchLoop(index) {
        const item = content.researchLoop[index];
        state.researchLoopIndex = index;
        document.querySelectorAll("[data-research-loop-step]").forEach((button, buttonIndex) => {
            button.setAttribute("aria-pressed", String(buttonIndex === index));
        });
        textAll("[data-research-loop-index]", `${String(index + 1).padStart(2, "0")} / ${String(content.researchLoop.length).padStart(2, "0")}`);
        textAll("[data-research-loop-label]", item.label);
        textAll("[data-research-loop-title]", localized(item.title));
        textAll("[data-research-loop-description]", localized(item.description));
    }

    function renderResearchLoop() {
        document.querySelector("[data-research-loop]").innerHTML = content.researchLoop.map((item, index) => `
            <button class="research-process-step" type="button" data-research-loop-step="${index}" aria-pressed="false">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <i data-lucide="${item.icon}" aria-hidden="true"></i>
                <small>${item.label}</small>
                <strong>${localized(item.title)}</strong>
            </button>
        `).join("");
        document.querySelectorAll("[data-research-loop-step]").forEach((button) => {
            const select = () => updateResearchLoop(Number(button.dataset.researchLoopStep));
            button.addEventListener("click", select);
            button.addEventListener("focus", select);
        });
        updateResearchLoop(state.researchLoopIndex);
    }

    function renderProjectSignals() {
        const ongoing = content.work.filter((item) => item.status === "ongoing").length;
        const past = content.work.length - ongoing;
        const items = [
            { value: ongoing, label: copy[state.language].projectActive },
            { value: past, label: copy[state.language].projectCompleted },
            { value: content.work.length, label: copy[state.language].projectTotal }
        ];
        document.querySelector("[data-project-signals]").innerHTML = items.map((item) => `
            <div><dt>${item.label}</dt><dd>${String(item.value).padStart(2, "0")}</dd></div>
        `).join("");
    }

    function renderWork() {
        const ongoing = content.work.filter((item) => item.status === "ongoing");
        const past = content.work.filter((item) => item.status === "past");
        const projectIcons = ["route", "ship", "brain-circuit", "scan-line"];

        const ongoingMarkup = ongoing.map((item, index) => {
            const [periodStart, periodEnd] = item.year.split("—");
            return `
                <article class="work-item ongoing-card" data-reveal>
                    <header class="ongoing-card-topline">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <span class="project-state">${copy[state.language].projectActive}</span>
                    </header>
                    <div class="project-icon"><i data-lucide="${projectIcons[index]}" aria-hidden="true"></i></div>
                    <span class="work-type">${localized(item.type)}</span>
                    <h3>${localized(item.title)}</h3>
                    <p>${localized(item.summary)}</p>
                    <div class="work-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                    <span class="work-year" aria-label="${item.year}">
                        <span>${periodStart}</span><span aria-hidden="true">—</span><span>${periodEnd}</span>
                    </span>
                </article>
            `;
        }).join("");

        const pastMarkup = past.map((item, index) => {
            const [periodStart, periodEnd] = item.year.split("—");
            const collapsed = !state.pastProjectsExpanded && index >= 6 ? " is-collapsed" : "";
            return `
                <article class="work-item past-work${collapsed}" data-past-project="${index}">
                    <span class="work-year" aria-label="${item.year}">
                        <span>${periodStart}</span><span aria-hidden="true">—</span><span>${periodEnd}</span>
                    </span>
                    <div class="past-work-title">
                        <span class="work-type">${localized(item.type)}</span>
                        <h3>${localized(item.title)}</h3>
                    </div>
                    <div class="work-copy">
                        <p>${localized(item.summary)}</p>
                        <div class="work-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                    </div>
                </article>
            `;
        }).join("");

        document.querySelector("[data-work-list]").innerHTML = `
            <section class="work-group ongoing-group" data-project-status="ongoing">
                <header class="work-group-heading">
                    <span>01</span><h3>${copy[state.language].workOngoing}</h3><span>${String(ongoing.length).padStart(2, "0")}</span>
                </header>
                <div class="ongoing-grid">${ongoingMarkup}</div>
            </section>
            <section class="work-group past-group" data-project-status="past">
                <header class="work-group-heading">
                    <span>02</span><h3>${copy[state.language].workPast}</h3><span>${String(past.length).padStart(2, "0")}</span>
                </header>
                <div class="past-timeline" id="past-project-list">${pastMarkup}</div>
                <button class="project-toggle" type="button" data-project-toggle aria-expanded="${state.pastProjectsExpanded}" aria-controls="past-project-list">
                    <span>${state.pastProjectsExpanded ? copy[state.language].hidePastProjects : `${copy[state.language].showPastProjects} · ${String(past.length - 6).padStart(2, "0")}`}</span>
                    <i data-lucide="${state.pastProjectsExpanded ? "minus" : "plus"}" aria-hidden="true"></i>
                </button>
            </section>
        `;
    }

    function setupProjectToggle() {
        const toggle = document.querySelector("[data-project-toggle]");
        if (!toggle) return;
        toggle.addEventListener("click", () => {
            state.pastProjectsExpanded = !state.pastProjectsExpanded;
            renderWork();
            setupProjectToggle();
            initIcons();
        });
    }

    function publicationStatusMarkup(item, statusIcons, className = "publication-state") {
        if (item.award) {
            return `<span class="${className}" data-tone="award"><i data-lucide="award"></i>${localized(item.award)}</span>`;
        }
        if (item.status) {
            return `<span class="${className}" data-tone="${item.status.kind}"><i data-lucide="${statusIcons[item.status.kind] || "file-clock"}"></i>${localized(item.status.label)}</span>`;
        }
        return "";
    }

    function renderPublications() {
        const section = document.querySelector("[data-publication-section]");
        const statusIcons = {
            scheduled: "calendar-clock",
            preparation: "pencil-line",
            submitted: "send",
            review: "scan-search"
        };
        section.hidden = content.publicationCategories.length === 0;

        const featured = [
            content.publications.find((item) => item.award),
            content.publications.find((item) => item.status && item.status.kind === "submitted"),
            content.publications.find((item) => item.status && item.status.kind === "review")
        ].filter(Boolean);

        document.querySelector("[data-featured-publications]").innerHTML = featured.map((item, index) => {
            const publicationIndex = content.publications.indexOf(item);
            const category = content.publicationCategories.find((entry) => entry.id === item.category);
            const body = `
                <span class="featured-publication-index">${String(index + 1).padStart(2, "0")}</span>
                <span class="featured-publication-category">${localized(category.label)}</span>
                <p class="featured-publication-title">${localized(item.title)}</p>
                <p class="featured-publication-authors">${formatAuthors(item.authors, "featured-self")}</p>
                <p class="featured-publication-venue">${localized(item.venue)}</p>
                ${publicationStatusMarkup(item, statusIcons, "featured-publication-state")}
                <span class="featured-publication-record">RECORD / ${String(publicationIndex + 1).padStart(2, "0")}</span>
            `;
            return item.url
                ? `<a class="featured-publication" href="${item.url}" target="_blank" rel="noopener noreferrer">${body}<i data-lucide="arrow-up-right"></i></a>`
                : `<article class="featured-publication">${body}<i data-lucide="scan-line"></i></article>`;
        }).join("");

        const filterItems = [
            { id: "all", label: copy[state.language].publicationAll },
            ...content.publicationCategories.map((category) => ({ id: category.id, label: localized(category.label) }))
        ];
        document.querySelector("[data-publication-filters]").innerHTML = filterItems.map((item) => `
            <button type="button" data-publication-filter="${item.id}" aria-pressed="${String(state.publicationFilter === item.id)}">${item.label}</button>
        `).join("");

        document.querySelector("[data-publication-list]").innerHTML = content.publicationCategories.map((category, categoryIndex) => {
            const items = content.publications.filter((item) => item.category === category.id);
            const itemMarkup = items.length ? items.map((item) => {
                const publicationIndex = content.publications.indexOf(item);
                return `
                    <article class="publication-item" data-reveal>
                        <span class="publication-index">${String(publicationIndex + 1).padStart(2, "0")}</span>
                        <div class="publication-copy">
                            <h3>${localized(item.title)}</h3>
                            <p class="publication-authors">${formatAuthors(item.authors)}</p>
                            ${(item.award || item.status) ? `
                                <div class="publication-notes">
                                    ${item.award ? `<span class="publication-note publication-award"><i data-lucide="award"></i>${localized(item.award)}</span>` : ""}
                                    ${item.status ? `<span class="publication-note publication-status"><i data-lucide="${statusIcons[item.status.kind] || "file-clock"}"></i>${localized(item.status.label)}</span>` : ""}
                                </div>
                            ` : ""}
                        </div>
                        <p class="publication-venue">${localized(item.venue)}</p>
                        ${item.url ? `<a class="item-link" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${localized(item.title)}"><i data-lucide="arrow-up-right"></i></a>` : ""}
                    </article>
                `;
            }).join("") : `<p class="publication-empty">${copy[state.language].publicationEmpty}</p>`;

            return `
                <section class="publication-group" data-publication-category="${category.id}"${state.publicationFilter !== "all" && state.publicationFilter !== category.id ? " hidden" : ""}>
                    <header class="publication-group-heading">
                        <span>${String(categoryIndex + 1).padStart(2, "0")}</span>
                        <h3>${localized(category.label)}</h3>
                        <span>${String(items.length).padStart(2, "0")}</span>
                    </header>
                    <div class="publication-group-list">${itemMarkup}</div>
                </section>
            `;
        }).join("");
    }

    function setupPublicationFilters() {
        document.querySelectorAll("[data-publication-filter]").forEach((button) => {
            button.addEventListener("click", () => {
                state.publicationFilter = button.dataset.publicationFilter;
                document.querySelectorAll("[data-publication-filter]").forEach((filterButton) => {
                    filterButton.setAttribute("aria-pressed", String(filterButton === button));
                });
                document.querySelectorAll("[data-publication-category]").forEach((group) => {
                    group.hidden = state.publicationFilter !== "all" && group.dataset.publicationCategory !== state.publicationFilter;
                });
            });
        });
    }

    function renderContact() {
        document.querySelector("[data-contact-links]").innerHTML = content.contact.links.map((item) => `
            <a class="contact-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
                <span>${item.label}</span><i data-lucide="${item.icon}"></i>
            </a>
        `).join("");
    }

    function updateMatrix(index, replay) {
        const matrix = content.researchMatrix;
        const cell = matrix.cells[index];
        state.matrixIndex = index;
        document.querySelectorAll("[data-matrix-node]").forEach((button, buttonIndex) => {
            button.setAttribute("aria-pressed", buttonIndex === index ? "true" : "false");
        });
        textAll("[data-matrix-coordinate]", `${String(index + 1).padStart(2, "0")} / 09`);
        textAll("[data-matrix-title]", localized(cell.title));
        textAll("[data-matrix-description]", localized(cell.description));

        if (replay && state.matrixAnimation && !prefersReducedMotion.matches) {
            state.matrixAnimation.goToAndPlay(0, true);
        }
    }

    function renderMatrix() {
        const matrix = content.researchMatrix;
        document.querySelector("[data-matrix-columns]").innerHTML = matrix.methods
            .map((method) => `<span>${localized(method)}</span>`).join("");
        document.querySelector("[data-matrix-rows]").innerHTML = matrix.applications
            .map((application) => `<span>${localized(application)}</span>`).join("");

        document.querySelector("[data-matrix-nodes]").innerHTML = matrix.cells.map((cell, index) => {
            const row = Math.floor(index / 3);
            const column = index % 3;
            const label = `${localized(matrix.applications[row])} × ${localized(matrix.methods[column])}: ${localized(cell.title)}`;
            const pathClass = matrix.featuredPath.includes(index) ? " is-path" : "";
            return `<button class="matrix-node${pathClass}" type="button" style="--row:${row};--column:${column}" data-matrix-node="${index}" aria-pressed="false" aria-label="${label}"></button>`;
        }).join("");

        document.querySelectorAll("[data-matrix-node]").forEach((button) => {
            button.addEventListener("click", () => updateMatrix(Number(button.dataset.matrixNode), true));
            button.addEventListener("focus", () => updateMatrix(Number(button.dataset.matrixNode), false));
        });
        updateMatrix(state.matrixIndex, false);
    }

    function setupLottie() {
        const container = document.getElementById("matrix-motion");
        if (!container || !window.lottie || state.matrixAnimation) return;

        state.matrixAnimation = window.lottie.loadAnimation({
            container,
            renderer: "svg",
            loop: true,
            autoplay: !prefersReducedMotion.matches,
            path: "public/projects/portfolio/scene-1/lottie.json?v=20260722-matrix2"
        });
        state.matrixAnimation.addEventListener("DOMLoaded", () => {
            if (prefersReducedMotion.matches) state.matrixAnimation.goToAndStop(144, true);
        });
        prefersReducedMotion.addEventListener("change", (event) => {
            if (!state.matrixAnimation) return;
            if (event.matches) state.matrixAnimation.goToAndStop(144, true);
            else state.matrixAnimation.play();
        });
    }

    function renderAll() {
        renderNavigation();
        renderStaticCopy();
        renderHeroSignals();
        renderResearchLoop();
        renderEducation();
        renderCredentials();
        renderSkills();
        renderFocus();
        renderProjectSignals();
        renderWork();
        renderPublications();
        renderContact();
        renderMatrix();
        setupProjectToggle();
        setupPublicationFilters();
        initIcons();
        setupRevealObserver();
    }

    function closeMenu(restoreFocus = false) {
        const menu = document.querySelector("[data-mobile-menu]");
        const button = document.querySelector("[data-menu-button]");
        menu.hidden = true;
        button.setAttribute("aria-expanded", "false");
        const label = button.querySelector(".sr-only");
        if (label) label.textContent = copy[state.language].openMenu;
        document.body.classList.remove("menu-open");
        if (restoreFocus) button.focus();
    }

    function setupMenu() {
        const menu = document.querySelector("[data-mobile-menu]");
        const button = document.querySelector("[data-menu-button]");
        button.addEventListener("click", () => {
            const isOpen = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(!isOpen));
            menu.hidden = isOpen;
            const label = button.querySelector(".sr-only");
            if (label) label.textContent = !isOpen ? copy[state.language].closeMenu : copy[state.language].openMenu;
            document.body.classList.toggle("menu-open", !isOpen);
        });
        menu.addEventListener("click", (event) => { if (event.target.closest("a")) closeMenu(); });
        window.addEventListener("keydown", (event) => { if (event.key === "Escape" && !menu.hidden) closeMenu(true); });
        window.addEventListener("resize", () => { if (window.innerWidth > 960 && !menu.hidden) closeMenu(); });
    }

    function setupLanguageSwitch() {
        document.querySelector("[data-language-switch]").addEventListener("click", () => {
            state.language = state.language === "ko" ? "en" : "ko";
            localStorage.setItem("portfolio-language", state.language);
            closeMenu();
            renderAll();
        });
    }

    let revealObserver;
    function setupRevealObserver() {
        if (revealObserver) revealObserver.disconnect();
        const elements = document.querySelectorAll("[data-reveal]");
        if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return;
        }
        revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12 });
        elements.forEach((element) => revealObserver.observe(element));
    }

    function setupScrollState() {
        const progress = document.querySelector("[data-scroll-progress]");
        const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
        let ticking = false;

        function update() {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const ratio = max > 0 ? window.scrollY / max : 0;
            progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;

            const offset = window.scrollY + window.innerHeight * 0.34;
            let active = sections[0] ? sections[0].id : "";
            sections.forEach((section) => { if (section.offsetTop <= offset) active = section.id; });
            document.querySelectorAll("[data-nav-target]").forEach((link) => {
                link.classList.toggle("is-active", link.dataset.navTarget === active);
            });
            ticking = false;
        }

        window.addEventListener("scroll", () => {
            if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
        }, { passive: true });
        window.addEventListener("resize", update);
        update();
    }

    renderAll();
    setupLottie();
    setupMenu();
    setupLanguageSwitch();
    setupScrollState();
    textAll("[data-current-year]", String(new Date().getFullYear()));
})();
