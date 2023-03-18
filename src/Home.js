import React, { useState } from "react";
import "./App.css";

function Home() {
  const [image, setImage] = useState(null);

  const handleClick = () => {
    const randomImage = Math.floor(Math.random() * 15) + 1; // generates a random number between 1 and 15
    setImage(`./personal-images/meme${randomImage}.JPG`); // sets the image path based on the random number generated
  };

  return (
    <div className="App">
      <header className="App-header">
        {image ? (
          <img src={image} className="img" alt="random meme" />
        ) : (
          <p>Click the button to generate a random meme!</p>
        )}
        <button onClick={handleClick}>Generate</button>
      </header>
    </div>
  );
}

export default Home;
