import React from 'react'

const Career = () => {
  return (
    <ul className="px-14 flex-col flex gap-12 md:px-4">
      <li>
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold md:text-lg">
            삼성 에스원
            <span className="text-base text-dark/50 ml-2">(프리랜서)</span>
          </h1>
        </div>
        <p className="italic mb-2 md:text-sm">
          2022.11 ~ 2023.04
          <span className="ml-2 text-dark/50">(6개월)</span>
        </p>
        <h3 className="text-xl font-semibold mb-2 md:text-base">
          통합 SI 솔루션 구축 시스템 개발
        </h3>
        <p className="mb-8 md:text-sm md:mb-4">
          솔루션 신규 구축 작업에 프론트엔드 역할 겸 웹 파트 리더 역할을
          맡았습니다. 개발 기간 조율과 필요한 업무 배치 등을 하였으며 VueJs
          기반의 솔루션 관리 페이지를 제작하였습니다.
          <br /> GridStack라이브러리를 활용하여 대시보드를 사용자가 직접 커스텀
          할 수 있는 컴포넌트를 제작하였습니다.
          <br /> 차트 및 각종 정보를 컴포넌트 동적 컴포넌트를 활용하여 각각의
          위젯에 대한 설정 정보를 저장, 사용자화 된 대시보드를 생성할 수 있는
          기능을 구현하였습니다.
          <br />
          또한 사용자가 커스텀 할 수 있는 테이블을 제작하여 테이블에 적용할
          내용, 순서, 필터링 등의 기능을 구현하였습니다. 그 외에는 기본적인
          로그인과 조회에 관련된 관리자 페이지 개발을 하였습니다.
        </p>
        <hr />
      </li>
      <li>
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold md:text-lg">
            코리아 소프트
            <span className="text-base text-dark/50 ml-2">(정규직/대리)</span>
          </h1>
        </div>
        <p className="italic mb-2 md:text-sm">
          2021.09 ~ 2022.09
          <span className="ml-2 text-dark/50">(1년 1개월)</span>
        </p>
        <h3 className="text-xl font-semibold mb-2 md:text-base">
          퍼블리싱 및 프론트엔드 개발
        </h3>
        <p className="md:text-sm">
          회사 내의 모든 개발 과정의 퍼블리싱 또는 프론트엔드 과정에
          참여하였습니다.
          <br /> 프론트엔드는 저 혼자였기에 3명의 백엔드와 같은 기간에 여러개의
          프로젝트를 동시 진행하였습니다.
          <br /> 다양한 프로젝트를 접하며 클린 코딩까지는 못하지만 구현능력이
          크게 올랐으며 프로젝트 진행을 위해 혼자서 Vuejs를 공부하며 프로젝트를
          진행한 덕분에 혼자서 빠르게 언어를 습득하는 방법을 익혔습니다.
        </p>
      </li>
    </ul>
  )
}

export default Career
