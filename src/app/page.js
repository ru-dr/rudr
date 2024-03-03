"use client"
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Lenis from '@studio-freight/lenis'

export default function Home() {

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <main className="sm:p-8 p-5 flex gap-y-5 flex-col">
      <Navbar />
      <Hero />
      <Socials />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}