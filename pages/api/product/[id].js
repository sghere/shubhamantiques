import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  if (method === "GET") {
    try {
      const product = await Product.findOne({
        id: req.query.id,
      }); /* find all the data in our database */

      res.status(200).json({ success: true, data: product });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
