import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: String,
  Name: String,
  Desc: String,
  Price: String,
  imagepath: String,
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
