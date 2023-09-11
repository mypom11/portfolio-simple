import React from 'react'
import InnerLayout from './UI/InnerLayout'
import Image from 'next/image'
import { DemoIcon, GithubIcon } from './utils/Icons'
import { projects } from '@/datas'
import { colorPallete } from '@/datas'
import { projectComponent } from '../../global'
import { motion } from 'framer-motion'

const Project: React.FC<{ project: projectComponent }> = ({ project }) => {
  return (
    <motion.li
      className="border-dark border-[2px] boder-solid rounded-lg  flex flex-between gap-4 items-center shadow-xl"
      initial={{ y: 200 }}
      whileInView={{
        y: 0,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden rounded-lg">
        <Image src={project.img} alt={project.name} className="w-[50vw]" />
      </div>
      <div className="w-1/2 p-8 ">
        <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
        <ul className="flex gap-2 flex-wrap mb-8">
          {project.skill.map((skill, i) => (
            <li
              key={i}
              className="px-4 text-light font-medium "
              style={{ backgroundColor: `#${colorPallete[skill]}` }}
            >
              {skill}
            </li>
          ))}
        </ul>

        <p className="break-words font-medium mb-6">{project.desc}</p>
        <div className="flex gap-6">
          <a
            href={project.demo}
            target="_blank"
            className="flex items-center gap-1 px-8  rounded-md py-2 font-semibold text-light bg-dark hover:shadow-lg hover:bg-primary"
          >
            <DemoIcon />
            <span>Live Demo</span>
          </a>
          <a
            href={project.git}
            target="_blank"
            className="flex items-center gap-2 px-8 border-[1px] border-solid border-dark rounded-md py-2 font-semibold hover:bg-dark hover:text-light hover:shadow-lg"
          >
            <GithubIcon /> <span>Github</span>
          </a>
        </div>
      </div>
    </motion.li>
  )
}

const ProjectList = () => {
  return (
    <InnerLayout title="개인 프로젝트">
      <ul className="grid-cols-1 grid gap-8">
        {projects.map((item, index) => (
          <Project key={index} project={item} />
        ))}
      </ul>
    </InnerLayout>
  )
}

export default ProjectList
