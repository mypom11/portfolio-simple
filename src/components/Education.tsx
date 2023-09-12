import React from 'react'
import InnerLayout from './UI/InnerLayout'

const Education = () => {
  return (
    <InnerLayout title="교육 및 활동">
      <ul className="px-14 flex-col flex gap-12">
        <li>
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold">그린 컴퓨터 아카데미</h1>
          </div>
          <p className="italic mb-2">
            2021.2 ~ 2021.08
            <span className="ml-2 text-dark/50">(6개월)</span>
          </p>
          <h3 className="text-xl font-semibold mb-2">
            [플립드러닝] 스마트웹 & 컨텐츠개발(프론트엔드) 양성과정
          </h3>
          <p className="mb-8">
            웹사이트의 처음 기획부터 디자인, 개발까지 배우는 과정이었습니다.
            웹사이트 기획을 위한 브랜드 아이덴티티 분석 및 페르소나를 작성하여
            웹사이트를 기획, 포토샵과 XD를 활용하여 디자인하는 방법을
            배웠습니다. HTML,CSS,JaScript,Jqurey의 기본과 반응형 웹사이트 및
            기본 웹사이트 제작 하는 방법을 배웠습니다. 추가적으로 nodeJs와
            socket.io를 사용하여 채팅사이트 제작, php를 이용한 게시판 제작 등을
            배웠으며 많은 사이트들을 클론코딩 해보며 코딩의 기본을 다졌습니다.
          </p>
          <hr />
        </li>
        <li>
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold">신세계 컴퓨터 학원</h1>
          </div>
          <p className="italic mb-2">
            2020.12 ~ 2021.02
            <span className="ml-2 text-dark/50">(3개월)</span>
          </p>
          <h3 className="text-xl font-semibold mb-2">
            영상 편집 양성과정[포토샵/일러스트/프리미어]
          </h3>
          <p className="mb-8">
            포토샵과 일러스트의 기본 과정을 배우며 편집디자인과 웹디자인에 대한
            기초를 배웠습니다. 프리미어 프로와 파이널컷을 활용하여 영상을 제작
            편집하는 과정을 배웠습니다.
          </p>
          <hr />
        </li>
      </ul>
    </InnerLayout>
  )
}

export default Education
