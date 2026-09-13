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
import "./responsive.css";

function App() {
  useEffect(() => {
    // The jQuery theme scripts used to initialise on `document.ready` /
    // `window.load`, both of which fire before React commits this tree. Every
    // selector matched nothing, so the preloader never lifted and the
    // carousels/grid initialised at zero width. Kick them off here instead,
    // once the markup is in the DOM.
    let done = false;
    const start = () => {
      if (done) return;
      done = true;
      if (typeof window.initTheme === "function") {
        window.initTheme();
      }
    };

    // Two frames give the browser a chance to lay the markup out before
    // plugins that measure widths (Owl Carousel, Isotope) read them...
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(start);
    });
    // ...but rAF is suspended in a background tab, which would otherwise leave
    // the page stuck behind the preloader until it is focused. The timer
    // guarantees initialisation either way; `initTheme` is idempotent.
    const timer = setTimeout(start, 300);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timer);
    };
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
