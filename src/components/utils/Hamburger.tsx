import { UiContext } from '@/store/ui-context'
import React, { useContext, useState } from 'react'

interface hamburgerModel {
  onClick: () => void
}

const Hamburger = ({ onClick }: hamburgerModel) => {
  const uiCtx = useContext(UiContext)

  const clickHandler = () => {
    uiCtx.setNav()
  }

  return (
    <button
      className=" flex flex-col items-center justify-center"
      onClick={clickHandler}
    >
      <span
        className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light  ${
          uiCtx.isNav ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
        } `}
      ></span>
      <span
        className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
          uiCtx.isNav ? 'opacity-0' : 'opacity-100'
        } `}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light  ${
          uiCtx.isNav ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
        } `}
      ></span>
    </button>
  )
}

export default Hamburger
