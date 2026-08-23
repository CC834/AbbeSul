import { siteConfig } from '../config/site'

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {siteConfig.name}
      </p>

      <a href="#home">Back to top ↑</a>
    </footer>
  )
}

export default Footer
