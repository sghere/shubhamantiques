import Image from "next/image";
import React from "react";
import img from "../public/images/abc.jpg";

const ProductCard = () => {
  return (
    <div className="Card">
      <Image src={img} layout="responsive" width={300} height={200} />
      <div className="CardBody">
        <div className="CardHeader">
          <h4>Product Name</h4>
          <button className="btn">buy now</button>
        </div>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters. It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
