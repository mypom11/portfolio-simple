import React from 'react'
import InnerLayout from './UI/InnerLayout'
import ProfileAnimation from './ProfileAnimation'
import { DocIcon } from './utils/Icons'

const Profile = ({}) => {
  return (
    <InnerLayout title="프로필">
      <div className="relative py-1 my-10 items-center flex">
        <div className="absolute left-0 h-full w-2 bg-primary"></div>
        <h1 className="pl-4 text-4xl font-bold letter tracking-tight">
          민정기 <span className="text-2xl">(JEONGKI MIN)</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-20 items-center">
        <div className="text-xl px-4">
          <p className="break-words leading-relaxed mb-5">
            안녕하세요! 저는 2년차 프론트엔드 개발자
            <b className="text-primary"> 민정기</b> 입니다.
          </p>
          <p className="break-words leading-relaxed mb-5">
            저는 지난 1년동안 SI중소기업에서 일하며 VueJS를 이용하여 10개 이상의
            프로젝트를 진행하였습니다. 작은 회사였기에 혼자서 퍼블리싱부터
            프론트까지 프로젝트의 처음부터 끝까지 담당하여 진행하였으며 그
            과정에서
            <b className="text-primary">
              기획, 디자이너, 백엔드 개발자와의 원활한 협업과 소통
            </b>
            을 통해 빡빡한 일정 속에서도 충실히 맡은 바 임무를 해내었습니다.
          </p>
          <p className="break-words leading-relaxed mb-5">
            또한 6개월 동안 삼성 에스원에서 프리랜서 개발자로 일하며 PM과 개발
            일정을 조율하고 회의에 참여하여 아이디어를 내는 등 &nbsp;
            <b className="text-primary">
              웹 파트 리더로써 팀을 이끌어가는 훈련
            </b>
            도 하였습니다.
          </p>
          <p className="break-words leading-relaxed mb-5">
            저는 신입시절 퍼블리셔로 입사하였지만 저의 선택으로 프론트엔드로
            전향하여 스스로 공부하여 VueJs를 터득하였으며 현재는 React와 NextJS
            역시 익숙하게 사용할 수 있습니다.
          </p>
          <p className="break-words leading-relaxed mb-5">
            <b className="text-primary">
              저는 지속적인 공부를 통해 새로운 기술을 습득하는 것을 두려워하지
              않으며 도전하는 것을 즐깁니다.
            </b>
          </p>
          <button className=" flex gap-2 items py-4 px-12 rounded-md border-dark border-[1px] border-solid text-dark font-medium hover:bg-dark hover:text-light">
            <span>
              <DocIcon />
            </span>
            이력서 보기
          </button>
        </div>
        <div>
          <ProfileAnimation />
        </div>
      </div>
    </InnerLayout>
  )
}

export default Profile
