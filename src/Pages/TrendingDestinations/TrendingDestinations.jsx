import React from "react";
import "./TrendingDestinations.css";
import camels from '../../Images/Destinations/camels.jpeg'
import water from '../../Images/Destinations/water1.jpeg'
import Kerala from '../../Images/Destinations/img3.jpeg'
import Banaras from '../../Images/Destinations/img2.jpeg'
import Somnath_Mandir from '../../Images/Destinations/img1.jpeg'
import kerala1 from '../../Images/Destinations/img4.jpeg'
import Andaman from '../../Images/Destinations/andaman.jpeg'
import { useNavigate } from "react-router-dom";

const images = [
  { src: camels, title: "Rajasthan", tours: "15 Tours", className: "img1" },
  { src: water, title: "M aharashtra", tours: "8 Tours", className: "img2" },
  { src: Kerala, title: "Kerala", tours: "12 Tours", className: "img3" },
  { src: Banaras, title: "Banaras", tours: "5 Tours", className: "img4" },
  { src: Somnath_Mandir, title: "Somnath Mandir", tours: "10 Tours", className: "img5" },
  { src: kerala1, title: "Kerala  ", tours: "7 Tours", className: "img6" },
  { src: Andaman, title: "Andaman", tours: "9 Tours", className: "img7" }
];

const TrendingDestinations = () => {

const navigate = useNavigate();

const handleClick =(name)=>{
console.log("hello")
navigate(`/destination/${name}`);

}
  return (
    <div className="trending-container mt-4">
      <h2 className="title">
        Trending <span>Destinations</span>
      </h2>
      <div className="grid-container">
        {images.map((img, index) => (
          <div key={index} className={`image-card ${img.className}`} onClick={() => handleClick(img.title)}>
            <img src={img.src} alt={img.title} />
            <div className="overlay">
              <span className="destination">{img.title}</span>
              <span className="tours">{img.tours}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestinations;
