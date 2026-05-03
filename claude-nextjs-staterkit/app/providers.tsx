'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // 초기 테마 로드 및 DOM 적용
  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'light'
    const html = document.documentElement
    if (savedTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    // 상태 업데이트는 배치로 처리됨
    queueMicrotask(() => {
      setThemeState(savedTheme)
      setMounted(true)
    })
  }, [])

  // 테마 변경 시 DOM 업데이트 및 저장
  useEffect(() => {
    if (!mounted) return
    const html = document.documentElement
    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const setTheme = (newTheme: Theme) => {
    if (newTheme !== theme) {
      setThemeState(newTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
