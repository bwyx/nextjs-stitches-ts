import Head from 'next/head'

import useTheme from '~/hooks/useTheme'
import { attachMainLayout } from '~/layouts/Main.layout'
import { Container } from '~/components'

import type { Page } from '~/types'

function ToggleTheme() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button type="button" onClick={toggleTheme}>
      {theme}
    </button>
  )
}

const Home: Page = () => {
  return (
    <Container size="small">
      <Head>
        <title>Next.js + Stitches</title>
        <meta name="description" content="Next.js + Stitches Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Home
      <ToggleTheme />
    </Container>
  )
}

Home.layout = attachMainLayout()

export default Home
