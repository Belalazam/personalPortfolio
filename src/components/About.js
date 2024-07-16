import React from 'react';

import style from './styles/About.module.css';

export default function About() {
  return (
    <section id="about" className="main">
      <div className={style.spotlight}>
        <div className={style.content}>
          <header className="major">
            <h2>About</h2>
          </header>
          <p>
            "I am a highly skilled web developer with a strong focus on backend development. My expertise includes both frontend and backend technologies, with ReactJS as my go-to for frontend and Spring Boot for backend development. I am a proficient coder, holding a 5-star rating on CodeChef and a Specialist rating on Codeforces. I have completed numerous projects and hold a B.Tech degree in Computer Science from Lovely Professional University (2023)."
          </p>
        </div>
      </div>
    </section>
  );
}
