import React, { useState } from "react";
import Layout from "../../components/Layout";
import styles from "./upload.module.css";

const Index = () => {
  const [SelectedFile, setSelectedFile] = useState("");
  const [Loading, setLoading] = useState(false);
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const SubmitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    let image = await toBase64(e.target[0].files[0]);

    var formData = new FormData();
    formData.append("imagepath", image);
    formData.append("Name", e.target[1].value);
    formData.append("Desc", e.target[2].value);
    formData.append("Price", e.target[3].value);
    formData.append("Category", e.target[4].value);
    formData.append("Date", new Date());
    fetch("/api/product", {
      method: "post",
      body: formData,
    }).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        alert("Product Added Successfully!");
        document.getElementById("formFileUpload").reset();
      } else {
        alert("Some Error...Please try again later!");
        document.getElementById("formFileUpload").reset();
      }
      setSelectedFile("");
    });
  };

  return (
    <Layout>
      <div>
        <form id="formFileUpload" onSubmit={SubmitHandler}>
          <div
            className={
              !Loading ? styles.Form : styles.Form + " " + styles.FormLoading
            }
          >
            <div
              className={
                SelectedFile != ""
                  ? styles.FileContainer + " " + styles.FileSelected
                  : styles.FileContainer
              }
            >
              <input
                id="FileUpload"
                onChange={(e) => {
                  setSelectedFile(e.target.value);
                }}
                required
                type="file"
              />
            </div>

            <input type="text" required id="Name" />
            <input type="textarea" required id="Desc" />
            <input type="text" required inputMode="numeric" id="Price" />
            <select id="Category" required name="Category">
              <option value="Idols">Idols</option>
              <option value="Watches">Watches</option>
              <option value="Pens">Pens</option>
              <option value="Jewellery">Jewellery</option>
            </select>
            {Loading ? (
              <div className="spinner"></div>
            ) : (
              <input type="submit" value={"Submit"} />
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Index;
