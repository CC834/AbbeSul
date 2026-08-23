function Hero() {
  return (
    <section className="hero container" id="home">
      <p className="eyebrow">Hello, I&apos;m Your Name</p>

      <h1>
        I create digital experiences that feel{' '}
        <span className="gradient-text">simple and human.</span>
      </h1>

      <p className="hero-description">
        I&apos;m a developer focused on building responsive, accessible, and
        carefully designed web experiences.
      </p>

      <div className="hero-actions">
        <a className="primary-button" href="#projects">
          Explore my work
        </a>

        <a className="contact-link" href="#contact">
          Contact me
        </a>
      </div>
    </section>
  )
}

export default Hero
