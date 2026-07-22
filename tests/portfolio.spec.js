const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
});

test("renders the Korean portfolio and switches to English", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toHaveAttribute("aria-label", "현장을 읽고, 판단을 설명합니다.");
    const languageSwitch = page.getByRole("button", { name: "Switch to English" });
    await expect(languageSwitch).toHaveCount(1);
    await languageSwitch.click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveAttribute("aria-label", "Read the field. Explain the decision.");
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

test("@visual hero remains visually stable", async ({ page }) => {
    await expect(page.locator("#home")).toHaveScreenshot("portfolio-hero.png", {
        animations: "disabled",
        mask: [page.locator("#hero-motion")]
    });
});
