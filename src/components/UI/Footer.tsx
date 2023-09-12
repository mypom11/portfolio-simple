import React from 'react'
import { EmailIcon, GithubIcon, MobileIcon } from '../utils/Icons'
import { defaultComponent } from '../../../global'

const Footer = ({ className }: defaultComponent) => {
  return (
    <div
      className={`w-inner py-4 border-t-[1px] border-dark border-solid flex justify-between items-center dark:bg-slate-900 ${className}`}
    >
      <h4> {new Date().getFullYear()} &copy; All Right Reserved.</h4>
      <ul className="flex text-2xl gap-4">
        <li className="flex">
          <a href="tel:010-8787-4700">
            <MobileIcon />
          </a>
        </li>
        <li className="flex">
          <a href="mailto:mypom11@gmail.com" target="_top">
            <EmailIcon />
          </a>
        </li>
        <li className="flex">
          <a href="http://github.com/mypom11" target="_blank">
            <GithubIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
