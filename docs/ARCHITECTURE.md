# 아키텍처

## 구조

```text
index.html                         의미 구조, SEO 메타, 접근성 랜드마크
content.js                         한·영 콘텐츠 원본
style.css                          디자인 토큰, 레이아웃, 반응형 스타일
script.js                          렌더링, 언어 전환, 메뉴, Lottie 연결
public/projects/portfolio/scene-1  대표 Lottie와 편집 컨트롤
tests                              콘텐츠 검사와 Playwright QA
github-profile                     GitHub 프로필 README 초안
docs                               운영·수정·보안 문서
```

## 설계 결정

- GitHub Pages의 장점을 유지하기 위해 빌드가 필요 없는 정적 구조를 사용합니다.
- 콘텐츠는 `content.js`에 모으고 화면은 `script.js`가 렌더링합니다.
- 한글과 영문은 같은 데이터 항목에 나란히 저장해 누락을 줄입니다.
- `publications`가 비어 있으면 해당 메뉴와 섹션을 자동으로 숨깁니다.
- 장식용 이모지와 임의 SVG 아이콘은 쓰지 않고 Lucide 아이콘을 사용합니다.
- 움직임을 줄이는 OS 설정에서는 Lottie 자동 재생과 전환 효과를 멈춥니다.

## API 확장 지점

현재는 `window.PORTFOLIO_CONTENT`를 사용합니다. 나중에 CMS나 백엔드 API를 붙일 때는 `script.js`의 `content` 공급부만 비동기 로더로 교체하고, 렌더 함수의 데이터 모양을 그대로 유지합니다.

예상 순서:

1. `content.js`와 같은 구조를 반환하는 `/api/portfolio` 정의
2. 로딩·실패 상태 추가
3. 읽기 전용 캐시 정책 설정
4. 스키마 검증과 Playwright 계약 테스트 추가

개인정보·인증·관리자 편집 기능은 별도의 위협 모델과 권한 설계 없이 추가하지 않습니다.
