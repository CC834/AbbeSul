import { siteConfig } from '../config/site'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi there, I&apos;m {siteConfig.shortName} :-&#41;</h1>

        <p>
          I&apos;m a <mark className="role-highlight">{siteConfig.title}</mark> based
          in {siteConfig.location}, with a passion for {siteConfig.focus}.
        </p>

        <p>
          {siteConfig.intro} Take a look through my{' '}
          <a className="work-highlight" href="#projects">
            selected work
          </a>
          .
        </p>

        <a className="hello-button" href={`mailto:${siteConfig.email}`}>
          Say hello!
        </a>
      </div>
    </section>
  )
}

export default Hero
