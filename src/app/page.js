'use client'
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";



export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="p-8 flex gap-y-5 flex-col">
      <Navbar />
      <Hero />
      <Socials />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}