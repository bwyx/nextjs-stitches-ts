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

// eslint-disable-next-line react/display-name
export const attachMainLayout = () => (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>
}

export default MainLayout
