import React from 'react'
import InnerLayout from './UI/InnerLayout'
import { motion } from 'framer-motion'
import { skillStacks } from '@/datas/index'
import { skillComponent } from '../../global'

const Skill: React.FC<{ skill: skillComponent }> = ({ skill }) => {
  const viewData = { x: `${skill.x}vw`, y: `${skill.y}vw` }
  return (
    <>
      <motion.div
        className={`flex items-center justify-center rounded-full font-semibold  text-light py-3 px-3 shadow-dark cursor-pointer absolute group hover:z-10 md:p-1 md:text-sm md:hidden`}
        style={{ backgroundColor: `#${skill.bg}` }}
        initial={{ x: 0, y: 0 }}
        whileInView={viewData}
        transition={{ duration: 1.5 }}
      >
        {skill.name}
        {skill.desc && (
          <div>
            <div
              className=" absolute top-1/2 left-1/2 rounded-lg origin-top-left  w-0 h-0 overflow-hidden group-hover:w-80 group-hover:h-fit group-hover:p-4 md:hidden"
              style={{ backgroundColor: `#${skill.bg}` }}
            >
              <p className="">{skill.desc}</p>
            </div>
            <div className="absolute right-0 top-0 md:hidden">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500"></span>
              </span>
            </div>
          </div>
        )}
      </motion.div>
      <div
        className="px-4 text-light font-medium hidden md:block"
        style={{ backgroundColor: `#${skill.bg}` }}
      >
        {skill.name}
      </div>
    </>
  )
}

const Skills = () => {
  return (
    <div className="py-10">
      <div className="w-full h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark xl:h-[30vh] md:h-auto md:flex md:flex-wrap md:gap-2 ">
        {skillStacks.map((item) => (
          <Skill key={item.name} skill={item} />
        ))}
      </div>
    </div>
  )
}

export default Skills
