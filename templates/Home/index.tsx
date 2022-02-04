import Header from '@components/header/Default'
import About from './About'
import Tech from './Tech'
import Welcome from './Welcome'

export const Home = () => {
  return (
    <main>
      <Header />
      <Welcome />
      <About />
      <Tech />
    </main>
  )
}

export default Home
