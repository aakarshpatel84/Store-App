import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import { useFetch } from "../../hooks/useFetch";
function List(subCats, maxPrice, sort, catId) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}`
  );

  return (
    <div className="list">
      {loading
        ? "Loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}

export default List;
