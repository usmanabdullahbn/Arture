import React from "react";
import "./Gallery.css"; // Create a CSS file for styling
import img1 from "../asserts/g1.jpeg"
import img2 from "../asserts/g2.jpg"
import img3 from "../asserts/g3.jpg"
import img4 from "../asserts/g4.jpg"
import img5 from "../asserts/g5.jpg"
import img6 from "../asserts/g6.jpg"
import img7 from "../asserts/g7.jpg"
import img8 from "../asserts/g8.jpg"
import img9 from "../asserts/g9.jpg"
import img10 from "../asserts/g10.jpg"
import img11 from "../asserts/g11.jpg"
import img12 from "../asserts/g12.jpg"

const Gallery = () => {
  // Placeholder images
  const images = [
   img1,
   img3,
   img2,
   img4,
   img6,
   img5,
   img10,
   img7,
   img9,
   img8,
   img12,
   img11,
  ];

  return (
    <>
    <div>
      <h1 style={{textAlign: "center", marginTop: "50px", fontWeight: "bolder"}}>Gallery</h1>
    </div>
    <div style={{paddingBottom: "50px", paddingTop:"10px"}} className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Artwork ${index + 1}`} />
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery;
