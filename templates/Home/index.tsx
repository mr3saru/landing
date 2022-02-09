import Header from '@components/header/Default'
import About from './About'
import Tech from './Tech'
import Values from './Values'
import Welcome from './Welcome'

export const Home = () => {
  return (
    <main>
      <Header />
      <Welcome />
      <About />
      <Tech />
      <Values />
      <h1>ok</h1>
    </main>
  )
}

export default Home
