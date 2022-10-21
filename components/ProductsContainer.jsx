import React, { useState, useEffect, useTransition } from 'react';
import ProductCard from './ProductCard';
import img from '../public/images/abc.jpg';

const ProductsContainer = () => {
  const [Data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        console.log(result.products);
        setData(result.products);
      });

    console.log('5 sec hua');
  }, []);

  const DisplayProducts = Data.map((e) => (
    <ProductCard
      key={e.id}
      id={e.id}
      img={img}
      ProductName={e.title}
      ProductDescription={e.description}
      ProductPrice={'$' + e.price}
    />
  ));

  return (
    <div className="ProductsContainer">
      {IsLoading ? 'Loading....' : DisplayProducts}
    </div>
  );
};

export default ProductsContainer;
