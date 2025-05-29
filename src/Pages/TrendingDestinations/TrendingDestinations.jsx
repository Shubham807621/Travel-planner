import React, { useEffect, useState } from "react";
import "./TrendingDestinations.css";

import { useNavigate } from "react-router-dom";
import { getAllStates } from "../../Components/APIServices/apiservice";

const TrendingDestinations = () => {
  const images = [
  { className: "img1" },
  { className: "img2" },
  {className: "img3" },
  {className: "img4" },
  { className: "img5" },
  {className: "img6" }
];

const [states, setStates] =useState([]);

const navigate = useNavigate();

const handleClick =(state)=>{
console.log("hello")
navigate(`/destination/${state}`);

}

useEffect(()=>{
  const fetachStates = async ()=>{

    try {
      const response = await getAllStates();
      setStates(response);
      
    } catch (error) {
        console.error("Error fetching documents:", error);
      }

  };
  fetachStates();

},[])

console.log(states);
  return (
    <div className="trending-container mt-4">
      <h2 className="title">
        Trending <span>Destinations</span>
      </h2>
      <div className="grid-container">
        {states.map((state, index) => (
          <div
            key={state.id}
            className={`image-card ${images[index % images.length].className}`} // use index to match image class
            onClick={() => handleClick(state.name)}
          >
            <img src={state.imgUrl} alt={state.name} />
            <div className="overlay">
              <span className="destination">{state.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestinations;
