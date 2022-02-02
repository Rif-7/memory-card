import "./App.css";
import Navbar from "./components/Navbar";
import ImageContainer from "./components/ImageContainer";
import uniqid from "uniqid";
import { useEffect, useState } from "react";

const imgList = [
  "Alphonse.png",
  "Armin.jpg",
  "Edward.jpg",
  "Eren.png",
  "Erwin.png",
  "L.jpg",
  "Levi.jpg",
  "Light.jpg",
  "Mikasa.png",
  "Nanami.jpg",
  "Naruto.jpg",
  "Petra.jpg",
];

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [imgArray, setImgArray] = useState(getRandomImgList());

  useEffect(() => {
    if (highScore < currentScore) {
      setHighScore(currentScore);
    }
  }, [currentScore, highScore]);

  function scoreHandler(e) {
    const selectedImage = e.currentTarget.getAttribute("data-name");
    if (selectedImages.includes(selectedImage)) {
      setCurrentScore(0);
      setSelectedImages([]);
    } else {
      setCurrentScore(currentScore + 1);
      setSelectedImages(selectedImages.concat(selectedImage));
    }
    setImgArray(getRandomImgList());
  }

  return (
    <div>
      <Navbar currentScore={currentScore} highScore={highScore} />
      <div className="content">
        {imgArray.map((img) => {
          const name = img.split(".")[0];
          const url = "./imgs/" + img;
          return (
            <ImageContainer
              imgUrl={url}
              imgName={name}
              key={uniqid()}
              onClickHandler={scoreHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

// Takes a number as input and return an array with numbers from 0 upto but not including that number in random order
function getRandomIndexes(size) {
  const indexList = [];
  while (true) {
    if (indexList.length >= size) {
      break;
    }
    const randomIndex = Math.floor(Math.random() * size);
    if (!indexList.includes(randomIndex)) {
      indexList.push(randomIndex);
    }
  }
  return indexList;
}

// Return a randomly ordered imgList Array
function getRandomImgList() {
  const randomIndexes = getRandomIndexes(imgList.length);
  const newImgArray = [];
  for (let i = 0; i < randomIndexes.length; i++) {
    newImgArray.push(imgList[randomIndexes[i]]);
  }
  return newImgArray;
}

export { getRandomIndexes };

export default App;
