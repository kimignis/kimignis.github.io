const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
});

test("renders the Korean portfolio and switches to English", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toHaveAttribute("aria-label", "김민식 Minsik Kim");
    await expect(page.locator(".hero-headline")).toHaveAttribute("aria-label", "설명 가능한 AI로 사람과 현장을 잇습니다.");
    const languageSwitch = page.getByRole("button", { name: "Switch to English" });
    await expect(languageSwitch).toHaveCount(1);
    await languageSwitch.click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveAttribute("aria-label", "김민식 Minsik Kim");
    await expect(page.locator(".hero-headline")).toHaveAttribute("aria-label", "Building explainable AI for people and the field.");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("keeps semantic landmarks and prevents horizontal overflow", async ({ page }) => {
    await expect(page.getByRole("main")).toHaveCount(1);
    const menuButton = page.getByRole("button", { name: "메뉴 열기" });
    if (await menuButton.isVisible()) {
        await menuButton.click();
        await expect(page.getByRole("navigation", { name: "모바일 메뉴" })).toBeVisible();
    } else {
        await expect(page.getByRole("navigation", { name: "주요 메뉴" })).toBeVisible();
    }
    const widths = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
    expect(widths.scroll).toBeLessThanOrEqual(widths.client + 1);
});

test("explores the industrial AI research matrix with accessible controls", async ({ page }) => {
    const matrixButtons = page.locator("[data-matrix-node]");
    await expect(matrixButtons).toHaveCount(9);
    await expect(matrixButtons.nth(4)).toHaveAttribute("aria-pressed", "true");

    const productionXai = page.getByRole("button", { name: /생산 AI × 설명가능 AI/ });
    await productionXai.click();
    await expect(productionXai).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("[data-matrix-title]")).toContainText("설명 가능한 생산 의사결정");
    await expect(page.locator("[data-matrix-description]")).toContainText("반도체 FAB");

    await expect(page.locator("[data-scroll-progress]")).toHaveCount(1);
});

test("shows verified LinkedIn profile and credentials", async ({ page }) => {
    const linkedIn = page.getByRole("link", { name: "LinkedIn" });
    await expect(linkedIn).toHaveAttribute("href", /linkedin\.com\/in\//);
    await expect(page.getByText("Deep Learning Specialization", { exact: true })).toHaveCount(1);
    await expect(page.getByText("Google for Developers Machine Learning Bootcamp", { exact: true })).toHaveCount(1);
});

test("uses a researcher-oriented structure and four publication groups", async ({ page }) => {
    const desktopNav = page.locator("[data-nav-links] .nav-link");
    await expect(desktopNav).toHaveCount(4);
    await expect(page.locator("[data-nav-target='research']")).toHaveCount(0);
    await expect(page.locator("[data-publication-category]")).toHaveCount(4);
    await expect(page.getByRole("heading", { name: "국내 학술대회" })).toHaveCount(1);
    await expect(page.getByRole("heading", { name: "국내 저널" })).toHaveCount(1);
    await expect(page.getByRole("heading", { name: "해외 학술대회" })).toHaveCount(1);
    await expect(page.getByRole("heading", { name: "해외 저널" })).toHaveCount(1);
    await expect(page.locator(".profile-research [data-focus-list]")).toHaveCount(1);
});

test("renders the publication bibliography, awards, and manuscript states", async ({ page }) => {
    await expect(page.locator("[data-publication-category='domestic-conference'] .publication-item")).toHaveCount(7);
    await expect(page.locator("[data-publication-category='domestic-journal'] .publication-item")).toHaveCount(0);
    await expect(page.locator("[data-publication-category='international-conference'] .publication-item")).toHaveCount(6);
    await expect(page.locator("[data-publication-category='international-journal'] .publication-item")).toHaveCount(3);
    await expect(page.locator(".publication-award")).toHaveCount(2);
    await expect(page.locator(".publication-status")).toHaveCount(6);
    await expect(page.locator(".publication-self")).toHaveCount(16);
    await expect(page.getByRole("heading", { name: "생성형 AI를 활용한 대화형 공정 모니터링 지원 시스템 개발" })).toHaveCount(1);
});

test("presents twelve consolidated research projects", async ({ page }) => {
    await expect(page.locator("[data-work-list] .work-item")).toHaveCount(12);
    await expect(page.getByRole("heading", { name: "디지털 트윈 환경을 위한 Bottleneck 공정 목표 WIP 산출 및 관리방안 연구" })).toHaveCount(1);
    await expect(page.getByRole("heading", { name: "설비 및 공정 통합 관제를 위한 제조 특화 SLM 개발" })).toHaveCount(1);
    await expect(page.getByText("SK하이닉스 · 연구조원", { exact: true })).toHaveCount(1);
    await expect(page.locator('.work-year[aria-label="2025.09—2026.02"]')).toHaveCount(1);
});

test("@visual hero remains visually stable", async ({ page }) => {
    await expect(page.locator("#home")).toHaveScreenshot("portfolio-hero.png", {
        animations: "disabled"
    });
});
