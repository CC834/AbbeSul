import ContentSection from './components/ContentSection/ContentSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

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
