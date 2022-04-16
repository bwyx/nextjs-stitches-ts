import Link from 'next/link'
import { Container } from '~/components'
import { styled } from '~/styles'

const Title = styled('a', {
  xColor: '$brand',
  fontWeight: '$bold'
})

const Header = () => {
  return (
    <header>
      <Container size="small">
        <Link href="/" passHref>
          <Title>Next.js + Stitches</Title>
        </Link>
      </Container>
    </header>
  )
}

export default Header
