import React, { useState } from 'react'

type UiContextObj = {
  currentView: number
  moveNum: number
  setView: (id: number) => void
  moveTo: (id: number) => void
}

export const UiContext = React.createContext<UiContextObj>({
  currentView: 0,
  moveNum: 0,
  setView: (id) => {},
  moveTo: (id) => {},
})

const UiContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [currentNum, setCurrentNum] = useState<number>(0)
  const [willNum, setWillNum] = useState<number>(0)

  const setViewHandler = (id: number) => {
    setCurrentNum(id)
  }
  const moveToHandler = (id: number) => {
    setWillNum(id)
  }
  const contextValue: UiContextObj = {
    currentView: currentNum,
    moveNum: willNum,
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
