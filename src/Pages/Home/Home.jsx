import Slider from "../../components/Slider/Slider";
import React from "react";
import "./Home.scss";
import FeturedProducts from "../../components/FeturedProducts/FeturedProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import Products from "../Products/Products";
function Home() {
  return (
    <div className="home">
      <Slider />
      {/* <Products /> */}
      <FeturedProducts type="fetured" />
      <Categories />
      <FeturedProducts type="tranding" />
      <Contact />
    </div>
  );
}

export default Home;
