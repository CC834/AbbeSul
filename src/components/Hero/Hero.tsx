import { siteConfig } from '../../config/site'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <h1>Hi there, I&apos;m {siteConfig.shortName} :-&#41;</h1>

        <p>
          I&apos;m a <mark className={styles.roleHighlight}>{siteConfig.title}</mark>{' '}
          based in {siteConfig.location}, with a passion for {siteConfig.focus}.
        </p>

        <p>
          {siteConfig.intro} Take a look through my{' '}
          <a className={styles.workHighlight} href="#projects">
            selected work
          </a>
          .
        </p>

        <a className={styles.helloButton} href={`mailto:${siteConfig.email}`}>
          Say hello!
        </a>
      </div>
    </section>
  )
}

export default Hero
