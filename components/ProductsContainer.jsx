import React, { useState, useEffect, useTransition } from "react";
import ProductCard from "./ProductCard";
import img from "../public/images/abc.jpg";

const ProductsContainer = (props) => {
  // const [Data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setData(result.data);
  //       setIsLoading(false);
  //     });
  // }, []);

  const DisplayProducts = props.Data.map((e) => (
    <ProductCard
      className="FadeIn"
      key={e.id}
      id={e.id}
      img={e.imagepath.replace("./public", "")}
      ProductName={e.Name}
      ProductDescription={e.Desc}
      ProductPrice={"$" + e.Price}
    />
  ));

  return (
    <>
      {IsLoading ? (
        <div className="spinner"></div>
      ) : (
        <div className="ProductsContainer">{DisplayProducts}</div>
      )}
    </>
  );
};

export default ProductsContainer;
