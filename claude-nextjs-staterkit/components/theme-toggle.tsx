'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/app/providers'
import { Button } from './button'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    queueMicrotask(() => setMounted(true))
  }, [])

  // 마운트 전에는 렌더링하지 않음
  if (!mounted) {
    return <div className='w-20 h-10' />
  }

  return (
    <div className='flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1'>
      <Button
        size='sm'
        variant={theme === 'light' ? 'primary' : 'icon'}
        onClick={() => setTheme('light')}
        title='라이트 모드'
      >
        <Sun className='w-4 h-4' />
      </Button>

      <Button
        size='sm'
        variant={theme === 'dark' ? 'primary' : 'icon'}
        onClick={() => setTheme('dark')}
        title='다크 모드'
      >
        <Moon className='w-4 h-4' />
      </Button>
    </div>
  )
}
