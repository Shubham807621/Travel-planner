import React, { useEffect, useState } from 'react'
import './DestinationDetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import {  getCitiesByStateName, getStateByName } from '../../Components/APIServices/apiservice';


export default function DestinationDetail() {
  const { state } = useParams();
  const [states, setStates] =useState();
  const [cities, setCities] = useState([]);

  const navigate = useNavigate();

  const handleClick =(state,city)=>{
    navigate(`/destination/${state}/${city}`)
  }

  useEffect(()=>{
    const fetchStateByName = async ()=>{
  
      try {
        const response = await getStateByName(state);
        setStates(response);
        
      } catch (error) {
          console.error("Error fetching documents:", error);
        }
  
    };
    fetchStateByName();
  
  },[state])


  useEffect(() => {
    const fetchCitiesByStateName = async () => {
      try {
        const response = await getCitiesByStateName(state);
        setCities(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCitiesByStateName();
  }, [state]); // ✅ depend on `state`, not `cities`
  
    if (!states) {
    return <div>Loading...</div>;
  }


  return (
    <>
        <div className="destination-card ">
          <section className="main-section destination-detail px-5">
      
            <div className="img-wrapper py-5">
              <img
                src={states.imgUrl}
                alt={states.name}
                className="detail-image"
              />
            </div>
              <h1 className="detail-heading">{states.name}</h1>
              <p className="detail-description">{states.description}</p>
              
              <h2 className="detail-subheading">Popular Cities </h2>

                <div className="popular-cities">
                  {cities.map((city) => (
                    <div
                      key={`${city.id}`}
                      className="cities-card "
                      onClick={() => handleClick(state,city.name)}
                      style={{ cursor:  'pointer'  }}
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
