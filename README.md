### [![Hits](https://hits.sh/github.com/jongin403/wedding-invitation.svg?view=today-total)](https://hits.sh/github.com/jongin403/wedding-invitation/)

# 👰🏻‍♀️ wedding-invitation 🤵🏻

- 💌 청첩장을 만들어서 배포하기 위한 레포지토리

<br/>

## 관련 기술 스택

<img align="left" width="26px" src="https://user-images.githubusercontent.com/23301416/216073916-e950a004-6432-49e7-bdbf-aac9f186d791.svg"/> Next.js

<img align="left" width="26px" src="https://user-images.githubusercontent.com/23301416/216073887-5201937b-d416-4715-9840-8914a1c3a12e.svg"/> React

<img align="left" width="26px" src="https://user-images.githubusercontent.com/23301416/222099312-87bdec79-360b-4e26-b803-b1baa6868690.svg"/> TypeScript

<br/>

## 로컬 개발환경 실행

- `npm run dev`
- http://localhost:3000

## 디렉토리 구조

```
.
├── _templates -> tools/cc 에서 사용하는 템플릿 파일
├── .github
│   └── workflows -> 깃헙 액션 워크플로우
├── .storybook -> 스토리북 설정 및 테스트
│   └── __image_snapshots__ -> 스토리북 baseline 이미지
│   │   └── __diff_output__ -> 스토리북 baseline diff 이미지
│   └── vt.test.ts -> storyshot 테스트 설정 파일, 비주얼 테스트
├── components -> 컴포넌트
├── hooks -> react 커스텀 훅
├── pages -> nextjs 페이지
├── public -> 정적 파일
│   └── fonts -> 폰트 파일
├── services -> 서비스 - api 통신이나 비즈니스 로직
├── shared -> 전역 공유 컴포넌트 (reset css..)
├── stores -> mobx 스토어
├── stories -> storybook 스토리 파일
├── tools -> 유틸 스크립트
│   └── cc.js -> create component 컴포넌트 파일과 스토리 파일 생성 (명령어: node tools/cc.js {컴포넌트명})
├── .env.local -> nextjs 로컬 개발환경 .env 파일
├── .env.example -> .env 예제값
├── jest.config.js -> jest 테스트 설정 파일, 비주얼 테스트와는 독립적
├── next.config.js -> nextjs 서버, 빌드 단계의 구성 설정 파일
```
