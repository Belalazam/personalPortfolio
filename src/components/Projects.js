import React from 'react';


import style from './styles/Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="main special">
      <header className="major">
        <h2>Projects</h2>
      </header>
      <ul className={style.features}>
        <li>
          <div className={style.image}>
            <img src={`${process.env.PUBLIC_URL}/graph_game.png`}  style={{height:'300px'}} alt="chatapp" />
          </div>
          <h3>Graph Game</h3>
          <p>
          The game consists of two players: the challenger and the creator. The creator constructs a graph, and the challenger completes the graph without repeating any line mappings.
          </p>
          <footer className={style.footerImage}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://path-forge-client.vercel.app/"
                >
                  Live Demo
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Belalazam/PATHFORGE"
                >
                  Github
                </a>
              </li>
            </ul>
          </footer>
        </li>
        <li>
          <div className={style.image}>
            <img src={`${process.env.PUBLIC_URL}/word_density_finder.png`} style={{height:'300px'}}  alt="word_density_finder" />
          </div>
          <h3>Word Density Finder</h3>
          <p>
          Searching a PDF is easy, but what if you need to find the page that contains the maximum to minimum number of words or combinations or synonyms? (Chrome Extension)
          </p>
          <footer className={style.footerImage}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="/word_density_finder.zip" download 
                >
                  Live Demo
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Belalazam/wordDensityFinder"
                >
                  Github
                </a>
              </li>
            </ul>
          </footer>
        </li>
        <li>
          <div className={style.image}>
            <img src="https://t4.ftcdn.net/jpg/01/71/45/69/360_F_171456960_4w6b2j7eQNTkX3AUPZ4PI4DhMCHB7oe2.jpg" style={{height:'300px'}} alt="teachers" />
          </div>
          <h3>Teacher Recommendation</h3>
          <p>
          Find the perfect teacher for yourself based on various parameters such as language, strictness, homework assignments, popularity, examples, and more.
          </p>
          <footer className={style.footerImage}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Belalazam/Teacher-Recommended-System"
                >
                  Github
                </a>
              </li>
            </ul>
          </footer>
        </li>
      </ul>
    </section>
  );
}
