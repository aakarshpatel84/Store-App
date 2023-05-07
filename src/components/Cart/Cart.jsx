import React from "react";
import "./Cart.scss";
import { DeleteForeverOutlined } from "@mui/icons-material";
function Cart() {
  const data = [
    {
      id: 1,
      img: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/j/g/xxl-mt417-metronaut-original-imagmgfw84qcaqfn.jpeg?q=70",
      title: "Simple Round Neck T-shirt",
      desc: "Simple Round Neck T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/m/7/i/-original-imaggvv8h3gunshp.jpeg?q=70",
      title: "Simple Round Neck T-shirt",
      desc: "Simple Round Neck T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteForeverOutlined className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">RESET CART</span>
    </div>
  );
}

export default Cart;
