import type { NextPage } from 'next'
import Home from '@templates/Home'

const Index: NextPage = () => {
  return <Home />
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
export default Index
