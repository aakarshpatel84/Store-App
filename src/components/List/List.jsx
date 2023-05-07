import React from "react";
import "./List.scss";
import Card from "../Card/Card";
function List() {
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
      img1: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/m/7/i/-original-imaggvv8h3gunshp.jpeg?q=70",
      img2: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/7/s/u/-original-imaggvv8zsqqemfn.jpeg?q=70",
      title: "Simple Round Neck T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img1: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/p/u/d/s-mt416-metronaut-original-imagmj8nwveucycj.jpeg?q=70",
      img2: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/t/i/y/s-mt416-metronaut-original-imagmj8ndywbdhzj.jpeg?q=70",
      title: "Simple Round Neck T-shirt",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img1: "https://rukminim1.flixcart.com/image/612/612/l4ln8nk0/t-shirt/h/2/b/-original-imagfgjfbcgtbtck.jpeg?q=70",
      img2: "https://rukminim1.flixcart.com/image/612/612/l4ln8nk0/t-shirt/4/1/g/-original-imagfgjfwvqxgfx6.jpeg?q=70",
      title: "Simple Round Neck T-shirt",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
