import html from "../assets/images/html-5.png";
import react from "../assets/images/atom.png";
import css from "../assets/images/css-3.png";
import docker from "../assets/images/docker.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import java from "../assets/images/java.png";
import js from "../assets/images/js.png";
import mysql from "../assets/images/mysql.png";
import oracle from "../assets/images/oracle.png";
import sass from "../assets/images/sass.png";
import styledComponets from "../assets/images/styled-components.png";

import "../styles/skills.scss";
import { useState } from "react";

export const Skills = () => {
  const [click, setClick] = useState(false);

  const clickedSkill = (e) => {
    console.log(e);
  };

  return (
    <div className="container">
      <ul>
        <li onClick={clickedSkill}>
          <img
            className="skills-img"
            src={html}
            alt="html이미지"
            value="html"
          ></img>
        </li>
        <li>
          <img className="skills-img" src={css} alt="css 이미지"></img>
        </li>
        <li>
          <img className="skills-img" src={js} alt="js이미지"></img>
        </li>
        <li>
          <img className="skills-img" src={react} alt="react이미지"></img>
        </li>
        <li>
          <img className="skills-img" src={git} alt="git이미지"></img>
        </li>
        <li>
          <img className="skills-img" src={github} alt="github이미지"></img>
        </li>
        <li>
          <img className="skills-img" src={docker} alt="docker이미지"></img>
        </li>
        <li>
          <img className="skills-img" src={java} alt="java이미지"></img>
        </li>
        <li>
          <img className="skills-img" src={mysql} alt="mysql이미지"></img>
        </li>
        <li>
          <img className="skills-img" src={oracle} alt="oracle이미지"></img>
        </li>
        <li>
          <img className="skills-img" src={sass} alt="sass"></img>
        </li>
        <li>
          <img
            className="skills-img"
            src={styledComponets}
            alt="styled-components"
          ></img>
        </li>
      </ul>
    </div>
  );
};
