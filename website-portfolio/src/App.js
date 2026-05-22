import React, { useState } from 'react';

import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useScrollReveal();

  return (
    <div className={`app ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main>
        <Welcome />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
