import Slider from "../../components/Slider/Slider";
import React from "react";
import "./Home.scss";
import FeturedProducts from "../../components/FeturedProducts/FeturedProducts";
import Categories from "../../components/Categories/Categories";
function Home() {
  return (
    <div className="home">
      <Slider />
      <FeturedProducts type="fetured" />
      <Categories />
      <FeturedProducts type="tranding" />
    </div>
  );
}

export default Home;
