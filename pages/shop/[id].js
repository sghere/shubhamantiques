import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import styles from '../../components/ProductCard.module.css';
import img from '../../public/images/abc.jpg';
import ProductCard from '../../components/ProductCard';

import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [Data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [Product, setProduct] = useState({});
  useEffect(() => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setData(result.products);
      });

    fetch('https://dummyjson.com/products/' + id)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setProduct(result);
      });
  }, [id]);

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
    <>
      <Head>
        <title>Shop | Shubham Antiques</title>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta
          name="description"
          content="Find the perfect gift for your loved ones among our selection of antiques and collectibles. We offer a wide variety of items ranging from watches, to jewelry, to vintage coins."
        />
        <meta
          name="keywords"
          content="Antique Collectible, Antique Clocks, Antique Watches, antique stores near me,antiques near me,antique shops near me,antique mall,antique mall near me,antique shop,antique dealers ear me,antique dealers,online antique store,antique furniture stores near me	,antique furniture stores,vintage and antique stores near me,antique stores nearby,vintage furniture stores near me,best antique tores near me	,antique dealers near me that buy antiques,local antique hops,antique shopping near me,montgomery street antique mall,pawn hops near me that buy antiques,local antique stores,antique furniture hops near me,vintage watch shop,village antiques,antique consignment ear me,the antique mall,antique shopping,emporium antiques,antique lock dealers,local antique dealers,antique shop online,antiques and ollectibles near me,we buy any antiques near me,antique stores near e hat buy antiques,best online antique stores,antique stores around me,antique consignment stores near me,antique shops nearby,antique toy store,antique jewelry stores near me,vintage furniture warehouse,antiques emporium,west chester antique mall,downtown antique mall,antique furniture dealers near me,antique warehouse ear e,best antique shops near me,antic shop near me,antique jewelry store,a ntique coin shop,"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Shubham Mahesh Gaikwad" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JBFLYZXPB0"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JBFLYZXPB0');
        `}
      </Script>
      <Layout>
        <div className="Section p-3">
          {IsLoading ? (
            'Loading...'
          ) : (
            <>
              <div class={styles.ProductContainer}>
                <div class={styles.ProductLeft}>
                  <Image src={img} className={styles.ProductImage} />
                </div>
                <div class={styles.ProductRight}>
                  <h2 className={styles.Heading}>{Product.title}</h2>
                  <hr />
                  <h3 className={styles.ProductPrice}>{Product.price}</h3>
                  <p>{Product.description}</p>
                </div>
              </div>
              <div class={styles.MoreOptions}>
                <h2>More options</h2>
                <hr />
                <div class={styles.MoreProductsContainer}>
                  {DisplayProducts}
                </div>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
