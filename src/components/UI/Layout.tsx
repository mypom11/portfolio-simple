import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isNav, setIsNav] = useState(false)

  const navChangeHandler = () => {
    setIsNav((prevState) => !prevState)
  }

  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Aside isNav={isNav} />
      <Header onNavButton={navChangeHandler} />
      <main className="grow py-4 w-inner"> {children}</main>
      <Footer />
    </div>
  )
}

export default Layout
