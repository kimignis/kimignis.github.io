const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "content.js"), "utf8"), context);
const content = context.window.PORTFOLIO_CONTENT;

assert(content, "PORTFOLIO_CONTENT가 필요합니다.");
assert.equal(content.site.defaultLanguage, "ko", "기본 언어는 ko여야 합니다.");
assert.match(content.site.url, /^https:\/\//, "사이트 주소는 HTTPS여야 합니다.");
assert.match(content.site.github, /^https:\/\/github\.com\//, "GitHub 주소를 확인하세요.");
assert.match(content.site.lab, /^http:\/\/iai\.khu\.ac\.kr\//, "연구실 주소를 확인하세요.");
assert(content.focus.length >= 3, "연구 접근 항목은 3개 이상이어야 합니다.");
assert(content.work.length >= 1, "대표 작업은 1개 이상이어야 합니다.");
assert(content.publications.length >= 1, "논문 또는 발표는 1개 이상이어야 합니다.");

const localizedFields = [
    content.profile.name, content.profile.headline, content.profile.intro,
    ...content.focus.flatMap((item) => [item.title, item.description]),
    ...content.work.flatMap((item) => [item.title, item.summary]),
    ...content.publications.flatMap((item) => [item.title, item.venue])
];
localizedFields.forEach((field) => {
    assert(field.ko && field.en, "한글과 영문 값을 모두 입력하세요.");
});

const source = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(!/example\.com|example\.edu|\[Your/i.test(source), "공개 페이지에 예시용 개인정보가 남아 있습니다.");
assert(!/010-\d{4}-\d{4}|1997\.07\.28|군포시/.test(fs.readFileSync(path.join(root, "content.js"), "utf8")), "공개 콘텐츠에 민감정보가 남아 있습니다.");
JSON.parse(fs.readFileSync(path.join(root, "public/projects/portfolio/scene-1/lottie.json"), "utf8"));
JSON.parse(fs.readFileSync(path.join(root, "public/projects/portfolio/scene-1/controls.json"), "utf8"));
console.log("content, metadata, and Lottie JSON: ok");
