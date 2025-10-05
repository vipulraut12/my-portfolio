import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Skills from "../components/sections/Skillsx";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Page Sections */}
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
