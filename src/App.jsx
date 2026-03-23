import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./home/components/Home";
import Experiences from "./home/components/Experiences";
import Projects from "./home/components/Projects";
import Partners from "./home/components/Partners";
import Skills from "./home/components/Skills";
import Footer from "./home/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-bg dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
        <section id="home">
          <Home />
        </section>
        <section id="services">
          <Experiences />
        </section>
        <section id="works">
          <Projects />
        </section>
        <Partners />
        <section id="skills">
          <Skills />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
