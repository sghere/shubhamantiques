import Head from 'next/head';
import Script from 'next/script';
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';

export default function Landing() {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta
          name="description"
          content="If you're looking to buy or sell antiques, then the Shubham Antique Shop is perfect for you. Established over 20 years ago and with a wealth of experience, we offer a professional and friendly service."
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
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
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
        <HeroSection />
      </Layout>
    </>
  );
}
