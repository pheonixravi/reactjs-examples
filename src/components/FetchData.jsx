import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [dogImage, setDogImage] = useState(null);
  // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setDogImage(data.message));
  }, []);

  return (
    <div className="App">
      {dogImage && <img src={dogImage}></img>}
      {/* 5. Using *dogImage as* the *src* for our image*/}
      {/* {dogImage &&
        dogImage.map((dog) => (
          <img width={"200px"} height={"200px"} src={dog}></img>
        ))} */}
    </div>
  );
};

export default FetchData;
