// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import formidable from "formidable";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

const ImageUpload = async (image, name) => {
  var ImageKit = require("imagekit");
  var imagekit = new ImageKit({
    publicKey: "public_1HhPjH62z4bH2ic4vT09Y/LZq5s=",
    privateKey: "private_rDd7xTRSwnxIwIwy3fBbK/JuvEQ=",
    urlEndpoint: "https://ik.imagekit.io/mrsg/",
  });

  const uploadPromise = imagekit.upload({
    file: image,
    fileName: name,
  });

  const URL = await uploadPromise.then((res) => {
    return res;
  });

  return URL.url;
};

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  if (method === "POST") {
    try {
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        if (err) return res.status(500).json({ err });

        const id = uuidv4();

        const imageUrl = await ImageUpload(fields.imagepath, id);

        let newFields = {
          id: id,
          ...fields,
          imagepath: imageUrl,
        };

        const product = await Product.create(newFields);

        res.status(200).json("Upload Done!");
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  if (method === "GET") {
    try {
      const products = await Product.find(
        {}
      ); /* find all the data in our database */
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
