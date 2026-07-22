(() => {
    "use strict";

    const content = window.PORTFOLIO_CONTENT;
    if (!content) {
        console.error("PORTFOLIO_CONTENT를 찾을 수 없습니다.");
        return;
    }

    const dictionary = {
        ko: {
            skipLink: "본문으로 바로가기",
            openMenu: "메뉴 열기",
            closeMenu: "메뉴 닫기",
            viewProfile: "소개 보기",
            current: "CURRENT",
            based: "AFFILIATION",
            profileLabel: "ABOUT",
            profileTitle: "연구하는 사람, 김민식",
            principleLabel: "RESEARCH PRINCIPLE",
            focusLabel: "RESEARCH FOCUS",
            focusTitle: "세 가지 연구 방향",
            focusLede: "모델의 성능과 사람이 이해할 수 있는 근거를 함께 설계합니다.",
            workLabel: "SELECTED WORK",
            workTitle: "주요 연구와 프로젝트",
            workLede: "제조 현장의 의사결정과 에너지 예측을 실제 연구 결과로 연결합니다.",
            publicationLabel: "PUBLICATIONS",
            publicationTitle: "논문과 발표",
            publicationLede: "출판된 연구와 현재 이어가고 있는 작업입니다.",
            contactLabel: "CONTACT",
            backToTop: "맨 위로",
            nav: { profile: "소개", focus: "연구", work: "프로젝트", publications: "논문", contact: "연락" }
        },
        en: {
            skipLink: "Skip to content",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            viewProfile: "About me",
            current: "CURRENT",
            based: "AFFILIATION",
            profileLabel: "ABOUT",
            profileTitle: "The person behind the research",
            principleLabel: "RESEARCH PRINCIPLE",
            focusLabel: "RESEARCH FOCUS",
            focusTitle: "Three directions in my work",
            focusLede: "Designing for both model performance and evidence people can understand.",
            workLabel: "SELECTED WORK",
            workTitle: "Selected research and projects",
            workLede: "Connecting decisions in manufacturing and energy forecasting to concrete research outcomes.",
            publicationLabel: "PUBLICATIONS",
            publicationTitle: "Papers and talks",
            publicationLede: "Published research and the questions I am continuing to pursue.",
            contactLabel: "CONTACT",
            backToTop: "Back to top",
            nav: { profile: "About", focus: "Research", work: "Projects", publications: "Publications", contact: "Contact" }
        }
    };

    const focusIcons = ["scan-search", "network", "wind"];
    const selectAll = (selector, root = document) => Array.from(root.querySelectorAll(selector));
    const localized = (value, language) => {
        if (value == null) return "";
        if (typeof value === "string") return value;
        return value[language] || value.ko || value.en || "";
    };
    const escapeHtml = (value) => String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    let language = localStorage.getItem("portfolio-language") || content.site.defaultLanguage || "ko";
    if (!dictionary[language]) language = "ko";

    const sectionIds = () => [
        "profile", "focus", "work", ...(content.publications.length ? ["publications"] : []), "contact"
    ];

    function renderMultiline(selector, text) {
        const target = document.querySelector(selector);
        target.replaceChildren(...text.split("\n").map((line) => {
            const span = document.createElement("span");
            span.textContent = line;
            span.setAttribute("aria-hidden", "true");
            return span;
        }));
        target.setAttribute("aria-label", text.replaceAll("\n", " "));
    }

    function renderNavigation() {
        const links = sectionIds().map((id) => (
            `<a class="nav-link" href="#${id}" data-nav-id="${id}">${escapeHtml(dictionary[language].nav[id])}</a>`
        )).join("");
        document.querySelector("[data-nav-links]").innerHTML = links;
        document.querySelector("[data-mobile-nav-links]").innerHTML = links;
    }

    function renderEducation() {
        document.querySelector("[data-education-list]").innerHTML = content.education.map((item) => `
            <article class="education-item">
                <time>${escapeHtml(item.period)}</time>
                <div>
                    <h3>${escapeHtml(localized(item.degree, language))}</h3>
                    <p>${escapeHtml(localized(item.school, language))}</p>
                </div>
            </article>
        `).join("");
    }

    function renderFocus() {
        document.querySelector("[data-focus-list]").innerHTML = content.focus.map((item, index) => `
            <article class="focus-item">
                <div class="focus-topline">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <i data-lucide="${focusIcons[index] || "sparkles"}" aria-hidden="true"></i>
                </div>
                <h3>${escapeHtml(localized(item.title, language))}</h3>
                <p>${escapeHtml(localized(item.description, language))}</p>
            </article>
        `).join("");
    }

    function renderWork() {
        document.querySelector("[data-work-list]").innerHTML = content.work.map((item, index) => {
            const tagName = item.url ? "a" : "article";
            const linkAttributes = item.url ? ` href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer"` : "";
            return `
                <${tagName} class="work-item"${linkAttributes}>
                    <div class="work-order">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <time>${escapeHtml(item.year)}</time>
                    </div>
                    <div class="work-copy">
                        <p class="work-type">${escapeHtml(localized(item.type, language))}</p>
                        <h3>${escapeHtml(localized(item.title, language))}</h3>
                        <p class="work-summary">${escapeHtml(localized(item.summary, language))}</p>
                    </div>
                    <div class="work-footer">
                        <div class="work-tags" aria-label="Tags">
                            ${item.tags.map((tag) => `<span class="work-tag">${escapeHtml(tag)}</span>`).join("")}
                        </div>
                        ${item.url ? '<span class="work-link-mark"><i data-lucide="arrow-up-right" aria-hidden="true"></i></span>' : ""}
                    </div>
                </${tagName}>
            `;
        }).join("");
    }

    function renderPublications() {
        const section = document.querySelector("[data-publication-section]");
        if (!content.publications.length) {
            section.hidden = true;
            return;
        }

        section.hidden = false;
        document.querySelector("[data-publication-list]").innerHTML = content.publications.map((item, index) => `
            <article class="publication-item">
                <span class="publication-number">${String(index + 1).padStart(2, "0")}</span>
                <div class="publication-copy">
                    <p class="publication-venue">${escapeHtml(localized(item.venue, language))}</p>
                    <h3>${escapeHtml(localized(item.title, language))}</h3>
                    <p>${escapeHtml(item.authors || "")}</p>
                </div>
                ${item.url ? `<a class="publication-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open publication"><i data-lucide="arrow-up-right" aria-hidden="true"></i></a>` : ""}
            </article>
        `).join("");
    }

    function renderSkills() {
        document.querySelector("[data-skill-list]").innerHTML = content.skills.map((group) => {
            const items = group.items[language] || group.items.ko || group.items.en || [];
            return `
                <section class="skill-group">
                    <h3>${escapeHtml(localized(group.title, language))}</h3>
                    <p>${items.map((item) => escapeHtml(item)).join(" · ")}</p>
                </section>
            `;
        }).join("");
    }

    function renderContact() {
        renderMultiline("[data-contact-heading]", localized(content.contact.heading, language));
        document.querySelector("[data-contact-body]").textContent = localized(content.contact.body, language);
        document.querySelector("[data-contact-links]").innerHTML = content.contact.links.map((link) => `
            <a class="contact-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">
                <span>${escapeHtml(link.label)}</span>
                <i data-lucide="${escapeHtml(link.icon || "arrow-up-right")}" aria-hidden="true"></i>
            </a>
        `).join("");
    }

    function updateMetadata() {
        const isKo = language === "ko";
        const title = isKo ? "김민식 · Minsik Kim" : "Minsik Kim · Personal Website";
        const description = localized(content.profile.intro, language);
        document.title = title;
        document.querySelector('meta[name="description"]').setAttribute("content", description);
        document.querySelector('meta[property="og:title"]').setAttribute("content", title);
        document.querySelector('meta[property="og:description"]').setAttribute("content", localized(content.profile.headline, language).replaceAll("\n", " "));
        document.querySelector('meta[name="twitter:title"]').setAttribute("content", title);
        document.querySelector('meta[name="twitter:description"]').setAttribute("content", localized(content.profile.headline, language).replaceAll("\n", " "));
    }

    function updateStructuredData() {
        document.getElementById("person-jsonld")?.remove();
        const script = document.createElement("script");
        script.id = "person-jsonld";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: localized(content.profile.name, language),
            alternateName: content.profile.nameEnglish,
            url: content.site.url,
            sameAs: [content.site.github, content.site.lab],
            jobTitle: localized(content.profile.role, language),
            affiliation: {
                "@type": "Organization",
                name: "Industrial AI Lab., Kyung Hee University",
                url: "http://iai.khu.ac.kr/"
            },
            alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Kyung Hee University"
            },
            knowsAbout: [
                "Explainable AI",
                "Large Language Models",
                "Manufacturing Analytics",
                "Production Intelligence",
                "Wind Power Forecasting"
            ]
        });
        document.head.appendChild(script);
    }

    function refreshIcons() {
        if (window.lucide) window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
    }

    function render() {
        document.documentElement.lang = language;
        selectAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            if (dictionary[language][key]) element.textContent = dictionary[language][key];
        });
        selectAll("[data-profile-name-ko]").forEach((element) => { element.textContent = content.profile.name.ko; });
        selectAll("[data-profile-name-en]").forEach((element) => { element.textContent = content.profile.nameEnglish; });
        document.getElementById("hero-title").setAttribute("aria-label", `${content.profile.name.ko} ${content.profile.nameEnglish}`);
        document.querySelector("[data-profile-kicker]").textContent = localized(content.profile.kicker, language);
        renderMultiline("[data-profile-headline]", localized(content.profile.headline, language));
        document.querySelector("[data-profile-intro]").textContent = localized(content.profile.intro, language);
        document.querySelector("[data-profile-role]").textContent = localized(content.profile.role, language);
        document.querySelector("[data-profile-affiliation]").textContent = localized(content.profile.affiliation, language);
        document.querySelector("[data-profile-bio]").textContent = localized(content.profile.bio, language);
        selectAll("[data-profile-statement]").forEach((element) => { element.textContent = localized(content.profile.statement, language); });
        document.querySelector("[data-github-link]").href = content.site.github;
        document.querySelector("[data-language-current]").textContent = language.toUpperCase();
        document.querySelector("[data-language-next]").textContent = language === "ko" ? "EN" : "KO";
        document.querySelector("[data-language-switch]").setAttribute("aria-label", language === "ko" ? "Switch to English" : "한국어로 전환");
        renderNavigation();
        renderEducation();
        renderFocus();
        renderWork();
        renderPublications();
        renderSkills();
        renderContact();
        updateMetadata();
        updateStructuredData();
        refreshIcons();
    }

    function setupLanguageSwitch() {
        document.querySelector("[data-language-switch]").addEventListener("click", () => {
            language = language === "ko" ? "en" : "ko";
            localStorage.setItem("portfolio-language", language);
            render();
            setupSectionObserver();
        });
    }

    function setupMobileMenu() {
        const button = document.querySelector("[data-menu-button]");
        const menu = document.querySelector("[data-mobile-menu]");
        const close = () => {
            menu.hidden = true;
            button.setAttribute("aria-expanded", "false");
            button.querySelector(".sr-only").textContent = dictionary[language].openMenu;
        };
        button.addEventListener("click", () => {
            const willOpen = menu.hidden;
            menu.hidden = !willOpen;
            button.setAttribute("aria-expanded", String(willOpen));
            button.querySelector(".sr-only").textContent = dictionary[language][willOpen ? "closeMenu" : "openMenu"];
        });
        menu.addEventListener("click", (event) => { if (event.target.closest("a")) close(); });
        window.addEventListener("resize", () => { if (window.innerWidth > 980) close(); });
    }

    let sectionObserver;
    function setupSectionObserver() {
        sectionObserver?.disconnect();
        const links = selectAll("[data-nav-id]");
        sectionObserver = new IntersectionObserver((entries) => {
            const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (!visible) return;
            links.forEach((link) => link.setAttribute("aria-current", String(link.dataset.navId === visible.target.id)));
        }, { rootMargin: "-24% 0px -62%", threshold: [0, 0.2, 0.6] });
        sectionIds().forEach((id) => {
            const section = document.getElementById(id);
            if (section) sectionObserver.observe(section);
        });
    }

    function setupHeader() {
        const header = document.querySelector("[data-header]");
        const update = () => header.classList.toggle("is-scrolled", window.scrollY > 16);
        update();
        window.addEventListener("scroll", update, { passive: true });
    }

    function setupReveal() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const targets = selectAll(".section-heading, .about-grid, .skill-columns, .focus-item, .work-item, .publication-item");
        targets.forEach((target) => target.classList.add("reveal-target"));
        document.body.classList.add("reveal-ready");
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
        targets.forEach((target) => revealObserver.observe(target));
    }

    function setupLottie() {
        if (!window.lottie) return;
        const container = document.getElementById("hero-motion");
        const animation = window.lottie.loadAnimation({
            container,
            renderer: "svg",
            loop: true,
            autoplay: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            path: "public/projects/portfolio/scene-1/lottie.json",
            rendererSettings: { progressiveLoad: true, preserveAspectRatio: "xMidYMid meet" }
        });
        animation.addEventListener("DOMLoaded", () => container.classList.add("is-loaded"));
    }

    render();
    document.querySelector("[data-current-year]").textContent = String(new Date().getFullYear());
    setupLanguageSwitch();
    setupMobileMenu();
    setupSectionObserver();
    setupHeader();
    setupReveal();
    setupLottie();
})();
