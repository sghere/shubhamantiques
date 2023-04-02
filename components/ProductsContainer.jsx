import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import img from "../public/images/abc.jpg";

const ProductsContainer = ({ Data1 = [], searchKeyword = "" }) => {
  const [Data, setData] = useState(Data1);
  const [ShowData, setShowData] = useState(Data);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/product")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) setData(result.data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setShowData(Data);
  }, [Data]);

  useEffect(() => {
    const Keyword = searchKeyword.toLowerCase();
    setShowData((Data) => {
      Data.filter((e) => {
        if (
          e.Name.toLowerCase().includes(Keyword) ||
          e.Desc.toLowerCase().includes(Keyword)
        )
          return e;
      });
    });
  }, [searchKeyword]);

  const DisplayProducts = ShowData.map((e) => (
    <ProductCard
      className="FadeIn"
      key={e.id}
      id={e.id}
      img={e.imagepath?.replace("./public", "")}
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
