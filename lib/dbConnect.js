import mongoose from "mongoose";

/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.log("Eror Mongo URI");
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function dbConnect() {
  const opts = {
    useNewUrlParser: true,
  };
  mongoose.set("strictQuery", false);
  await mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    console.log("Connected To DB");
  });
}

export default dbConnect;
