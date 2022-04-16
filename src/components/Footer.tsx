import { container } from '~/styles/primitives'

const styles = {
  container: container({
    size: 'small'
  })
}

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>Footer</div>
    </footer>
  )
}

export default Footer
