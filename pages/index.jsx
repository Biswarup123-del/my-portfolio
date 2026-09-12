import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Experience from '@/components/Exprience'
import Achievement from '@/components/Achievement'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience/>
        <Skills />
        <Projects />
       
        <Contact />
         <Achievement />
      </main>
      <Footer />
    </>
  )
}