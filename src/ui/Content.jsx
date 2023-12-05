import { AboutMe } from "../components/AboutMe";
import { Archiving } from "../components/Archiving";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import "../styles/Content.scss";

export const Content = (props) => {
  const Skilled = () => {
    if (props.clickNav === 1) {
      return <AboutMe />;
    } else if (props.clickNav === 2) {
      return <Skills />;
    } else if (props.clickNav === 3) {
      return <Archiving />;
    } else {
      return <Projects />;
    }
  };

  return (
    <div className="content">
      <Skilled />
    </div>
  );
};
