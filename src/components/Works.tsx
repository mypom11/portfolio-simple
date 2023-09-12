import React, { useState } from 'react'
import InnerLayout from './UI/InnerLayout'
import { BarsDownIcon, BarsUpIcon } from './utils/Icons'
import { colorPallete, worksData } from '@/datas'
import { worksDataModel } from '../../global'

const AccordionLi: React.FC<{ item: worksDataModel }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHandler = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <li className="px-16 relative">
      <span className="absolute left-6 cursor-pointer" onClick={toggleHandler}>
        {isOpen ? <BarsUpIcon /> : <BarsDownIcon />}
      </span>
      <div
        className={`overflow-hidden duration-500 ease-in-out ${
          isOpen ? 'max-h-[400px]' : 'max-h-[60px]'
        } }`}
      >
        <div>
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold">{item.name}</h1>
          </div>
        </div>
        <p className="mb-2 font-semibold">
          {item.company}{' '}
          <span className="italic text-sm text-dark/50">{item.period}</span>
        </p>
        <ul className="flex gap-2 flex-wrap mb-4">
          {item.skill.map((skill, i) => (
            <li
              key={i}
              className="px-4 text-light font-medium "
              style={{ backgroundColor: `#${colorPallete[skill]}` }}
            >
              {skill}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">{item.formation}</h3>
        <p className="">{item.desc}</p>
      </div>
      <hr className="mt-8" />
    </li>
  )
}

const Works = () => {
  return (
    <InnerLayout title="회사 프로젝트">
      <ul className="flex-col flex gap-12">
        {worksData.map((item, index) => (
          <AccordionLi item={item} key={index} />
        ))}
      </ul>
    </InnerLayout>
  )
}

export default Works
