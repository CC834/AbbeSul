import Header from './components/Header'
import Hero from './components/Hero'
import ContentSection from './components/ContentSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ContentSection id="projects" title="Projects" />
        <ContentSection id="experience" title="Experience" />
        <ContentSection id="contact" title="Contact" />
      </main>

      <Footer />
    </>
  )
}

export default App
