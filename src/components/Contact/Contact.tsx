import { siteConfig } from '../../config/site'
import styles from './Contact.module.css'

const socialLinks = Object.entries(siteConfig.socials).filter(
  ([, href]) => href.length > 0,
)

function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Contact</p>
        <h2 id="contact-title">{siteConfig.contact.heading}</h2>
        <p className={styles.intro}>{siteConfig.contact.description}</p>
      </div>

      <div className={styles.card}>
        <div className={styles.emailPanel}>
          <p className={styles.label}>Email</p>
          <a className={styles.email} href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <a className={styles.emailButton} href={`mailto:${siteConfig.email}`}>
            Send a message <span aria-hidden="true">↗</span>
          </a>
        </div>

        {socialLinks.length > 0 && (
          <div className={styles.socialPanel}>
            <p className={styles.label}>Elsewhere</p>
            <ul className={styles.socialLinks}>
              {socialLinks.map(([name, href]) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <span>{name}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
