import React from 'react';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoDocument } from 'react-icons/io5';

import style from './styles/Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className="main special">
      <header className="major">
        <h2>Contacts</h2>
        <p>E-mail: belalazamtrue@gmail.com</p>
      </header>
      <footer className={style.major}>
        <ul className={style.icons}>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/belalazam"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/belal-azam-1834b2213/"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href={{}}>
              <IoDocument />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
