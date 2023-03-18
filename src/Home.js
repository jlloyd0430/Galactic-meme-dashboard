import React, { useState } from "react";
import "./App.css";
import "./styles.css";

function Home() {
  const [image, setImage] = useState(null);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [editedImage, setEditedImage] = useState("");

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: type === "checkbox" ? checked : parseInt(value), // Ensured that values are integers
      };
    });
  }

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    const randomImage = Math.floor(Math.random() * 16) + 1;
    setImage(`./personal-images/meme${randomImage}.JPG`);
  };

  return (
    <div className="App">
      <button className="Btn" onClick={handleClick}>
        Generate
      </button>

      <header className="App-header">
        {image ? (
          <img src={image} className="img" alt="random meme" />
        ) : (
          <p>generate a random Meme!</p>
        )}
      </header>

      <p className="upload-meme">Upload your own meme</p>
      <input
        type="file"
        name="uploadedImage"
        className="btn2"
        onChange={handleUpload}
      />
    </div>
  );
}

export default Home;
