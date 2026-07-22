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
assert.match(content.site.linkedin, /^https:\/\/(www\.)?linkedin\.com\/in\//, "LinkedIn 주소를 확인하세요.");
assert.match(content.site.lab, /^http:\/\/iai\.khu\.ac\.kr\//, "연구실 주소를 확인하세요.");
assert(content.focus.length >= 3, "연구 접근 항목은 3개 이상이어야 합니다.");
assert.equal(content.work.length, 12, "중복을 통합한 Research Project는 12개여야 합니다.");
const workTitles = content.work.map((item) => item.title.ko);
assert.equal(new Set(workTitles).size, workTitles.length, "Research Project 제목은 중복될 수 없습니다.");
content.work.forEach((item) => {
    assert.match(item.year, /^\d{4}\.\d{2}—\d{4}\.\d{2}$/, "과제 참여기간은 YYYY.MM—YYYY.MM 형식이어야 합니다.");
    assert(item.tags.length >= 3, "Research Project마다 연구 키워드가 3개 이상 필요합니다.");
});
assert.equal(content.publications.length, 16, "정리된 논문 및 학술대회 발표는 16개여야 합니다.");
assert.equal(content.publicationCategories.length, 4, "Publication 분류는 4개여야 합니다.");
const publicationCategoryIds = new Set(content.publicationCategories.map((item) => item.id));
content.publications.forEach((item) => assert(publicationCategoryIds.has(item.category), "모든 Publication에 유효한 분류가 필요합니다."));
const expectedPublicationCounts = {
    "domestic-conference": 7,
    "domestic-journal": 0,
    "international-conference": 6,
    "international-journal": 3
};
Object.entries(expectedPublicationCounts).forEach(([category, count]) => {
    assert.equal(content.publications.filter((item) => item.category === category).length, count, `${category} 항목 수를 확인하세요.`);
});
assert.equal(content.publications.filter((item) => item.award).length, 2, "우수논문상 수상 발표는 2개여야 합니다.");
const publicationStatusKinds = new Set(["scheduled", "preparation", "submitted", "review"]);
content.publications.filter((item) => item.status).forEach((item) => {
    assert(publicationStatusKinds.has(item.status.kind), "Publication 상태 종류를 확인하세요.");
});
assert(content.education.length >= 3, "학력 항목은 3개 이상이어야 합니다.");
assert(content.credentials.length >= 2, "자격증 또는 수료증은 2개 이상이어야 합니다.");
assert(content.contact.links.some((item) => item.url === content.site.linkedin), "Contact에 LinkedIn 링크가 필요합니다.");
assert(!content.contact.links.some((item) => item.label === "FAIM 2024"), "Contact에는 FAIM 2024 링크를 표시하지 않습니다.");
assert.equal(content.researchLoop.length, 4, "연구 루프는 4단계여야 합니다.");
assert.equal(content.researchMatrix.methods.length, 3, "연구 방법은 3개여야 합니다.");
assert.equal(content.researchMatrix.applications.length, 3, "연구 응용 분야는 3개여야 합니다.");
assert.equal(content.researchMatrix.cells.length, 9, "연구 매트릭스는 9개 교차점을 가져야 합니다.");
content.focus.forEach((item) => assert.equal(item.trace.length, 3, "연구 주제마다 3단계 처리 흐름이 필요합니다."));

const localizedFields = [
    content.profile.name, content.profile.headline, content.profile.intro,
    ...content.focus.flatMap((item) => [item.title, item.description]),
    ...content.work.flatMap((item) => [item.type, item.title, item.summary]),
    ...content.publications.flatMap((item) => [item.title, item.venue, ...(item.award ? [item.award] : []), ...(item.status ? [item.status.label] : [])]),
    ...content.publicationCategories.map((item) => item.label),
    ...content.education.flatMap((item) => [item.degree, item.school, item.detail]),
    ...content.credentials.flatMap((item) => [item.title, item.issuer]),
    ...content.researchLoop.flatMap((item) => [item.title, item.description]),
    ...content.researchMatrix.methods,
    ...content.researchMatrix.applications,
    ...content.researchMatrix.cells.flatMap((item) => [item.title, item.description])
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
