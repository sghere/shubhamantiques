import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import Layout from '../../components/Layout';

const index = () => {
  const CareerCard = ({ heading, position, description, buttonLink }) => {
    return (
      <div className="CardSection">
        <div className="CareerCard">
          <h2>
            {heading} <span className="gradient">({position})</span>
          </h2>
          <hr />
          <div className="CardBody">{description}</div>
          <Link legacyBehavior href={buttonLink}>
            <button className="btn">connect</button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Careers | Shubham Antiques</title>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="description"
          content="Find yourself a career with Shubham Antique Shop."
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
        <div className="Section p-3 CareerSection FadeIn">
          <h2>
            careers
            <hr className="HeadingBorderHr" />
          </h2>
          <div className="grid fr2">
            <CareerCard
              heading={'Next Developer '}
              position="Internship"
              description="opening for NextJs Intern"
              buttonLink="https://api.whatsapp.com/send/?phone=%2B918655301910&text=Hi, Application for NextJs Developer. From- Shubham Antiques Website"
            />
            <CareerCard
              heading={'React Developer'}
              position="Internship"
              description="opening for ReactJs Intern"
              buttonLink="https://api.whatsapp.com/send/?phone=%2B918655301910&text=Hi, Application for ReactJs Developer. From- Shubham Antiques Website"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;
