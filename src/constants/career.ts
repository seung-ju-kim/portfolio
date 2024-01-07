const ART_BONBON = {
  image: '/domfam.jpeg',
  name: '(주)돔팸',
  title: '다양한 디바이스, 플랫폼에 맞는 웹사이트를 제작하는 SI 업체',
  description:
    'React, Vue 등 다양한 프론트엔드 프레임워크를 사용하여 요구사항에 맞는 웹 플랫폼을 개발합니다.',
  period: '2022.06 ~ 현재',
  contents: [
    'AI 디지털 교과서 - 학생 데이터 기반 맞춤 콘텐츠 제공하는 수학 AI 디지털 교과서 (2023.11 ~ 현재)',
    '- 개발 진행중...',
    '',
    '아트봉봉 - 세계 최초 실시간 온라인 미술 교육 플랫폼 (2023.06 ~ 2023.11)',
    '- 로그인, 회원가입 등 사용자 관리 부분 담당 개발(Access Token + Refresh Token)',
    '- 협업 효율성을 위한 공통 컴포넌트 분리(props, slot)',
    '- 생산성을 높이기 위한 전역 상태관리(Vuex)',
    '- 빠른 Data Fetching을 위해 Watch Query를 사용한 SSR',
    '- Vue2, Nuxt2, Vuetify, Sass',
  ],
};
const IRONFLAG = {
  image: '/ironflag.png',
  name: '(주)아이언플래그',
  title: '블록체인 TechFIN 기업',
  description:
    '자사 서비스 프론트엔드, 자사 어드민 및 제휴사 관리 어드민 페이지를 개발하였습니다. 주로 테이블을  사용한 반응형 웹을 구현하였으며 실시간 데이터와 pre-fetching을 통한 외부 API 연동으로 데이터를 시각화 하는 작업을 진행했습니다. 또한 Github Actions를 통한 CI/CD 자동화로 빌드파일만 전송하여 용량을 아낄 수 있었습니다.',
  period: '2022.08 ~ 2022.12',
  contents: [
    '자사 어드민 및 제휴사 관리 어드민 페이지 (2022.08 ~ 2022.12)',
    '- 프로젝트의 첫 개발자로 모든 IT 서비스와 개발부터 배포 운영까지 관리',
    '- 모바일 환경을 고려한 UI 개발(라이브러리를 사용한 반응형 웹)',
    '- Next.js를 사용하여 SSR 도입(초기 랜더링 속도 개선)',
    '- Custom Hooks를 사용하여 재사용성 높임(개발기간 2일 이상 단축)',
    '- Recoil을 사용한 전역 상태관리',
    '- Github Actions를 사용하여 CI/CD 자동화(배포 시간 단축)',
    '- 외부 API 정보를 가공하여 데이터 시각화',
    '- Selenium을 통한 웹 크롤링으로 업무 자동화 프로그램을 만들어 제공(하루에 30분씩 2번 1시간 걸리던 작업이 버튼 한번으로 가능해짐)',
    '- Next.js, Prisma, bootstrap, tailwindCss, Sass, PostgreSQL, Nginx, Recoil, Python, Selenium',
  ],
};

export const CAREER: {
  image: string;
  name: string;
  title: string;
  description: string;
  period: string;
  contents: string[];
}[] = [ART_BONBON, IRONFLAG];
