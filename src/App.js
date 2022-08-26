import { useState } from "react";
import "./App.css";

function App() {
  const [imgFile, setImgFile] = useState(null);
  const handleChange = (e) => {
    console.log("file change");
    const img = {
      data: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    };
    setImgFile(img);
  };

  const handleUpload = async () => {
    let formData = new FormData();
    formData.append("file", imgFile.data);
    console.log("file uploading", formData);
  };

  return (
    <div className="App">
      <h1>Demo app</h1>
      <div>
        <input
          accept="image/* video/*"
          type="file"
          onChangeCapture={(e) => handleChange(e)}
        />
      </div>
      <div>
        <img
          src={imgFile?.preview}
          style={{ height: "250px", width: "250px", objectFit: "contain" }}
        />
      </div>
      <div>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}

export default App;
