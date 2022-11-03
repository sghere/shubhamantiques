import React, { useState } from 'react';
import styles from './upload.module.css';

const Upload = () => {
  const [fileName, setfileName] = useState([]);

  return (
    <div className={styles.UploadProductsContainer}>
      <div
        className={styles.UploadProductsCard}
        onDragEnter={() => console.log('File here')}
        onDrop={() => console.log('Dropped')}
      >
        <h2>Upload Product</h2>
        <input className="input" placeholder="product name" type="text" />
        <input className="input" placeholder="description" type="textarea" />
        <input className="input" placeholder="price" type="text" />
        <input className="input" placeholder="description" type="text" />
        <div className="inputfile">
          {!fileName.length > 0 ? <h2>Upload Files</h2> : null}
          {fileName.map((e) => {
            return <p key={e.name}>{e.name}</p>;
          })}
          <input
            id="fileUpload"
            multiple
            onChange={(e) => {
              setfileName(Array.from(e.target.files));
            }}
            type="file"
          />
        </div>

        <button className="btn btn-success">upload</button>
      </div>
    </div>
  );
};

export default Upload;
