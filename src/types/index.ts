import type { NextPage } from 'next'

export type Page = NextPage & {
  layout?: (page: React.ReactNode) => JSX.Element
}
