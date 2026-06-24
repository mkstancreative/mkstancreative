import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";
import "./App.css";

function App() {
  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <>
      <Preloader />
      <BackToTop />
      <Header />
      <main className="site-content" id="content">
        <Hero />
        <Services />
        <Portfolio />
        <Resume />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
