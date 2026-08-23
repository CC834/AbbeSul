import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="container placeholder-section" id="projects">
          <h2>Projects</h2>
        </section>

        <section className="container placeholder-section" id="about">
          <h2>About</h2>
        </section>

        <section className="container placeholder-section" id="skills">
          <h2>Skills</h2>
        </section>

        <section className="container placeholder-section" id="contact">
          <h2>Contact</h2>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">Footer</div>
      </footer>
    </>
  )
}

export default App
