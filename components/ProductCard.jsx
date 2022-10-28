import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({
  id,
  img,
  ProductName,
  ProductDescription,
  ProductPrice,
  IsLoading,
}) => {
  return (
    <Link legacyBehavior href={'/shop/' + id}>
      <div className={styles.Card}>
        <Image src={img} className={styles.ProductImage} />
        <div className={styles.CardBody}>
          <div className={styles.CardHeader}>
            <h2>{ProductName}</h2>
            {/* <button className="btn">buy now</button> */}
            <h2 className={styles.ProductPrice}>{ProductPrice}/-</h2>
          </div>
          <p>{ProductDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
