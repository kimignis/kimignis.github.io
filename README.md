# Minsik Kim · Research Portfolio

경희대학교 산업지능연구실 김민식의 설명가능 AI·LLM·제조/생산 AI 연구를 소개하는 한·영 개인 홈페이지입니다. 별도 프레임워크 없이 HTML/CSS/JavaScript로 동작하며 GitHub Pages에 바로 올릴 수 있습니다.

## 가장 자주 하는 수정

홈페이지 문구와 목록은 대부분 [`content.js`](content.js) 한 파일에서 바꿉니다.

- 이름·헤드라인·소개: `profile`
- 연구 주제: `focus`
- 프로젝트: `work`
- 논문·발표: `publications`
- 기술과 관심사: `skills`
- 연락 링크: `contact.links`

항목을 추가하는 정확한 형식은 [`docs/EDITING.md`](docs/EDITING.md)에 복사 가능한 예시로 정리했습니다.

## 로컬에서 확인하기

```bash
npm install
npm run preview
```

브라우저에서 `http://127.0.0.1:4173`을 엽니다.

## 검사

```bash
npm run check
npm test
```

- `npm run check`: 콘텐츠 구조, JavaScript 문법, Lottie JSON 검사
- `npm test`: 데스크톱·모바일 동작 및 시각 회귀 검사
- `npm run test:update`: 의도적인 디자인 변경 후 기준 이미지 갱신

## 문서

- [`docs/PRD.md`](docs/PRD.md): Phase 0–6 목표와 완료 기준
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): 파일 구조와 확장 원칙
- [`docs/EDITING.md`](docs/EDITING.md): 콘텐츠 수정 레시피
- [`docs/SECURITY.md`](docs/SECURITY.md): GitHub Pages 보안 헤더 한계와 대안
- [`docs/OG_IMAGE_PROMPT.md`](docs/OG_IMAGE_PROMPT.md): 소셜 미리보기 이미지 생성 기록
- [`github-profile/README.md`](github-profile/README.md): GitHub 프로필 저장소용 README 원본

`소스자료/`의 이력서 등 개인 원본은 `.gitignore`로 공개 저장소에서 제외합니다. 사이트에는 공개 연구 이력만 선별해 반영합니다.

## 공개 반영

이 저장소의 기본 브랜치가 GitHub Pages의 배포 원본으로 연결되어 있다면, 검토가 끝난 변경을 `main`에 반영하면 `https://kimignis.github.io/`에 표시됩니다. 커밋과 푸시는 의도한 변경을 확인한 뒤 진행하세요.
