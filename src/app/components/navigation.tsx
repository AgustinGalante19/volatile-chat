'use client'

import {
  IconBrandGithub,
  IconDeviceDesktop,
  IconMoon,
  IconSun,
} from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type ThemeVariant = 'light' | 'dark' | 'system'

function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme: currentTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleChangeTheme = (newTheme: ThemeVariant) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const ThemeButton = ({
    theme,
    icon,
  }: {
    theme: ThemeVariant
    icon: React.ReactNode
  }) => {
    return (
      <button
        type="button"
        onClick={() => handleChangeTheme(theme)}
        role="radio"
        aria-checked
        className={twMerge(
          'p-1 hover:bg-opacity-80 rounded-md transition-colors',
          currentTheme === theme
            ? 'bg-neutral-100 dark:bg-opacity-10'
            : 'dark:hover:bg-neutral-600 hover:bg-gray-100'
        )}
      >
        {icon}
      </button>
    )
  }

  return (
    <header className="flex p-4 border-b border-sec-gray/20 dark:border-sec-gray">
      <div className="flex justify-between items-center w-full container mx-auto">
        <div>
          <Link href="/" className="flex items-center text-lg font-semibold">
            <Image
              src="/logo.png"
              width={20}
              height={20}
              alt="lightning logo"
            />
            <span className="max-sm:hidden">Volatile Chat</span>
          </Link>
        </div>
        <div className="flex  items-center  gap-2">
          <div className="flex px-4 border-r border-sec-gray/20 dark:border-sec-gray">
            <Link
              href="#repo"
              target="_blank"
              className="hover:text-sec-gray/70 dark:hover:text-gray-200/80 transition-colors"
            >
              <IconBrandGithub />
            </Link>
          </div>
          <div className="flex py-1 px-4 gap-1 border border-sec-gray/20  dark:border-sec-gray rounded-full">
            <ThemeButton icon={<IconSun size={20} />} theme="light" />
            <ThemeButton icon={<IconMoon size={20} />} theme="dark" />
            <ThemeButton
              icon={<IconDeviceDesktop size={20} />}
              theme="system"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
