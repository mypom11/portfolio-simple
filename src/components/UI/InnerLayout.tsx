import React from 'react'
import { motion } from 'framer-motion'

interface innerComponent {
  children: React.ReactNode
  title: string
}

const InnerLayout = ({ children, title }: innerComponent) => {
  return (
    <section className="py-4 mb-10">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <motion.div
        className="h-[1px] bg-dark/30 duration-1000 ease-in-out mb-12"
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
      />
      {children}
    </section>
  )
}

export default InnerLayout
