import { StaticImageData } from 'next/image'

interface icon {
  className?: strng
}

interface defaultComponent {
  className?: string
}

interface skillComponent {
  name: string
  x: number
  y: number
  bg: string
  color?: string
  desc?: string
}

interface projectComponent {
  name: string
  skill: string[]
  desc: string
  git: string
  learn: string | null
  demo: string
  img: StaticImageData
}
