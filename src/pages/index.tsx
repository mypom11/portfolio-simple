import Career from '@/components/Career'
import Education from '@/components/Education'
import Profile from '@/components/Profile'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--roboto',
})

export default function Home() {
  return (
    <>
      <p className="italic text-right text-dark/30">Last updated: 2323.09.12</p>
      <Profile />
      <Skills />
      <Project />
      <Career />
      <Works />
      <Education />
    </>
  )
}
