const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
    testDir: "./tests",
    testMatch: "**/*.spec.js",
    fullyParallel: true,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 2 : 0,
    reporter: [["list"], ["html", { open: "never" }]],
    expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.015 } },
    use: {
        baseURL: "http://127.0.0.1:4173",
        locale: "ko-KR",
        colorScheme: "light",
        reducedMotion: "reduce",
        screenshot: "only-on-failure",
        trace: "retain-on-failure"
    },
    projects: [
        { name: "desktop", use: { viewport: { width: 1440, height: 1000 } } },
        { name: "mobile", use: { viewport: { width: 390, height: 844 } } }
    ],
    webServer: {
        command: "node tests/server.cjs",
        url: "http://127.0.0.1:4173",
        reuseExistingServer: true
    }
});
