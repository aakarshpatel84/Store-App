import React from "react";
import "./FeturedProducts.scss";
import Card from "../Card/Card";
function FeturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img1: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/j/g/xxl-mt417-metronaut-original-imagmgfw84qcaqfn.jpeg?q=70",
      img2: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/c/j/s/xxl-mt417-metronaut-original-imagmgfwdxdn4crk.jpeg?q=70",
      title: "Simple Round Neck T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img1: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/j/g/xxl-mt417-metronaut-original-imagmgfw84qcaqfn.jpeg?q=70",
      img2: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/c/j/s/xxl-mt417-metronaut-original-imagmgfwdxdn4crk.jpeg?q=70",
      title: "Simple Round Neck T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img1: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/j/g/xxl-mt417-metronaut-original-imagmgfw84qcaqfn.jpeg?q=70",
      img2: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/c/j/s/xxl-mt417-metronaut-original-imagmgfwdxdn4crk.jpeg?q=70",
      title: "Simple Round Neck T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img1: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/j/g/xxl-mt417-metronaut-original-imagmgfw84qcaqfn.jpeg?q=70",
      img2: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/c/j/s/xxl-mt417-metronaut-original-imagmgfwdxdn4crk.jpeg?q=70",
      title: "Simple Round Neck T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="feturedProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio fugiat
          voluptas beatae delectus facilis consequuntur assumenda cumque atque,
          sunt id et voluptate officia! Earum nulla explicabo facere enim
          aspernatur aut modi accusamus deleniti optio cum, autem corrupti
          expedita, quidem nostrum est, distinctio mollitia inventore. Impedit
          soluta, accusantium magni aliquam ratione quis sapiente maiores aut
          neque nostrum debitis. Dolorum veritatis nesciunt dicta nulla
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeturedProducts;
