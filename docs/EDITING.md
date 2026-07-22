# 콘텐츠 수정 가이드

화면 문구를 바꿀 때는 먼저 `content.js`만 수정하세요. 레이아웃과 색상은 `style.css`, 동작은 `script.js`에 있습니다.

## 기본 원칙

1. `{ ko: "…", en: "…" }` 형식의 값은 두 언어를 함께 수정합니다.
2. 쉼표와 따옴표를 지웁니다. JavaScript 객체이므로 항목 사이의 쉼표가 필요합니다.
3. 존재하지 않는 링크는 `#`로 넣지 말고, 링크 항목 자체를 빼세요.
4. 이메일을 공개할 때는 스팸 수집 가능성을 고려하세요.

## 프로젝트 추가

`work: []` 안에 아래 블록을 복사해 넣습니다.

```js
{
    year: "2026",
    type: { ko: "연구 프로젝트", en: "Research project" },
    title: { ko: "프로젝트 제목", en: "Project title" },
    summary: {
        ko: "문제, 맡은 역할, 결과를 두세 문장으로 설명합니다.",
        en: "Describe the problem, your role, and the outcome in two or three sentences."
    },
    tags: ["Python", "Data analysis", "Visualization"],
    url: "https://github.com/kimignis/repository"
}
```

링크가 아직 없다면 `url` 줄을 삭제합니다.

## 논문 또는 발표 추가

`publications: []` 안에 항목을 넣는 순간 Publications 섹션과 메뉴가 자동으로 나타납니다.

```js
{
    title: { ko: "논문 제목", en: "Paper title" },
    authors: "Minsik Kim, Co-author",
    venue: { ko: "학회 또는 저널, 2026", en: "Conference or Journal, 2026" },
    url: "https://doi.org/..."
}
```

## 연락처 추가

`contact.links`에 이메일을 추가할 수 있습니다.

```js
{ label: "Email", url: "mailto:your-address@example.com", icon: "mail" }
```

아이콘 이름은 [Lucide Icons](https://lucide.dev/icons/)의 이름을 사용합니다. 이모지는 UI 아이콘으로 사용하지 않습니다.

## 디자인 토큰 변경

`style.css` 맨 위의 `:root` 값만 바꾸면 전체 색상과 간격이 함께 바뀝니다.

- `--paper`: 전체 배경
- `--ink`: 기본 텍스트
- `--signal`: 핵심 액센트
- `--violet`: 키보드 포커스와 보조 액센트
- `--page-gutter`: 좌우 여백

액센트는 한 화면에서 서로 경쟁하지 않도록 `--signal`을 주역, `--violet`을 보조로 유지합니다.

## 변경 후 확인

```bash
npm run check
npm test
```

디자인 변경이 의도적이고 테스트 화면이 올바르면 `npm run test:update`로 기준 이미지를 갱신한 뒤 다시 `npm test`를 실행합니다.
