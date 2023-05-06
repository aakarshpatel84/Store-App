import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={item.img1} className="mainImg" alt="" />
          <img src={item.img2} className="secondImg" alt="" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
