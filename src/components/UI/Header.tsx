import React, { useContext } from 'react'
import Hamburger from '../utils/Hamburger'
import DarkModeBtn from '../utils/DarkModeBtn'
import { UiContext } from '@/store/ui-context'

interface headerComponet {
  className?: string
}

const Header = ({ className }: headerComponet) => {
  const uiCtx = useContext(UiContext)
  const clickHandler = () => {
    uiCtx.setNav()
  }

  return (
    <header className="sticky top-0 bg-light z-50 shadow-md dark:bg-slate-900 ">
      <div
        className={`w-inner flex justify-between bg-slate-60 items-center py-4  ${className}`}
      >
        <div>
          <h1 className="text-xl font-bold">🧑🏻‍💻 MIN&apos;s Portfolio</h1>
        </div>
        <div className="flex gap-6">
          <DarkModeBtn />
          <Hamburger onClick={clickHandler} />
        </div>
      </div>
    </header>
  )
}

export default Header
