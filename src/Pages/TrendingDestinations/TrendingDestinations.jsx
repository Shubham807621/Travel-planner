import React from "react";
import "./TrendingDestinations.css";
import camels from '../../Images/Destinations/camels.jpeg'
import mumbai from '../../Images/Destinations/mum.jpg'
import up from '../../Images/Destinations/up.jpg'
import tamilnadu from '../../Images/Destinations/tamilnadu.jpg'
import Somnath_Mandir from '../../Images/Destinations/img1.jpeg'
import kerala from '../../Images/Destinations/img4.jpeg'
import ladakh from '../../Images/Destinations/ladakh.jpg'
import { useNavigate } from "react-router-dom";

const images = [
  { src: camels, title: "Rajasthan", tours: "15 Tours", className: "img1" },
  { src: mumbai, title: "Maharashtra", tours: "8 Tours", className: "img2" },
  
  { src: tamilnadu, title: "Tamil Nadu", tours: "5 Tours", className: "img3" },
  { src: up, title: "Uttar Pradesh", tours: "12 Tours", className: "img4" },
  { src: kerala, title: "Kerala  ", tours: "7 Tours", className: "img5" },
  { src: ladakh, title: "Ladakh", tours: "9 Tours", className: "img6" }
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
