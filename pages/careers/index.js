import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

const index = () => {
  const CareerCard = ({ heading, position, description, buttonLink }) => {
    return (
      <div class="CardSection">
        <div class="CareerCard">
          <h2>
            {heading} <span className="gradient">({position})</span>
          </h2>
          <hr />
          <div class="CardBody">{description}</div>
          <Link href={buttonLink}>
            <button className="btn">connect</button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>careers</title>
      </Head>
      <Layout>
        <div className="Section p-3 CareerSection">
          <h1>
            careers
            <hr className="HeadingBorderHr" />
          </h1>
          <div class="grid fr2">
            <CareerCard
              heading={'Next Developer '}
              position="Internship"
              description="opening for ReactJs Intern"
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
