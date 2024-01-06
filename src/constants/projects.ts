const CHOROK = {
  image: '/chorok.png',
  name: '초록(Chorok)',
  title: '누구나 쉽게 홈 가드닝을 할 수 있게 도와주는 모바일 최적화 웹 어플리케이션',
  description:
    '식물 잎 병해 진단, 나의 정원 & 물주기 스케쥴러 & 식물 커뮤니티 서비스를 제공하는 웹 어플리케이션 입니다. 모든 페이지에서 로그인한 유저의 데이터를 다루기 때문에 로그인한 유저의 데이터를 전역 상태 관리하면 좋겠다는 생각이 들어 상태관리에 관심이 생겼습니다. 또한 전과 다르게 모바일 UI를 먼저 개발하여 많은 브라우저들 간의 차이가 발생하여 웹 표준에 대한 관심도 생겼습니다.',
  period: '2022.05 ~ 2022.07',
  contents: [
    '- 로직분리 : 각 페이지 마다 컴포넌트를 감싸고 있는 컨테이너에서 로직을 구현하였고 컨테이너 안에서 UI 컴포넌트들을 관리하였습니다. 로직과 뷰가 분리되어 코드가 깔끔해지고 유지보수가 조금 더 간편해졌고 중복되는 로직들을 관리하기 위한 React Custom Hooks에 대한 관심이 생겼습니다.',
    '- Figma를 이용한 UI 개발 : MUI 라이브러리와 Sass를 사용하여 반응형 웹을 구현했습니다. Figma로 기획된 UI를 그대로 구현하기 위해 노력했으며 화면 스크롤, box-shadow 등을 사용하여 사용자 경험 개선에 많은 노력을 기울였습니다.',
    '- React.js, MUI, Figma, Node, Express, AWS S3, FLASK, MONGODB',
  ],
  repository: 'https://github.com/seung-ju-kim/chorok',
};

const JACKPOT = {
  image: '/cocktail.png',
  name: '저쪽 손님께서 보내신 겁니다',
  title: '칵테일 정보제공과 칵테일 추천 서비스 등을 제공하는 웹 서비스',
  description:
    '칵테일에 대한 질문과 자유로운 소통을 하는 게시판 & 칵테일에 대한 흥미를 이끌어주는 칵테일 MBTI, QUIZ & 수많은 칵테일 데이터를 보여주는 서비스를 제공하는 웹 어플리케이션 입니다. 데스크탑을 기준으로 만들었지만 마치 모바일 환경에서 이용하는 듯한 웹 서비스를 만들었습니다. 많든 데이터를 다루는 사이트인 만큼 속도 개선에 관심이 생겼고 React 최적화와 Pagination 등에 관심이 생겼습니다.',
  period: '2022.04 ~ 2022.05',
  contents: [
    '- 데이터 가공 및 데이터 시각화 : 각 페이지 마다 컴포넌트를 감싸고 있는 컨테이너에서 로직을 구현하였고 컨테이너 안에서 UI 컴포넌트들을 관리하였습니다. 로직과 뷰가 분리되어 코드가 깔끔해지고 유지보수가 조금 더 간편해졌고 중복되는 로직들을 관리하기 위한 React Custom Hooks에 대한 관심이 생겼습니다.',
    '- React.js, MUI, Figma, Node, Express, Sass, Chart.js, MONGODB',
  ],
  repository: 'https://github.com/seung-ju-kim/jackpot',
};

const KRUGER = {
  image: '/kruger.png',
  name: 'Kruger',
  title: '개인 포트폴리오 작성과 토이 프로젝트 인원을 구하는 웹 어플리케이션',
  description:
    '자신의 포트폴리오 이력 작성 서비스 & 다른 사람들과 작성한 포트폴리오를 공유할 수 있는 네트워크 서비스 & 포트폴리오를 바탕으로 토이 프로젝트를 모집하고 같이 공부하는 서비스를 제공하는 웹 어플리케이션입니다. 많은 컴포넌트가 중복이되어 팀원들 간에  코드를 서로 공유하여 개발 시간을 단축 시켰지만 컴포넌트를 모듈화 하여 적용하지는 못했습니다. 하지만 이러한 경험덕분에 폴더구조와 컴포넌트 재사용에 대한 관심이 생겼고 Git을 통한 이슈 작성과 Pull Request를 할 때의 충돌 해결 등의 협업 능력도 상승했습니다.',
  period: '2022.03 ~ 2022.03',
  contents: [
    '- React Boostrap을 사용한 UI 개발 : 2주라는 짧은 개발 기간 동안 팀원들과 기획부터 배포까지 완성해야 했기에 간단한 CSS 라이브러리를 통해 UI를 개발하였습니다. 전체적인 UI 개발을 맡아서 진행했고 모바일 버전에서도 깨지지 않도록 신경쓰면서 개발하였습니다.',
    '- MVP 개발 : Backend 팀원들이 전달해준 API를 통해 User들의 데이터를 관리하고 사용자 권한에 따라 다른 UI를 보여주도록 했습니다.',
    '- React.js, React-Bootstrap, Figma, Node, Express, MONGODB',
  ],
  repository: 'https://github.com/seung-ju-kim/kruger',
};

export const PROJECTS: {
  image: string;
  name: string;
  title: string;
  description: string;
  period: string;
  contents: string[];
  repository: string;
}[] = [CHOROK, JACKPOT, KRUGER];
