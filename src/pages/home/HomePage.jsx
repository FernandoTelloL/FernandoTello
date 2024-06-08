import { Layout } from '../../components'
import { About, Hero, Projects, Works } from '../../sections'
import './home.css'

export const HomePage = () => {
  return (
    <Layout>
      <Hero />

      <About />

      <Projects />

      <Works />
    </Layout>
  )
}
