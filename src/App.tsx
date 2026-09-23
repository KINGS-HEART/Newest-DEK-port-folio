import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Stats from "./components/Stats/Stats";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import CustomCursor from "./components/ui/CustomCursor";
import SmoothScroll from "./components/ui/SmoothScroll";
import SectionReveal from "./components/ui/SectionReveal";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main id="main-content">
      <Navbar />
      <SmoothScroll />
      <CustomCursor />
      <Hero />
      <SectionReveal>
        <About />
      </SectionReveal>
      <Skills />
      <Stats />
      <SectionReveal>
        <Projects />
      </SectionReveal>
      <SectionReveal>
        <Experience />
      </SectionReveal>
      <SectionReveal>
        <Blog />
      </SectionReveal>
      <SectionReveal>
        <Contact />
      </SectionReveal>
      <Footer />
      
    </main>
  );
}

export default App;