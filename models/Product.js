import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: String,
  Name: String,
  Desc: String,
  Price: String,
  Category: String,
  imagepath: String,
  Date: Date,
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
