import React, { useState } from 'react'

interface hamburgerModel {
  onClick: () => void
}

const Hamburger = ({ onClick }: hamburgerModel) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const clickHandler = () => {
    setIsNavOpen((prevState) => !prevState)
    onClick()
  }

  return (
    <button
      className=" flex flex-col items-center justify-center"
      onClick={clickHandler}
    >
      <span
        className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light  ${
          isNavOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
        } `}
      ></span>
      <span
        className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
          isNavOpen ? 'opacity-0' : 'opacity-100'
        } `}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light  ${
          isNavOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
        } `}
      ></span>
    </button>
  )
}

export default Hamburger
