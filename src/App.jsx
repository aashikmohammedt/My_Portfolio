import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import InfoCards from "./components/InfoCards";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <InfoCards />
        <Skills />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;