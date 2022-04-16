import Head from 'next/head'

import { attachMainLayout } from '~/layouts/Main.layout'
import { container } from '~/styles/primitives'
import { Page } from '~/types'

const styles = {
  container: container({
    size: 'small'
  })
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
    </div>
  )
}

Home.layout = attachMainLayout()

export default Home
