import React, { useEffect, useState } from 'react'
import './DestinationDetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import { getCitiesByStateName, getStateByName } from '../../Components/APIServices/apiservice';
import Slider from 'react-slick';
import img1 from '../../Images/Destinations/Rajasthan/img1.jpg'
import img2 from '../../Images/Destinations/Rajasthan/img2.jpg'
import img3 from '../../Images/Destinations/Rajasthan/img3.jpg'
import img4 from '../../Images/Destinations/Rajasthan/img4.jpg'



export default function DestinationDetail() {
  const { state } = useParams();
  const [states, setStates] = useState();
  const [cities, setCities] = useState([]);

  const navigate = useNavigate();

  const handleClick = (state, city) => {
    navigate(`/destination/${state}/${city}`)
  }

  useEffect(() => {
    const fetchStateByName = async () => {

      try {
        const response = await getStateByName(state);
        setStates(response);
        console.log(response);

      } catch (error) {
        console.error("Error fetching documents:", error);
      }

    };
    fetchStateByName();

  }, [state])


  useEffect(() => {
    const fetchCitiesByStateName = async () => {
      try {
        const response = await getCitiesByStateName(state);
        setCities(response);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCitiesByStateName();
  }, [state]); // ✅ depend on `state`, not `cities`

  if (!states) {
    return <div>Loading...</div>;
  }


  var settings = {
    infinite: true,
    speed: 1000,              // Increased for a smooth fade
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,      // Slightly slower for better visual engagement
    cssEase: "ease-in-out",   // Smooth easing for transitions
    fade: true,               // Optional: for a fading transition between images
    arrows: false,            // Optional: hide arrows for clean design
    dots: false
  };

  return (
    <>
      <div className="destination-card ">
        <section className="main-section destination-detail px-5">

          <Slider {...settings} >
            {states.resources && states.resources.map((image, index) => (
              <div key={index} className="img-wrapper py-5">
                <img src={image.imgUrl} className="detail-image" alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>

          <h1 className="detail-heading ">{states.name}</h1>
          <p className="detail-description my-4">{states.description}</p>

          <h2 className="detail-subheading">Popular Cities </h2>

          <div className="popular-cities">
            {cities.map((city) => (
              <div
                key={`${city.id}`}
                className="cities-card "
                onClick={() => handleClick(state, city.name)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={city.imgUrl}
                  alt={city.name || 'Highlight'}
                  className={`City-image `}
                />
                <h3 className="city-name">{city.name}</h3>
                <p className="city-description">{city.description}</p>
              </div>
            ))}
          </div>

        </section>
      </div>

    </>
  )
}
