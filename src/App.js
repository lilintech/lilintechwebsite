import Intro from "./components/Splash/Intro";
import ParticleBackground from "./components/Splash/ParticleBackground";
import Portfolio from "./components/Portfolio/Portfolio";
import { useState } from "react";


const App = () => {
  const [portfolio, setPortfolio] = useState(false);
  const openPortfolio = () => {
    setPortfolio(!portfolio);
  };

  return (
    <>
      <ParticleBackground />
      <Intro
        name="Lilian Wanjiku"
        designation="Developer & Ethical Hacker" 
        onExplore={openPortfolio}
      />
      {portfolio ? <Portfolio onClose={openPortfolio} /> : ""}
    </>
  );
};

export default App;
