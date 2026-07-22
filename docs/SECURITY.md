# 보안 및 배포 메모

## 현재 적용

- HTML 메타 기반 Content Security Policy
- HTTPS 리소스만 허용
- 외부 링크에 `noopener noreferrer`
- Referrer Policy
- 서드파티 폰트·아이콘·Lottie CDN 출처 제한
- `_headers`에 CSP, HSTS, Permissions-Policy, MIME 보호 정책 선언

## GitHub Pages의 한계

GitHub Pages는 저장소의 `_headers` 파일을 HTTP 응답 헤더로 적용하지 않습니다. 따라서 다음 항목은 HTML만으로 완전히 강제할 수 없습니다.

- `Strict-Transport-Security`
- `Permissions-Policy`
- `X-Frame-Options`
- 응답 헤더 형태의 CSP

`github.io` 서비스 자체는 HTTPS를 제공하지만, 커스텀 도메인이나 더 엄격한 정책이 필요하면 Cloudflare Pages/Workers 같은 헤더 설정이 가능한 호스팅 앞단을 사용하세요. `_headers`는 그 환경으로 옮길 때 바로 적용할 수 있는 기준안입니다.

## 운영 체크리스트

- 외부 CDN 버전을 임의로 최신값에 고정하지 말고, 검증 후 명시 버전을 올립니다.
- 이메일·전화번호 등 개인정보를 공개하기 전에 스팸 및 수집 위험을 검토합니다.
- 사용자 입력, 업로드, API 키가 필요한 기능은 정적 페이지에 바로 추가하지 않습니다.
- 의존성 변경 후 `npm audit`와 전체 테스트를 실행합니다.
