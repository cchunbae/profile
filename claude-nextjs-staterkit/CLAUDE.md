# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 명령어

```bash
npm run dev      # 개발 서버 실행 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 실행
```

## 프로젝트 아키텍처

### 기술 스택
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript** 5+
- **TailwindCSS v4** (PostCSS 기반, 별도 설정 파일 불필요)
- **lucide-react** (아이콘)
- **ESLint** 9

### 디렉토리 구조
- `app/` - Next.js App Router (page, layout, providers)
- `components/` - 재사용 가능한 UI 컴포넌트 (button, card, badge, header, theme-toggle)
- `lib/` - 유틸리티 함수 (cn() - Tailwind 클래스 병합)

### 핵심 패턴

#### 테마 관리 (라이트/다크 모드)
- `app/providers.tsx`의 `ThemeProvider`가 React Context를 통해 테마 상태 관리
- localStorage에 사용자 테마 선택 저장
- `useTheme()` hook으로 컴포넌트에서 접근

```typescript
const { theme, setTheme } = useTheme()
```

#### 클라이언트 컴포넌트
- 'use client' directive로 클라이언트 컴포넌트 표시 (ThemeProvider, Header, page 등)
- 상호작용이 필요한 컴포넌트는 클라이언트 컴포넌트로 구성

#### 클래스 명 병합
- `lib/utils.ts`의 `cn()` 함수 사용
- clsx와 tailwind-merge를 조합하여 동적 클래스와 Tailwind 충돌 안전 처리

```typescript
import { cn } from '@/lib/utils'
className={cn('base-class', isActive && 'active-class')}
```

## 컴포넌트 설계 원칙

- shadcn/ui 스타일 구조 따르기 (Button, Card, Badge 등)
- 반복 가능한 변형(variant) 및 크기(size) props 활용
- Tailwind의 dark: prefix로 다크 모드 지원
- clsx + tailwind-merge로 안전한 클래스 병합
