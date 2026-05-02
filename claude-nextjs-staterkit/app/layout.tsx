import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from './providers'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next.js Starter Kit',
  description: 'Next.js v15, TypeScript, TailwindCSS v4, shadcn/ui, lucide-react로 구성된 스타터 킷',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='ko'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
