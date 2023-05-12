import React from "react";
import "./FeturedProducts.scss";
import Card from "../Card/Card";
import { useFetch } from "../../hooks/useFetch";

function FeturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

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
        {error ? (
          "Somthing Went Wrong"
        ) : loading ? (
          <h1>Loading</h1>
        ) : (
          data?.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
}

export default FeturedProducts;
