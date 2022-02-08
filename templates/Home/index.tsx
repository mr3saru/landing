import Header from '@components/header/Default'
import About from './About'
import Tech from './Tech'
import Values from './Values'
import Welcome from './Welcome'
import Method from './Method'
import Contact from './Contact'

export const Home = () => {
  return (
    <main>
      <Header />
      <Welcome />
      <About />
      <Tech />
      <Values />
      <Method />
      <Contact />
    </main>
  )
}

export default Home
