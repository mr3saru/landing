import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'
import About from './About'
import Tech from './Tech'
import Values from './Values'
import Welcome from './Welcome'
import Method from './Method'
import Industries from './Industries'
import Contact from './Contact'

export const Home = () => {
  return (
    <main id="home">
      <Header isFixed />
      <Welcome />
      <About />
      <Tech />
      <Values />
      <Method />
      <Industries />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
