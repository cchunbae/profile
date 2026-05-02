'use client'

import Link from 'next/link'
import { Button } from './button'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className='border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>N</span>
            </div>
            <span className='font-bold text-lg text-gray-900 dark:text-white'>Next.js Starter</span>
          </Link>

          <nav className='hidden md:flex gap-8'>
            <Link href='/' className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium'>
              홈
            </Link>
            <Link href='#' className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium'>
              문서
            </Link>
            <Link href='#' className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium'>
              예제
            </Link>
          </nav>

          <div className='flex items-center gap-4'>
            <ThemeToggle />
            <Button size='sm' variant='outline'>
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
