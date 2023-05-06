import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="items">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>

        <div className="items">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Comapre</span>
          <span>Cookies</span>
        </div>
        <div className="items">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            minus. Quidem laboriosam iste maiores, soluta modi esse sequi
            corporis error quis sunt numquam ratione eum id temporibus qui quod
            dicta.
          </span>
        </div>
        <div className="items">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            minus. Quidem laboriosam iste maiores, soluta modi esse sequi
            corporis error quis sunt numquam ratione eum id temporibus qui quod
            dicta.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">AakarshStore</span>
          <span className="copyright">
            Ⓒ 2023. Copyright All Right Reserverd
          </span>
        </div>
        <div className="right">
          <img
            src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png"
            alt=""
            width="50%"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
