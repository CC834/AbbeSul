import ContentSection from './components/ContentSection/ContentSection'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <ContentSection id="cv" title="CV" />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
