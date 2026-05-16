import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Footer />
    </div>
  )
}

