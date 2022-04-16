import React from 'react'
import { Header, Footer } from '~/components'

import { stack } from '~/styles/primitives'

const main = stack({
  dir: 'col',
  grow: true,
  css: {
    overflow: 'hidden'
  }
})

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className={main}>{children}</main>
      <Footer />
    </>
  )
}

export const attachMainLayout = () =>
  function WithMainLayout(page: React.ReactNode) {
    return <MainLayout>{page}</MainLayout>
  }

export default MainLayout
