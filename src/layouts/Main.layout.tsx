import { Header, Footer } from '~/components'
import { styled } from '~/styles'

const Main = styled('main', {
  display: 'flex',
  flexGrow: 1
})

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export const attachMainLayout = () =>
  function WithMainLayout(page: React.ReactNode) {
    return <MainLayout>{page}</MainLayout>
  }

export default MainLayout
