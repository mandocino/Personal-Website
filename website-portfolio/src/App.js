import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
