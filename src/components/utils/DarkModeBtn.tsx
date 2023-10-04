import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@/components/utils/Icons'
interface defaultComponent {
  className?: string
}
const DarkModeBtn = ({ className }: defaultComponent) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const changeThemeHandler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <button onClick={changeThemeHandler} className={className}>
      {theme === 'dark' ? <SunIcon className="" /> : <MoonIcon className="" />}
    </button>
  )
}

export default DarkModeBtn
