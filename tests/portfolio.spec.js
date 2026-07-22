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

test("@visual hero remains visually stable", async ({ page }) => {
    await expect(page.locator("#home")).toHaveScreenshot("portfolio-hero.png", {
        animations: "disabled"
    });
});
