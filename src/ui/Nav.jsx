import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { BiSolidArchive } from "react-icons/bi";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import "../styles/Nav.scss";
import { useEffect } from "react";

export const Nav = (props) => {
  const clickNav = (e) => {
    props.clickedNav(e.target.value);
  };

  useEffect(() => {
    props.clickedNav(1);
  }, []);

  return (
    <ul className="nav">
      <li value="1" onClick={clickNav}>
        <FcAbout size="20" className="nav-icons"></FcAbout>
        About me
      </li>
      <li value="2" onClick={clickNav}>
        <GiSkills size="20" className="nav-icons"></GiSkills>
        Skills
      </li>
      <li value="3" onClick={clickNav}>
        <BiSolidArchive size="20" className="nav-icons"></BiSolidArchive>
        Archiving
      </li>
      <li value="4" onClick={clickNav}>
        <PiProjectorScreenChartFill
          size="20"
          className="nav-icons"
        ></PiProjectorScreenChartFill>
        Projects
      </li>
    </ul>
  );
};
