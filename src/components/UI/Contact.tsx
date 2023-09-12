import React, { useState } from 'react'
import ContactAnimation from '../ContactAnimation'

const Contact = () => {
  const [contactIsOpen, setContactIsOpen] = useState(false)

  const contactToggleHandler = () => {
    setContactIsOpen((prevState) => !prevState)
  }

  return (
    <div className="fixed right-20 bottom-10 ">
      <div
        className={`absolute bottom-9 right-1/2 bg-primaryDark p-4 rounded-md shadow-xl text-dark origin-bottom-right duration-500 overflow-hidden  
        ${contactIsOpen ? 'w-[340px] h-[280px]' : 'w-0 h-0'}
        `}
      >
        <ul className="flex-col flex gap-4">
          <li>
            <a
              href=""
              className="text-lg font-bold py-2 px-10 bg-white rounded-lg block"
            >
              <span>연락처</span>
              <p>010-8787-4700</p>
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-lg font-bold py-2 px-10 bg-white rounded-lg block"
            >
              <span>이메일</span>
              <p>mypom11@gmail.com</p>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mypom11"
              target="_blank"
              className="text-lg font-bold py-2 px-10 bg-white rounded-lg block"
            >
              <span>깃허브</span>
              <p>https://github.com/mypom11</p>
            </a>
          </li>
        </ul>
      </div>

      <div
        className="w-20 h-20 bg-primaryDark rounded-full flex justify-center items-center cursor-pointer"
        onClick={contactToggleHandler}
      >
        <ContactAnimation />
      </div>
    </div>
  )
}

export default Contact
