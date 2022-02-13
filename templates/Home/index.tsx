import Header from '@components/header/Default'
import About from './About'
import Tech from './Tech'
import Values from './Values'
import Welcome from './Welcome'
import Method from './Method'

export const Home = () => {
  return (
    <main>
      <Header />
      <Welcome />
      <About />
      <Tech />
      <Values />
      <Method />
    </main>
  )
}

export default Home
