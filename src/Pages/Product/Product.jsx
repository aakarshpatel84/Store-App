import React, { useState } from "react";
import "./Product.scss";
import {
  AddShoppingCart,
  BalanceOutlined,
  Favorite,
} from "@mui/icons-material";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

function Product() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={() => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg"></div>
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data?.attributes[selectedImg]?.data?.attributes?.url
              }
              alt=""
              width={"80%"}
              height={"70%"}
            />
          </div>
          <div className="right">
            <h1>{data?.attributes.title}</h1>
            <span>${data?.attributes.price}</span>
            <p>{data?.attributes.desc}</p>
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
        </>
      )}
    </div>
  );
}

export default Product;
