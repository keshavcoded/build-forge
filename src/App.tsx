import "./App.css";
import About from "./components/About";
import Builds from "./components/Builds";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      <Hero />
      <Services />
      <Builds />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
