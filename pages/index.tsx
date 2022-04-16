import Head from 'next/head'

import useTheme from '~/hooks/useTheme'
import { attachMainLayout } from '~/layouts/Main.layout'
import { container } from '~/styles/primitives'

import type { Page } from '~/types'

const styles = {
  container: container({
    size: 'small'
  })
}

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
    <div className={styles.container}>
      <Head>
        <title>Next.js + Stitches</title>
        <meta name="description" content="Next.js + Stitches Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Home
      <ToggleTheme />
    </div>
  )
}

Home.layout = attachMainLayout()

export default Home
