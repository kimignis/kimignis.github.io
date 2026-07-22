(function () {
    "use strict";

    const content = window.PORTFOLIO_CONTENT;
    if (!content) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const state = {
        language: localStorage.getItem("portfolio-language") || content.site.defaultLanguage || "ko",
        matrixIndex: 4,
        matrixAnimation: null
    };

    const copy = {
        ko: {
            skipLink: "본문으로 바로가기",
            openMenu: "메뉴 열기",
            heroRole: "Industrial AI Researcher",
            current: "CURRENT",
            affiliation: "AFFILIATION",
            viewProfile: "프로필 살펴보기",
            matrixEyebrow: "RESEARCH MAP · INTERACTIVE",
            matrixTitle: "연구 응용 분야 × 연구 방법",
            matrixInstruction: "교차점을 선택해 연구 주제를 살펴보세요.",
            methods: "RESEARCH METHODS",
            applications: "RESEARCH APPLICATIONS",
            profileLabel: "PROFILE",
            profileTitle: "산업의 문제를<br>설명 가능한 지능으로.",
            educationTitle: "학력과 경험",
            profileResearchTitle: "관심 연구 영역",
            focusLede: "모델의 성능과 사람이 이해할 수 있는 근거를 함께 설계합니다.",
            workLabel: "RESEARCH PROJECT",
            workTitle: "참여한<br>연구 과제",
            workLede: "산업체·정부 R&D 과제를 중복 단계 없이 통합해 참여기간과 역할 중심으로 정리했습니다.",
            publicationLabel: "PUBLICATION",
            publicationTitle: "논문과 발표",
            publicationLede: "국내외 학술대회와 저널을 구분해 연구 기록을 정리합니다.",
            publicationEmpty: "현재 등록된 항목이 없습니다.",
            contactLabel: "CONTACT / COLLABORATION",
            backToTop: "맨 위로",
            nav: ["Profile", "Publications", "Research Projects", "Contact"]
        },
        en: {
            skipLink: "Skip to main content",
            openMenu: "Open menu",
            heroRole: "Industrial AI Researcher",
            current: "CURRENT",
            affiliation: "AFFILIATION",
            viewProfile: "Explore profile",
            matrixEyebrow: "RESEARCH MAP · INTERACTIVE",
            matrixTitle: "Applications × Methods",
            matrixInstruction: "Select an intersection to explore the research.",
            methods: "RESEARCH METHODS",
            applications: "RESEARCH APPLICATIONS",
            profileLabel: "PROFILE",
            profileTitle: "Turning industrial problems<br>into explainable intelligence.",
            educationTitle: "Education & Experience",
            profileResearchTitle: "Research Interests",
            focusLede: "I design model performance together with evidence people can understand.",
            workLabel: "RESEARCH PROJECT",
            workTitle: "Research<br>projects",
            workLede: "Industry and government-funded R&D projects consolidated by participation period and role.",
            publicationLabel: "PUBLICATION",
            publicationTitle: "Papers and talks",
            publicationLede: "Research records organized by domestic and international conferences and journals.",
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

    function formatAuthors(authors) {
        const escaped = authors.replace(/[&<>"']/g, (character) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;",
            "'": "&#039;"
        })[character]);
        return escaped.replace(/김민식|Minsik Kim/g, (name) => `<strong class="publication-self">${name}</strong>`);
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
        document.querySelector("[data-focus-list]").innerHTML = content.focus.map((item, index) => `
            <article class="focus-item" data-reveal>
                <span class="focus-number">${String(index + 1).padStart(2, "0")}</span>
                <div>
                    <h3>${localized(item.title)}</h3>
                    <div class="focus-trace">${item.trace.map((trace) => `<span>${trace}</span>`).join("")}</div>
                </div>
                <div><p>${localized(item.description)}</p></div>
            </article>
        `).join("");
    }

    function renderWork() {
        document.querySelector("[data-work-list]").innerHTML = content.work.map((item) => {
            const [periodStart, periodEnd] = item.year.split("—");
            return `
            <article class="work-item" data-reveal>
                <span class="work-year" aria-label="${item.year}">
                    <span>${periodStart}</span>
                    <span aria-hidden="true">—</span>
                    <span>${periodEnd}</span>
                </span>
                <div>
                    <span class="work-type">${localized(item.type)}</span>
                    <h3>${localized(item.title)}</h3>
                </div>
                <div class="work-copy">
                    <p>${localized(item.summary)}</p>
                    <div class="work-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                </div>
                ${item.url ? `<a class="item-link" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${localized(item.title)}"><i data-lucide="arrow-up-right"></i></a>` : ""}
            </article>
        `;
        }).join("");
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
        document.querySelector("[data-publication-list]").innerHTML = content.publicationCategories.map((category, categoryIndex) => {
            const items = content.publications.filter((item) => item.category === category.id);
            const itemMarkup = items.length ? items.map((item) => {
                const publicationIndex = content.publications.indexOf(item);
                return `
                    <article class="publication-item" data-reveal>
                        <span class="publication-index">${String(publicationIndex + 1).padStart(2, "0")}</span>
                        <div>
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
                <section class="publication-group" data-publication-category="${category.id}">
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
        if (!container || !window.lottie) return;

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
        renderEducation();
        renderCredentials();
        renderSkills();
        renderFocus();
        renderWork();
        renderPublications();
        renderContact();
        renderMatrix();
        initIcons();
        setupRevealObserver();
    }

    function closeMenu() {
        const menu = document.querySelector("[data-mobile-menu]");
        const button = document.querySelector("[data-menu-button]");
        menu.hidden = true;
        button.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    }

    function setupMenu() {
        const menu = document.querySelector("[data-mobile-menu]");
        const button = document.querySelector("[data-menu-button]");
        button.addEventListener("click", () => {
            const isOpen = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(!isOpen));
            menu.hidden = isOpen;
            document.body.classList.toggle("menu-open", !isOpen);
        });
        menu.addEventListener("click", (event) => { if (event.target.closest("a")) closeMenu(); });
        window.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
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
