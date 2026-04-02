import ParticleBackground from './components/ParticleBackground'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Products from './sections/Products'
import Solutions from './sections/Solutions'
import Research from './sections/Research'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Products />
        <Solutions />
        <Research />
      </main>
      <Footer />
    </>
  )
}
