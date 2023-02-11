import React from "react";
import styles from "./upload.module.css";

const index = () => {
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <div>
      <form
        id="formFileUpload"
        onSubmit={async (e) => {
          e.preventDefault();
          let image = await toBase64(e.target[0].files[0]);

          var formData = new FormData();
          formData.append("imagepath", image);
          formData.append("Name", e.target[1].value);
          formData.append("Desc", e.target[2].value);
          formData.append("Price", e.target[3].value);

          fetch("/api/product", {
            method: "post",
            body: formData,
          }).then((res) => {
            console.log(res);
            if (res.status === 200) {
              alert("Product Added Successfully!");
              document.getElementById("formFileUpload").reset();
            } else {
              alert("Some Error...Please try again later!");
              document.getElementById("formFileUpload").reset();
            }
          });
        }}
      >
        <div className={styles.Form}>
          <input id="FileUpload" required type="file" />
          <input type="text" required id="Name" />
          <input type="textarea" required id="Desc" />
          <input type="text" required inputMode="numeric" id="Price" />
          <input type="submit" value={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default index;
