import Hero from "./sections/hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}


export default App
