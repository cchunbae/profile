import { Header } from '@/components/header'
import { Button } from '@/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card'
import { Badge } from '@/components/badge'
import { ArrowRight, Code2, Palette, Zap } from 'lucide-react'

const features = [
  {
    title: 'Next.js 16 App Router',
    description: '최신 Next.js 버전의 App Router를 사용하여 빠른 성능과 최적화된 개발 경험을 제공합니다.',
    icon: Zap,
  },
  {
    title: 'TypeScript',
    description: '타입 안전성을 통해 개발 중 버그를 조기에 발견하고 코드 품질을 향상시킵니다.',
    icon: Code2,
  },
  {
    title: 'TailwindCSS v4',
    description: '최신 TailwindCSS로 빠르고 효율적인 스타일링이 가능합니다. 별도의 설정 파일이 필요하지 않습니다.',
    icon: Palette,
  },
]

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>
          <div className='text-center'>
            <Badge variant='default'>새로운 스타터 킷</Badge>
            <h1 className='mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'>
              Next.js 개발을
              <br />
              빠르게 시작하세요
            </h1>
            <p className='mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Next.js v16, TypeScript, TailwindCSS v4, shadcn/ui, 그리고 lucide-react로 구성된 완벽한 스타터 킷으로 프로젝트를 시작하세요.
            </p>
            <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
              <Button size='lg' variant='primary'>
                시작하기
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
              <Button size='lg' variant='outline'>
                문서 보기
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='w-full bg-gray-50 dark:bg-gray-900/50 py-20 sm:py-32'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold'>주요 기능</h2>
              <p className='mt-4 text-lg text-gray-600 dark:text-gray-400'>현대적인 웹 개발을 위한 모든 것이 준비되어 있습니다.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title}>
                    <CardHeader>
                      <div className='flex items-center gap-3 mb-4'>
                        <div className='w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center'>
                          <Icon className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                        </div>
                      </div>
                      <CardTitle className='text-xl'>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>
          <Card className='bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800'>
            <CardContent className='py-12 text-center'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4'>지금 바로 시작하세요</h2>
              <p className='text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto'>
                이 스타터 킷은 프로덕션 준비가 완료되어 있으며 언제든지 확장할 수 있습니다.
              </p>
              <Button size='lg' variant='primary'>
                프로젝트 클론하기
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className='w-full border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='text-center text-sm text-gray-600 dark:text-gray-400'>
            <p>&copy; {new Date().getFullYear()} Next.js Starter Kit. MIT 라이센스로 공개되었습니다.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
