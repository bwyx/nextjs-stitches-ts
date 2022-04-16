import Link from 'next/link'

import { container, text } from '~/styles/primitives'

const styles = {
  container: container({
    size: 'small'
  }),
  logo: text({
    weight: 'bold'
  })
}

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>Next.js + Stitches</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
