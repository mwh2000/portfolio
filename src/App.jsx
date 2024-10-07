import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./home/components/Home";
import Experiences from "./home/components/Experiences";
import Projects from "./home/components/Projects";
import Skills from "./home/components/Skills";
import Footer from "./home/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-bg">
        <Home />
        <Experiences />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
