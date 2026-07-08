import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBanner from "./components/AboutBanner";
import Services from "./components/Services";
import InfoCards from "./components/InfoCards";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutBanner />
        <Services />
        <InfoCards />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;