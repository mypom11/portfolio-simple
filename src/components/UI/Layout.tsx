import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'
import Contact from './Contact'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Aside />
      <Header />
      <main className="grow py-4 w-inner"> {children}</main>
      <Contact />
      <Footer />
    </div>
  )
}

export default Layout
