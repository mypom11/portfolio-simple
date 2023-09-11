import projectImg1 from '@/assets/project/project1.png'
import projectImg2 from '@/assets/project/project2.png'
import projectImg3 from '@/assets/project/project3.png'
import projectImg4 from '@/assets/project/project4.png'
import projectImg5 from '@/assets/project/project5.png'
import projectImg6 from '@/assets/project/project6.png'

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
    demo: 'https://furniture-market.vercel.app/',
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
  {
    name: 'Portfolio 사이트 클론 코딩',
    skill: ['ReactJs', 'TypeScript', 'TailwindCss', 'Framer-motion', 'Vercel'],
    desc: 'TailwindCSS 공부를 위해 외국인 강좌를 클론 코딩하였습니다. JS로 강의하는 것을 TS로 변경하며 작업하였으며 Framer-motion라이브러리를 활용한 여러가지 애니매이션 제작 방법을 습득하고 클론 코딩에서 그치는 것이 아니라 제 것으로 만들기 위해 공부하였습니다.',
    git: 'https://github.com/mypom11/portfolio-clonecoding-next-framer-motion',
    learn: null,
    demo: 'https://portfolio-clonecoding-next-framer-motion.vercel.app/',
    img: projectImg3,
  },

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
