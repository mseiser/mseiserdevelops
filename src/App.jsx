import Hero from "./sections/hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";


const App = () => {
  return (
    <main className="max-w-8xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </main>
  );
}


export default App
