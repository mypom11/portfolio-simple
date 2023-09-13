import React, { useState } from 'react'

type UiContextObj = {
  currentView: number
  moveNum: number
  isNav: boolean
  setNav: () => void
  setView: (id: number) => void
  moveTo: (id: number) => void
}

export const UiContext = React.createContext<UiContextObj>({
  currentView: 0,
  moveNum: 0,
  isNav: false,
  setNav: () => {},
  setView: (id) => {},
  moveTo: (id) => {},
})

const UiContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [currentNum, setCurrentNum] = useState<number>(0)
  const [willNum, setWillNum] = useState<number>(0)
  const [navShow, setNavShow] = useState<boolean>(false)

  const setViewHandler = (id: number) => {
    setCurrentNum(id)
  }
  const moveToHandler = (id: number) => {
    setWillNum(id)
  }
  const navHandler = () => {
    setNavShow((prevState) => !prevState)
  }
  const contextValue: UiContextObj = {
    currentView: currentNum,
    moveNum: willNum,
    isNav: navShow,
    setNav: navHandler,
    setView: setViewHandler,
    moveTo: moveToHandler,
  }

  return (
    <UiContext.Provider value={contextValue}>
      {props.children}
    </UiContext.Provider>
  )
}

export default UiContextProvider
