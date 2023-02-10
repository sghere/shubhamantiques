// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import formidable from "formidable";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadFile = (files, path) => {
  console.log("Files:", files.File);
  const data = fs.readFileSync(files.File?.filepath);
  fs.writeFileSync(path, data);
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
        let path = "./public/images/productImages/" + id + ".jpg";
        let newFields = {
          id: id,
          ...fields,
          imagepath: path,
        };
        if (files.File) uploadFile(files, path);
        const product = await Product.create(newFields);
        console.log(product);
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
