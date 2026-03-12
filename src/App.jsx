import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Coverage from './components/Coverage/Coverage'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CookieBanner from './components/CookieBanner/CookieBanner'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <hr className="section-divider" />
        <Services />
        <hr className="section-divider" />
        <Coverage />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Testimonials />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default App
