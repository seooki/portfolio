import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import "../styles/SideContent.scss";

export const SideContent = () => {
  return (
    <div className="sideContent">
      <div className="footer">
        <div className="icons">
          <ul>
            <li>
              <a href="https://github.com/seooki" target="_blank">
                <FaGithub></FaGithub>
              </a>
            </li>
            <li>
              <a href="#">
                <SiTistory></SiTistory>
              </a>
            </li>
            <li>
              <a href="#">
                <FiInstagram></FiInstagram>
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
              d
            </li>
          </ul>
        </div>
        <span>
          © 2023. Yu Hee Seok.
          <br /> All rights reserved.
        </span>
      </div>
    </div>
  );
};
