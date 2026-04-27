import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Career from '@/components/Career'
import WorkScenes from '@/components/WorkScenes'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Career />
      <WorkScenes />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}