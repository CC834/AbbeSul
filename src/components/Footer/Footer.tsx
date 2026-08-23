import { siteConfig } from '../../config/site'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <p>
        © {new Date().getFullYear()} {siteConfig.name}
      </p>

      <a href="#home">Back to top ↑</a>
    </footer>
  )
}

export default Footer
