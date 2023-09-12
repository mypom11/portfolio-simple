import Career from '@/components/Career'
import Education from '@/components/Education'
import Profile from '@/components/Profile'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import InnerLayout from '@/components/UI/InnerLayout'
import Works from '@/components/Works'
import { UiContext } from '@/store/ui-context'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import { useRef, RefObject, useEffect, useState, useContext } from 'react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--roboto',
})

const navData = [
  {
    name: '프로필',
    component: <Profile />,
  },
  {
    name: '기술 스택',
    component: <Skills />,
  },
  {
    name: '개인 프로젝트',
    component: <Project />,
  },
  {
    name: '경력 사항',
    component: <Career />,
  },
  {
    name: '회사 프로젝트',
    component: <Works />,
  },
  {
    name: '교육 및 활동',
    component: <Education />,
  },
]

export default function Home() {
  const refGroup: RefObject<HTMLDivElement[] | null[]> = useRef([])
  const [prevMoveNum, setPrevMoveNum] = useState(0)
  const uiCtx = useContext(UiContext)

  useEffect(() => {
    const onScrollFn = () => {
      const windowHeight = window.innerHeight
      for (let i = 0; i < refGroup.current!.length; i++) {
        const ref = refGroup.current![i]
        if (ref) {
          const rect = ref.getBoundingClientRect()
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            uiCtx.setView(i)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', onScrollFn)
    return () => window.removeEventListener('scroll', onScrollFn)
  }, [uiCtx])

  useEffect(() => {
    if (refGroup.current && uiCtx.moveNum !== prevMoveNum) {
      console.log(refGroup.current[uiCtx.moveNum])
      window.scrollTo({
        left: 0,
        top: refGroup.current[uiCtx.moveNum]?.offsetTop || 0,
        behavior: 'smooth',
      })
      setPrevMoveNum(uiCtx.moveNum)
    }
  }, [uiCtx.moveNum, refGroup, prevMoveNum])

  return (
    <>
      <Head>
        <meta
          name="description"
          content="지속적인 공부를 통해 새로운 기술을 습득하는 것을 두려워하지 않으며 도전하는 것을 즐기는 프론트엔드 개발자 민정기입니다."
        />
        <meta name="author" content="민정기" />
        <meta
          name="keywords"
          content="프론트엔드, 개발자, 포트폴리오, Frontend, developer, portfolio, React, Next,Vue ,javascript"
        />
        <meta property="og:title" content="프론트엔드 포트폴리오 민정기" />
        <meta
          property="og:description"
          content="지속적인 공부를 통해 새로운 기술을 습득하는 것을 두려워하지 않으며 도전하는 것을 즐기는 프론트엔드 개발자 민정기입니다."
        />
        <meta
          property="og:image"
          content="https://asset.cloudinary.com/dvhdpvwk6/55f0a34433e2adab9f1b38ebca5996aa"
        />
        <meta property="og:url" content="https://example.com/page-url" />
        <meta
          name="twitter:card"
          content="프론트엔드 개발자 포트폴리오입니다."
        />
        <meta name="twitter:title" content="프론트엔드 개발자 민정기" />
        <meta
          name="twitter:description"
          content="지속적인 공부를 통해 새로운 기술을 습득하는 것을 두려워하지 않으며 도전하는 것을 즐기는 프론트엔드 개발자 민정기입니다."
        />
        <meta
          name="twitter:image"
          content="https://asset.cloudinary.com/dvhdpvwk6/55f0a34433e2adab9f1b38ebca5996aa"
        />

        <link
          rel="canonical"
          href="https://asset.cloudinary.com/dvhdpvwk6/55f0a34433e2adab9f1b38ebca5996aa"
        />

        <title>민정기 포트폴리오</title>
      </Head>
      <p className="italic text-right text-dark/30 dark:text-light/30">
        Last updated: 2323.09.12
      </p>

      {navData.map((nav, index) => (
        <InnerLayout
          key={index}
          id={index}
          title={nav.name}
          ref={(component) => (refGroup.current![index] = component)}
        >
          {nav.component}
        </InnerLayout>
      ))}
    </>
  )
}
