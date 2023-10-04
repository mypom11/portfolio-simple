import React, { useState } from 'react'
import ContactAnimation from '../ContactAnimation'

const Contact = () => {
  const [contactIsOpen, setContactIsOpen] = useState(false)

  const contactToggleHandler = () => {
    setContactIsOpen((prevState) => !prevState)
  }

  return (
    <div className="fixed right-20 bottom-10 md:right-5">
      <div
        className={`absolute bottom-9 right-1/2 bg-primaryDark p-4 rounded-md shadow-xl text-dark origin-bottom-right duration-500 overflow-hidden dark:bg-primary md:p-1
        ${
          contactIsOpen
            ? 'w-[340px] h-[280px] md:w-[300px] md:h-[240px]'
            : 'w-0 h-0'
        }
        `}
      >
        <ul className="flex-col flex gap-4 md:gap-1">
          <li>
            <a
              href="tel:010-8787-4700"
              className="text-lg font-bold py-2 px-10 bg-white rounded-lg block dark:bg-dark dark:text-light md:px-5"
            >
              <span>연락처</span>
              <p>010-8787-4700</p>
            </a>
          </li>
          <li>
            <a
              href="mailto:mypom11@gmail.com"
              target="_top"
              className="text-lg font-bold py-2 px-10 bg-white rounded-lg block dark:bg-dark dark:text-light md:px-5"
            >
              <span>이메일</span>
              <p>mypom11@gmail.com</p>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mypom11"
              target="_blank"
              className="text-lg font-bold py-2 px-10 bg-white rounded-lg block dark:bg-dark dark:text-light md:px-5"
            >
              <span>깃허브</span>
              <p>https://github.com/mypom11</p>
            </a>
          </li>
        </ul>
      </div>

      <div
        className="w-20 h-20 bg-primaryDark rounded-full flex justify-center items-center cursor-pointer  dark:bg-primary md:w-16 md:h-16"
        onClick={contactToggleHandler}
      >
        <ContactAnimation />
      </div>
    </div>
  )
}

export default Contact
