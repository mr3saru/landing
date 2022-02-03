import Header from '@components/header/Default'
import About from './About'
import Welcome from './Welcome'

export const Home = () => {
  return (
    <main>
      <Header />
      <Welcome />
      <About />
    </main>
  )
}

export default Home
