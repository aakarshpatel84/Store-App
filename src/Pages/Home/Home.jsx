import Slider from "../../components/Slider/Slider";
import React from "react";
import "./Home.scss";
import FeturedProducts from "../../components/FeturedProducts/FeturedProducts";
function Home() {
  return (
    <div className="home">
      <Slider />
      <FeturedProducts type="fetured" />
      <FeturedProducts type="tranding" />
    </div>
  );
}

export default Home;
