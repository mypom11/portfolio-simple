import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

interface InnerComponentProps {
  children: React.ReactNode
  title: string
  id: number
}

const InnerLayout = forwardRef<HTMLDivElement, InnerComponentProps>(
  ({ children, title, id }, ref) => {
    return (
      <section className="py-4 mb-10 md:mb-4" ref={ref}>
        <h1 className="text-xl font-bold mb-4 md:text-lg">{title}</h1>
        <motion.div
          className="h-2 bg-primary duration-1000 ease-in-out mb-12 dark:bg-primaryDark md:h-[1px] md:mb-4"
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
        />
        {children}
      </section>
    )
  }
)
InnerLayout.displayName = 'InnerLayout'

export default InnerLayout
