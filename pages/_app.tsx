import { globalStyles } from '~/styles/globals.style'

import type { AppProps } from 'next/app'
import type { Page } from '~/types'

type AppLayout = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: AppLayout) {
  globalStyles()
  const attachLayout = Component.layout ?? ((page: React.ReactNode) => page)

  return attachLayout(<Component {...pageProps} />)
}

export default MyApp
