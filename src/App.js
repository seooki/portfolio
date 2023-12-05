import { useState } from "react";
import { Content } from "./ui/Content";
import { Header } from "./ui/Header";
import { Nav } from "./ui/Nav";
import { SideContent } from "./ui/SideContent";
import { Reset } from "styled-reset";

function App() {
  const [clickNav, setClickNav] = useState();

  const clickedNav = (param) => {
    setClickNav(param);
  };

  return (
    <>
      <Reset />
      <Header></Header>
      <Nav clickedNav={clickedNav}></Nav>
      <Content clickNav={clickNav} />
      <SideContent></SideContent>
    </>
  );
}

export default App;
