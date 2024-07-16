import React from 'react';
import {
  SiFrappe,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiReact,
  SiAmazondynamodb,
  SiPostgresql,
  SiSpringboot,
  SiCodeforces
} from 'react-icons/si';
import { FaJava, FaPython, FaDocker } from 'react-icons/fa';
import { TbBrandCpp, TbSettingsAutomation } from "react-icons/tb";
import style from './styles/Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="main special">
      <header className="major">
        <h2>Skills</h2>
      </header>
      <ul className={style.skills}>
      <li className={style.style4}>
          <span>
            <FaPython />
          </span>
          <strong>Python</strong>
        </li>
        <li className={style.style5}>
          <span>
            <FaJava />
          </span>
          <strong>Java</strong>
        </li>
        <li className={style.style3}>
          <span>
            <SiSpringboot/>
          </span>
          <strong>Springboot</strong>
        </li>
        <li className={style.style1}>
          <span>
            <SiPostgresql />
          </span>
          <strong>PostgreSQL</strong>
        </li>
        <li className={style.style2}>
          <span>
            <SiAmazondynamodb />
          </span>
          <strong>DynamoDB</strong>
        </li>
      </ul>
      <ul className={style.skills}>
        <li className={style.style2}>
          <span>
            <SiHtml5 />
          </span>
          <strong>HTML5</strong>
        </li>
        <li className={style.style1}>
          <span>
            <SiCss3 />
          </span>
          <strong>CSS3</strong>
        </li>
        <li className={style.style3}>
          <span>
            <SiJavascript />
          </span>
          <strong>JavaScript</strong>
        </li>
        <li className={style.style5}>
          <span>
            <SiReact />
          </span>
          <strong>React</strong>
        </li>
        <li className={style.style4}>
          <span>
            <SiGit />
          </span>
          <strong>Git</strong>
        </li>
      </ul>
      <ul className={style.skills}>
        <li className={style.style4}>
          <span>
            <SiCodeforces />
          </span>
          <strong>Competitve Programmer</strong>
        </li>
        <li className={style.style5}>
          <span>
            <TbBrandCpp />
          </span>
          <strong>c++</strong>
        </li>
        <li className={style.style3}>
          <span>
            <FaDocker />
          </span>
          <strong>Docker</strong>
        </li>
        <li className={style.style1}>
          <span>
            <SiFrappe />
          </span>
          <strong>Low Code / No Code</strong>
        </li>
        <li className={style.style2}>
          <span>
            <TbSettingsAutomation />
          </span>
          <strong>Automation</strong>
        </li>
      </ul>
    </section>
  );
}
