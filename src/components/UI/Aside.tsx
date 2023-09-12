import { UiContext } from '@/store/ui-context'
import { useContext, useEffect, useState } from 'react'

const nav = [
  {
    name: '프로필',
    id: 0,
  },
  {
    name: '기술 스택',
    id: 1,
  },
  {
    name: '개인 프로젝트',
    id: 2,
  },
  {
    name: '경력 사항',
    id: 3,
  },
  {
    name: '회사 프로젝트',
    id: 4,
  },

  {
    name: '교육 및 활동',
    id: 5,
  },
]

interface liComponent {
  name: string
  id: number
}

const AnimationLi = ({ name, id }: liComponent) => {
  const [isView, setIsView] = useState(false)
  const uiCtx = useContext(UiContext)

  useEffect(() => {
    if (uiCtx.currentView === id) {
      setIsView(true)
    } else {
      setIsView(false)
    }
    return
  }, [uiCtx.currentView, id])

  const navMoveHandler = () => {
    uiCtx.moveTo(id)
  }

  return (
    <li
      className="cursor-pointer li-ani text-xl md:text-center"
      onClick={navMoveHandler}
    >
      {name.split('').map((word, index) => (
        <span
          key={index}
          className={`inline-block ${word === ' ' ? 'pl-1' : ''} ${
            isView ? 'text-primary font-bold dark:text-primaryDark' : ''
          }`}
        >
          {word}
        </span>
      ))}
    </li>
  )
}

const Aside: React.FC<{ isNav: boolean }> = ({ isNav }) => {
  return (
    <aside
      className={`fixed w-1/4 right-0 top-14 z-40 bg-light duration-300 dark:bg-slate-800 lg:w-1/3 md:w-full ${
        isNav ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ height: 'calc(100vh - 50px)' }}
    >
      <nav className="relative p-12">
        <ul className="flex-col flex gap-8 text-lg font-medium">
          {nav.map((item) => (
            <AnimationLi key={item.id} name={item.name} id={item.id} />
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Aside
