// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new formidable.IncomingForm();
  // console.log("StartUpload", form);
  form.parse(req, async (err, fields, files) => {
    console.log(files.User_File);
    const data = fs.readFileSync(files.User_File.filepath);
    fs.writeFileSync("./public/images/123.jpg", data);
    await fs.unlinkSync(files.User_File.filepath);
    // console.log(fields);
    // console.log(err);
    res.status(200).json("Upload Done!");
  });
}
