import projectImg1 from '@/assets/project/project1.png'
import projectImg2 from '@/assets/project/project2.png'
import projectImg3 from '@/assets/project/project3.png'
import projectImg4 from '@/assets/project/project4.png'
import projectImg5 from '@/assets/project/project5.png'
import projectImg6 from '@/assets/project/project6.png'

import careerImg2 from '@/assets/career/career2.png'
import careerImg3 from '@/assets/career/career3.png'
import careerImg4 from '@/assets/career/career4.png'
import careerImg5 from '@/assets/career/career5.png'
import careerImg6 from '@/assets/career/career6.png'
import careerImg7 from '@/assets/career/career7.png'
import careerImg8 from '@/assets/career/career8.png'
import careerImg9 from '@/assets/career/career9.png'
import { worksDataModel } from '../../global'

export const skillStacks = [
  {
    name: 'HTML',
    x: 0,
    y: 0,
    bg: 'f35825',
    desc: '',
  },
  {
    name: 'Css',
    x: 18,
    y: -2,
    bg: '1c76b8',
    desc: 'CSS기본 문법부터 최근 나오는 기술들까지 검색하며 공부하고 있습니다.',
  },
  {
    name: 'Scss',
    x: 30,
    y: -4,
    bg: 'd1699d',
    desc: '주로 사용하는 스타일 언어입니다. SCSS를 활용하면 인터랙티브한 웹페이지도 빠른 시간내에 만들 수 있습니다.',
  },
  {
    name: 'Jquery',
    x: 10,
    y: -6,
    bg: '106dae',
    desc: '',
  },
  {
    name: 'JavaScript',
    x: 0,
    y: -10,
    bg: 'f78224',
    desc: 'ES6문법부터 ES8문법까지 많은 공부를 했습니다. 자바스크립트는 공부해야할 것이 너무 많기에 완전히 안다고 할 수는 없지만 프론트엔드에게는 필수 언어이기에 꾸준히 공부하고 있습니다.',
  },
  {
    name: 'TypeScript',
    x: -10,
    y: -8,
    bg: '0076c6',
    desc: '기본적인 타입 선언 및 활용을 하고 있습니다. 아직은 오류가 많이 나서 수정하는데 시간이 걸리지만 공부를 위해 자바스크립트를 대체해서 프로젝트에 적용을 하고 있습니다.',
  },
  {
    name: 'ReactJs',
    x: -15,
    y: 0,
    bg: '5ed3f3',
    desc: '현재 공부를 마치고 실무에서 사용하기 위해 연습중입니다. Function Component방식을 사용하며 redux, react-router, context Api, reactHooks등 대부분의 기능을 익혔으며 손에 익게 하기위해 현재는 주 언어로 프로젝트들을 만들고 있습니다.',
  },
  {
    name: 'VueJs',
    x: -30,
    y: 0,
    bg: '41b8b3',
    desc: 'Option API를 이용한 프론트엔드 페이지 제작이 가능합니다. 함께 사용한 라이브러리로는 vuex vue-router가 있으며 전 회사에서 주 언어로 사용했던 언어입니다. 빠르게 코딩이 가능하며 현재 composition API를 공부하고 있습니다.',
  },
  {
    name: 'NextJS',
    x: -9,
    y: 8,
    bg: '000',
    desc: 'React와 거의 비슷한 방식이라 기본적으로 프로젝트를 생성하고 만드는 것에는 크게 지장이 없지만 아직 서버사이드 쪽 공부가 미흡한 상태입니다. 현재 공부중인 언어입니다.',
  },
  {
    name: 'TailwindCss',
    x: 25,
    y: 4,
    bg: '36b7f0',
    desc: 'PostCss연습을 위해 사용하고 있습니다. 기본적인 맥락이 BootStrap과 크게 다르지 않아 사용하는데 불편함을 느끼거나 하지 않지만 SCSS를 사용할 때보다는 자유도가 떨어진다는 느낌이 듭니다. 프로젝트를 수행하는데는 크게 어려움이 없습니다.',
  },
  {
    name: 'BootStrap',
    x: 20,
    y: -10,
    bg: '761dde',
    desc: '',
  },

  {
    name: 'NodeJs',
    x: 7,
    y: 4,
    bg: '8fc708',
    desc: 'express를 활용하여 기본적인 백엔드 서버 개발이 가능합니다. multer등의 미들웨어를 이용해 이미지를 저장하거나 MongoDb atlas를 활용해 DB에서 데이터를 불러오는 등의 기본적인 개발이 가능합니다.',
  },
]

export const colorPallete: { [key: string]: string } = {
  NodeJs: '8fc708',
  BootStrap: '761dde',
  TailwindCss: '36b7f0',
  NextJs: '000',
  VueJs: '41b8b3',
  ReactJs: '5ed3f3',
  TypeScript: '0076c6',
  JavaScript: 'f78224',
  Jquery: '106dae',
  Scss: 'd1699d',
  Css: '1c76b8',
  HTML: 'f35825',
  Redux: '7248b6',
  Firebase: 'f4c43d',
  Vercel: '000',
  'Framer-motion': '5403f7',
  Aws: 'ff9c08',
  MongoDB: '199555',
}

export const projects = [
  {
    name: 'FurnitureMarket',
    skill: [
      'NextJs',
      'TypeScript',
      'TailwindCss',
      'Redux',
      'Firebase',
      'Vercel',
    ],
    desc: 'Nextjs 를 활용한 SSR 쇼핑몰 프로젝트 구현하였습니다. getStaticProps함수와 getStaticPaths함수를 통해 정적인 웹페이지를 구현하였으며 파이어베이스 리얼타임 데이터베이스와 Cloudinary 서비스를 이용하여 Vercel환경에서 이미지를 저장하도록 구현하였습니다. TailwindCss를 활용하여 반응형 웹으로 만들었으며 다크모드 또한 지원합니다. Redux Toolkit으로 Next환경에서 상태관리를 하였으며 장바구니 기능 역시 구현하였습니다.',
    git: 'https://github.com/mypom11/furnitureMarket',
    learn: null,
    demo: 'https://furniture.jkmin.store',
    img: projectImg1,
  },
  {
    name: '인터랙티브 포트폴리오 사이트',
    skill: ['VueJs', 'Scss', 'Firebase'],
    desc: 'VueJs를 활용하여 인터랙티브한 웹페이지를 구현하였습니다. 원형으로 슬라이드 되는 Project페이지와 가로로 슬라이드되는 Works페이지 전체보기를 통해 여러 화면을 한 눈에 볼 수 있는 인터랙티브를 구현하였습니다. GSAP라이브러리를 통해 애니매이션을 구현하고 interactive observer API를 컴포넌트화 시켜 재사용 가능한 컴포넌트로 만들었습니다.',
    git: 'https://github.com/mypom11/portfolio-clonecoding-next-framer-motion',
    learn: null,
    demo: 'https://portfolio-40b9f.web.app/',
    img: projectImg2,
  },
  // {
  //   name: 'Portfolio 사이트 클론 코딩',
  //   skill: ['ReactJs', 'TypeScript', 'TailwindCss', 'Framer-motion', 'Vercel'],
  //   desc: 'TailwindCSS 공부를 위해 외국인 강좌를 클론 코딩하였습니다. JS로 강의하는 것을 TS로 변경하며 작업하였으며 Framer-motion라이브러리를 활용한 여러가지 애니매이션 제작 방법을 습득하고 클론 코딩에서 그치는 것이 아니라 제 것으로 만들기 위해 공부하였습니다.',
  //   git: 'https://github.com/mypom11/portfolio-clonecoding-next-framer-motion',
  //   learn: null,
  //   demo: 'https://portfolio-clonecoding-next-framer-motion.vercel.app/',
  //   img: projectImg3,
  // },

  {
    name: '이상형 월드컵 사이트',
    skill: ['VueJs', 'Scss', 'Aws', 'NodeJs', 'MongoDB'],
    desc: 'MongoDB를 공부하기 위해 만든 사이트입니다. Node를 활용하여 MongoDB와 커넥션을 하고 데이터베이스에서 필요한 데이터를 읽어오는 것을 구현하였습니다. 또한 다중 이미지를 Multer 미들웨어를 통해 서버에 저장하고 해당 URL을 데이터베이스에 올리는 것을 구현하였습니다. DB에 저장 시 몇 번을 선택했는지를 저장해 순위를 매기고 그에 따라 프론트에서 sort하여 순서대로 보여주는 로직을 구현하였습니다.',
    git: 'https://github.com/mypom11/IdealWorldCup',
    learn: null,
    demo: 'https://ideal-world-cup.vercel.app/',
    img: projectImg4,
  },
  {
    name: '영화 및 OTT 검색 사이트',
    skill: ['VueJs', 'Scss', 'Aws', 'NodeJs'],
    desc: 'TMDB API를 활용하여 영화 및 OTT 정보를 볼 수 있는 사이트를 제작하였습니다. 검색 기능 및 최근 영화 등 API에서 제공하는 것을 활용하여 만들었으며 TMDB와의 통신을 위한 Backend도 따로 제작하였습니다. AWS서버에 올리기 위해 현재는 이상형 월드컵 서버와 통합하여 하나의 서버로 AWS에서 실행중입니다. Intractive Observer API를 활용하여 커버 플로우 방식의 리스트를 개발하였으며 TV시리즈의 경우 각 시즌 별 회차 정보를 가져와 회차 정보를 표시해 줍니다. 또한 영화나 TV시리즈를 볼 수 있는 OTT서비스 역시 국내 기준으로 변경하여 표시해주는 사이트입니다.',
    git: 'https://github.com/mypom11/movie-web',
    learn: null,
    demo: 'https://movie-web-pearl.vercel.app/',
    img: projectImg5,
  },
  {
    name: '과거 포트폴리오',
    skill: ['HTML', 'Css', 'Scss', 'JavaScript', 'Jquery'],
    desc: '국비 교육과정 중 만들었던 포트폴리오입니다. jquery를 활용하여 가로 슬라이드 및 세로 슬라이드를 구현하였습니다. 멜론 홈페이지를 다시 만들어 보았으며 Video 및 음악 재생이 가능합니다. Vanila JavaScript만을 활용하여 저장된 json데이터를 Fetch하여 데이터를 보여주며 나이키 앱의 경우 class를 활용하여 SPA느낌의 페이지를 만들어 보기도 하였습니다. 지금 확인한다면 2년 전의 저의 모습과 현재 발전한 모습을 비교할 수 있는 사이트라고 생각합니다.',
    git: 'https://github.com/mypom11/new-portfolio',
    learn: null,
    demo: 'https://mypom11.github.io/new-portfolio/',
    img: projectImg6,
  },
]

export const worksData: worksDataModel[] = [
  {
    name: '통합 SI솔루션 구축 시스템',
    company: '삼성 에스원 (프리랜서)',
    period: '2022.11 ~ 2023.05 (6개월)',
    formation: 'FrontEnd Developer / Web Team Leader',
    skill: ['HTML', 'Css', 'Scss', 'JavaScript', 'VueJs'],
    desc: 'GridStack 라이브러리를 활용해서 사용자가 커스텀할 수 있는 대시보드와 위젯을 개발을 하였으며, 사용자가 커스텀 할 수 있는 테이블 역시 만들었습니다. 백엔드와 Socket.io를 연결해 실시간으로 데이터를 받아 대시보드에 표현하는 작업을 하였으며 여러 인풋에 정부 규격에 맞는 Validation체크를 하였습니다.',
    img: null,
  },
  {
    name: 'Logme 건강관리 솔루션',
    company: '로그미 (프리랜서)',
    period: '2022.12 ~ 2023.2 (3개월)',
    formation: 'FrontEnd Developer / Web Team Leader / Web Publisher',
    skill: ['HTML', 'Css', 'Scss', 'JavaScript', 'VueJs'],
    desc: '약 100가지가 넘는 설문조사를 json데이터로 저장하여 각각 상황에 맞는 설문을 사용자에게 보여주고 그에 따라 저장된 모든 설문 값을 설문 ID와 함께 서버에 전달하는 역할을 맡았습니다. 또한 데이터 입력 방식을 구체화 하여 클라이언트의 요청에 알맞는 차트와 도표를 구현하였으며 각종 설문 입력부분을 모듈화하여 재사용 가능한 컴포넌트를 구현하였습니다.',
    img: careerImg2,
  },
  {
    name: 'MCS 안전 관리 시스템',
    company: '한전 MCS (코리아 소프트)',
    period: '2022-06-01 ~ 2022-08-01 (2개월)',
    formation: 'FrontEnd Developer / Web Publisher',
    skill: ['HTML', 'Css', 'Scss', 'JavaScript', 'VueJs'],
    desc: '한국 전력공사와 한전MCS 간의 공사를 등록하고 공사에 대한 안전 감시원을 배치, 안전 감시원의 안전 감시 내역을 관리할 수 있는 통합 관리 시스템을 개발하였습니다. 이 프로젝트를 진행하며 엑셀데이터를 받아 DB의 양식과 맞게 설정 한 후 Backend서버에 넘겨주는 작업과 DB에서 받은 데이터를 EXCEL문서로 변환하여 다운로드 하는 기능을 제공하였습니다. 또한 Word문서와 같은 모양의 템플릿을 클라이언트 내부에서 제공하여 해당 양식을 프린트 할 수 있는 기능을 구현하였습니다. 카카오 지도 API를 이용하여 각 공사 지역에 대한 위치를 대시보드에 표시하고 공사의 현재 상태에 따라 지도에 보이는 아이콘이 다르게 구현하였습니다.',
    img: careerImg3,
  },
  {
    name: 'LASVEGAS MANIA',
    company: '라스베가스매니아 (코리아 소프트)',
    period: '2022-03-01 ~ 2022-08-01(5개월)',
    formation: 'FrontEnd Developer / Web Publisher',
    skill: ['HTML', 'Css', 'Scss', 'JavaScript', 'VueJs'],
    desc: '여행 쇼핑몰 사이트를 반응형으로 제작하였습니다. 여행 상세정보를 하나의 이미지가 아닌 여행일정, 옵션사항, 이미지 등 모든 부분을 데이터 조각으로 받아 클라이언트에 구현을 해야했기에 각 여행 종류별로 컴포넌트를 세분화 하고 각기 여행의 종류에 따라 알맞은 컴포넌트를 부를 수 있도록 프론트엔드를 구현하였습니다. 또한 SqureUp Api를 이용해 결제 모듈도 연동하였습니다. 또한 Google Calendar와 Full Calendar 라이브러리를 연동 시켜 실시간으로 현재 여행 예약 상태를 확인 할 수 있는 화면을 구현하였습니다.',
    img: careerImg4,
  },
  {
    name: 'KUSF/STS 모바일 앱',
    company: '한국 대학 스포츠 협의회 (코리아 소프트)',
    period: '2022-01-01 ~ 2022-08-01(7개월)',
    formation: 'FrontEnd Developer / Web Publisher',
    skill: ['HTML', 'Css', 'Scss', 'JavaScript', 'VueJs'],
    desc: 'WebView 방식을 이용한 모바일 앱 개발작업을 했습니다. apple, google, faceBook 의 OAuth 를 이용하여 회원가입 및 로그인을 구현하였으며 랜덤 변수을 이용한 문자 인증 로직을 프론트에서 처리하여 발송하였습니다. 백엔드에서 내려받은 Youtube URL을 youtube API를 활용해 새로운 디자인으로 화면에 표시하여 구동하였습니다. chartJs를 활용하여 방사형, 선형, 바형 그래프를 화면에 표시하였습니다.',
    img: careerImg5,
  },
  {
    name: '세브란스 병원 - 로봇 관제 시스템',
    company: '용인 세브란스 병원 (코리아 소프트)',
    period: '2022-03-01 ~ 2022-06-01(3개월)',
    formation: 'FrontEnd Developer / Web Publisher',
    skill: ['HTML', 'Css', 'Scss', 'JavaScript', 'VueJs'],
    desc: '용인 세브란스 병원 내에서 움직이는 LG CLOI로봇에 API를 연동하여 새로운 로봇을 등록하고 현재 상태와 위치 관리를 통합으로 할 수 있는 관제 시스템을 개발하였습니다. JavaScript를 이용하여 로봇이 보내준 병원의 Map데이터와 실제 우리가 가지고 있는 병원의 도면을 매핑 시키고 일치하지 않으면 수동으로 도면을 일치할 수 있는 화면을 구현하였습니다. 또한 매핑된 도면을 토대로 현재 로봇의 위치를 실시간(delay-5초)으로 받아 대시보드 지도에 표시하였습니다. 로봇에게 특정 작업들을 순서대로 할 수 있는 매크로 시스템을 화면내에 구현하여 백엔드에게 올바른 정보를 보내 주어 매크로 등록, 수정이 가능하도록 구현하였습니다. 로봇에게 받은 활댕 내역 데이터를 받아서 그래프로 표현하였습니다.',
    img: careerImg6,
  },
  {
    name: 'AIoT Station',
    company: '인천 교통 공사 (코리아 소프트)',
    period: '2021-12-01 ~ 2022-03-01 (3개월)',
    formation: 'FrontEnd Developer / Web Publisher',
    skill: ['HTML', 'Css', 'Scss', 'JavaScript'],
    desc: '인천 대학교 입구역 기준 역 주변 정보 및 내부 시설의 사용내역을 사용자에게 실시간으로 알려주는 WebView방식의 앱을 개발하였습니다. KaKao API를 활용하여 역 주변 정보 및 카테고리에 따른 데이터를 지도에 표시해 주고 라이브러리 내부의 CSS를 수정해 우리가 원하는 아이콘으로 변경하여 구현하였습니다. 화장실 센서 사용정보를 API로 수신하여 각 칸 별로 화장실 사용여부를 아이콘으로 표현해주고 ChartJs라이브러리를 활용하여 관리자 통합 시스템 내부에 통계자료를 시각화 하여 표현하였습니다.',
    img: careerImg7,
  },
  {
    name: '경남대학교 캡스톤 디자인 사이트',
    company: '경남대학교 (코리아 소프트)',
    period: '2022-03-01 ~ 2022-03-21(3주)',
    skill: ['HTML', 'Css', 'Scss', 'JavaScript', 'Jquery'],
    formation: 'Web Publisher',
    desc: '디자인 사이트 소개 페이지와 게시판을 퍼블리싱 하였습니다. 모바일, 태블릿, 데스크탑에 알맞은 형태의 반응형 웹으로 구현하였으며 Vanila JavaScript를 이용하여 무한 스크롤 UI를 구현하였으며 유투브를 IFRAME으로 불러와 디자인을 입히는 작업을 했습니다.',
    img: careerImg8,
  },
  {
    name: 'Gallery XR',
    company: '스타윙스 (코리아 소프트)',
    period: '2021-12-01 ~ 2022-02-01(3개월)',
    formation: 'FrontEnd Developer / Web Publisher',
    skill: ['HTML', 'Css', 'Scss', 'JavaScript', 'VueJs'],
    desc: '퍼블리셔에서 처음으로 프론트엔드로 전향하게 된 프로젝트 입니다. 서버에서 데이터를 받아 NFT그림을 경매하는 사이트를 구현하였습니다. vue-router와 vuex 라이브러리를 이용하여 화면 전환 및 상태관리를 용이하게 하였습니다. JWT토큰을 활용하여 백엔드와의 세션관리를 하였습니다. 서버에서 받은 데이터를 바탕으로 현재 경배 가격과 경매 종료일 등을 클라이언트에서 잘못된 정보가 없도록 표시하였습니다.',
    img: careerImg9,
  },
]
