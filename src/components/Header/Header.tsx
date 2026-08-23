import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '../../config/site'
import Icon, { type IconName } from '../Icon/Icon'
import styles from './Header.module.css'

const socialLinks = Object.entries(siteConfig.socials).filter(
  ([, href]) => href.length > 0,
)

function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [linksOpen, setLinksOpen] = useState(false)
  const linksRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  useEffect(() => {
    const closeLinks = (event: MouseEvent) => {
      if (!linksRef.current?.contains(event.target as Node)) {
        setLinksOpen(false)
      }
    }

    document.addEventListener('mousedown', closeLinks)
    return () => document.removeEventListener('mousedown', closeLinks)
  }, [])

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerContent}>
        <nav className={styles.navigationShell} aria-label="Primary navigation">
          <ul className={styles.navigation}>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a className={styles.navLink} href={item.href}>
                  <Icon name={item.icon as IconName} />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}

            <li className={styles.linksMenu} ref={linksRef}>
              <button
                className={styles.linksTrigger}
                type="button"
                aria-haspopup="menu"
                aria-expanded={linksOpen}
                onClick={() => setLinksOpen((open) => !open)}
              >
                <Icon className={styles.chevronIcon} name="chevron" />
                <span>links</span>
              </button>

              {linksOpen && (
                <ul className={styles.linksDropdown} role="menu">
                  {socialLinks.map(([name, href]) => (
                    <li key={name}>
                      <a
                        className={styles.dropdownLink}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <button
          className={styles.themeToggle}
          type="button"
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          onClick={() => setDarkMode((isDark) => !isDark)}
        >
          <Icon name={darkMode ? 'moon' : 'sun'} />
        </button>
      </div>
    </header>
  )
}

export default Header
