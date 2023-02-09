import React from "react";

const index = () => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].files[0]);
          var formData = new FormData();
          formData.append("User_File", e.target[0].files[0], "User_file.jpg");
          fetch("/api/hello", {
            method: "post",
            body: formData,
          });
        }}
      >
        <input id="FileUpload" type="file" />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default index;
