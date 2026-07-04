import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent relative">
      <Intro />
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

