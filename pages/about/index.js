import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import Layout from '../../components/Layout';
import styles from './blog.module.css';
import img from '../../public/images/mg.jpeg';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  const BlogWrapper = () => {
    return (
      <>
        <div className={styles.BlogWrapper}>
          {/* <video
            autoPlay
            muted
            loop
            className={styles.videoTag}
            poster="video_poster.JPG"
          >
            <source src="/video1.mp4#t=0.1" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <p className={styles.BlogText}>
              <span className={styles.ImpText}>Shubham Antique Shop</span> is an
              Antiques business that has been operating in Mumbai for the last
              20 years. Managed and run by{' '}
              <span className={styles.ImpText}>Mahesh Baban Gaikwad</span> In
              the past, it was only possible to visit our store to browse
              through our collection of antiques, but now we have an online
              store as well. We carry a wide selection of antiques watches,
              clocks and other artifacts that are perfect for those looking to
              add some old-world charm to their home.
            </p>
          </div> */}
          <div className={styles.fullscreenf}>
            <div className="FadeIn">
              <p>Meet,</p>
              <Link href="#Intro" scroll={false}>
                <h1>Mahesh Baban Gaikwad</h1>
              </Link>
            </div>
          </div>
          <div className={styles.fullscreen} id="Intro">
            <div className={styles.MeetIntro}>
              <div className={styles.Left}>
                <p className={styles.ThinText}>
                  Mahesh Gaikwad - Founder/Proprietor
                </p>
                <h1 className={styles.LargeText}>Shubham Antiques Shop</h1>
                <p className={styles.ThinText}>
                  A hands-on with more than 16 years Industry experience.
                </p>
                <p className={styles.ThickText}>
                  Mahesh has spent the last 16 years building, and taking the
                  Shubham Antique Shop to one of the most reasonable and
                  reliable Antique Shop in the Locality.
                </p>
              </div>
              <div className={styles.Right}>
                <Image src={img} className={styles.ProductImage} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>About | Shubham Antiques</title>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta name="description" content="About Shubham Antiques" />
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
        <div className="Section px-3">
          <BlogWrapper />
        </div>
      </Layout>
    </>
  );
};

export default About;
