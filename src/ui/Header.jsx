import { MdPages } from "react-icons/md";

import "../styles/Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <MdPages className="header-icons" size="34"></MdPages>
      <p>YU HEE SEOK`s PORTFOLIO</p>
    </div>
  );
};
