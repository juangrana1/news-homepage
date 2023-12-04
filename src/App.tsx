import Background from "./layout/Background";
import Header from "./components/Header";
import Main from "./layout/Main";
import MainBox from "./components/MainBox";
import LateralBox from "./components/LateralBox";
import SmallBox from "./components/SmallBox";
import HamburgerMenu from "./components/HamburgerMenu";

import { useState, useEffect } from "react";

function App() {
  const mobileScreenWidth: number = 430;

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResizeWindow = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [window.innerWidth]);

  return (
    <div className="App">
      {screenWidth <= mobileScreenWidth && isMenuOpen && (
        <HamburgerMenu setIsMenuOpen={setIsMenuOpen} />
      )}
      <Background>
        <Header
          screenWidth={screenWidth}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <Main>
          <MainBox
            screenWidth={screenWidth}
            mobileScreenWidth={mobileScreenWidth}
          />
          <LateralBox />
          <SmallBox
            imgSrc="./assets/images/image-retro-pcs.jpg"
            imgAlt="Retro PCs"
            number="01"
            title="Reviving Retro PCs"
            description="What happens when old PCs are given modern upgrades?"
          />
          <SmallBox
            imgSrc="./assets/images/image-top-laptops.jpg"
            imgAlt="Top Laptops"
            number="02"
            title="Top 10 Laptops of 2022"
            description="Our best picks for various needs and budgets."
          />
          <SmallBox
            imgSrc="./assets/images/image-gaming-growth.jpg"
            imgAlt="Gaming Growth"
            number="03"
            title="The Growth of Gaming"
            description="How the pandemic has sparked fresh opportunities."
          />
        </Main>
      </Background>
    </div>
  );
}

export default App;
