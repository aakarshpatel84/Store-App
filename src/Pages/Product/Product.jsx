import React, { useState } from "react";
import "./Product.scss";
import {
  AddShoppingCart,
  BalanceOutlined,
  Favorite,
} from "@mui/icons-material";
function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://img3.junaroad.com/uiproducts/18472537/zoom_1-1661148577.jpg",

    "https://img3.junaroad.com/uiproducts/18472537/zoom_2-1661148577.jpg",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg"></div>
        <img src={images[selectedImg]} alt="" width={"80%"} height={"70%"} />
      </div>
      <div className="right">
        <h1>Bishop Sleeved Cut Out Detailed Sheath Dress</h1>
        <span>$9.40</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quasi
          in asperiores voluptas doloremque ducimus, enim tempore, odit ad quas
          eos unde. Tempore qui atque recusandae quas voluptatum at
          consequuntur.
        </p>
        <div className="quantity">
          <button
            disabled={quantity <= 1}
            onClick={() => {
              setQuantity((prev) => prev - 1);
            }}
          >
            -
          </button>
          {quantity}
          <button
            disabled={quantity >= 5}
            onClick={() => {
              setQuantity((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <button className="add">
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <Favorite /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceOutlined /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Package contains: 1 dress</span>
          <span>Machine wash</span>
          <span>100% polyester</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
