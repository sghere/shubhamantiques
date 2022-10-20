import Image from 'next/image';
import React from 'react';
import img from '../public/images/abc.jpg';
import styles from './ProductCard.module.css';

const ProductCard = ({
  img,
  ProductName,
  ProductDescription,
  ProductPrice,
}) => {
  return (
    <div className={styles.Card}>
      <Image src={img} />
      <div className={styles.CardBody}>
        <div className={styles.CardHeader}>
          <h2>{ProductName}</h2>
          {/* <button className="btn">buy now</button> */}
          <h2 className={styles.ProductPrice}>{ProductPrice}/-</h2>
        </div>
        <p>{ProductDescription}</p>
      </div>
    </div>
  );
};

export default ProductCard;
