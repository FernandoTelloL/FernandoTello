import { Layout } from '../../components'
import { About, Hero } from '../../sections'
import './home.css'

export const HomePage = () => {
  return (
    <Layout>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
    </Layout>
  )
}
