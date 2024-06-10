import { Layout } from '../../components'
import { About, Hero, Projects, Skills, Works } from '../../sections'
import './home.css'

export const HomePage = () => {
  return (
    <Layout>
      <Hero />

      <Projects />

      <Works />

      <Skills />

      <About />
    </Layout>
  )
}
