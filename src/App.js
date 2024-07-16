import React from 'react';

import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Achievements from './components/Achievements'; // import Achievements component

import 'normalize.css';
import './App.css';

export default function App() {
  const [scroll, setScroll] = React.useState(false);


  React.useEffect(() => {
    const handleScroll = () => {
      switch (true) {
        case window.innerWidth <= 1280 && window.innerWidth >= 736:
          setScroll(window.scrollY > 337);
          break;
        case window.innerWidth <= 736 && window.innerWidth >= 564:
          setScroll(window.scrollY > 311);
          break;
        case window.innerWidth <= 564 && window.innerWidth >= 480:
          setScroll(window.scrollY > 377);
          break;
        default:
          setScroll(window.scrollY > 477);
          break;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="wrapper">
      <header id="header">
        <h1>Belal Azam</h1>
        <p>Software Engineer</p>
      </header>

      <nav id="nav" className={scroll ? 'alt' : null}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div id="main">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements /> 
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
