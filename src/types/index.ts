import type { NextPage } from 'next'

export type Page = NextPage & {
  layout?: (page: React.ReactNode) => JSX.Element
}

declare global {
  interface Window {
    __theme?: string
    __onThemeChange?: (theme: string) => void
    __setPreferredTheme: (theme: string) => void
  }
}
