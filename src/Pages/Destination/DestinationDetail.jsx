import React from 'react'
import './DestinationDetails.css'
import { useNavigate } from 'react-router-dom';

import Rajasthan from '../../Images/Destinations/Rajasthan.jpg';
import JaipurCity from '../../Images/Destination1/JaipurCity.jpg';
import JodhpurCity from '../../Images/Destination1/Jodhpur City.jpg';
import UdaipurCity from '../../Images/Destination1/Udaipur city.jpg'
import JaisalmerCity from '../../Images/Destination1/Jaisalmer city.jpg'
import PushkarCity from '../../Images/Destination1/Pushkar-City.jpg'


export default function DestinationDetail() {

    const destination = 
  {
    id: 1,
    image: Rajasthan,
    name: 'Rajasthan',
    description: 'Immerse yourself in the royal heritage of Rajasthan, with its majestic forts, palaces, and vibrant culture.',
    highlights: [
      { name: 'Jaipur ', image: JaipurCity, description: 'The Pink City, famous for its forts and palaces.', link: '/destination/1/rajasthan-cities/jaipur' },
      { name: 'Jodhpur ', image: JodhpurCity, description: 'The Blue City, known for Mehrangarh Fort.', link: '/destination/1/rajasthan-cities/jodhpur' },
      { name: 'Udaipur ', image: UdaipurCity, description: 'The City of Lakes, with stunning palaces.', link: '/destination/1/rajasthan-cities/udaipur' },
      { name: 'Jaisalmer ', image: JaisalmerCity, description: 'The Golden City, famous for its desert forts.', link: '/destination/1/rajasthan-cities/jaisalmer' },
      { name: 'Pushkar ', image: PushkarCity, description: 'A spiritual hub with sacred lakes and temples.', link: '/destination/1/rajasthan-cities/pushkar'},
      
    ],
  }

  const navigate = useNavigate();

  const handleClick =(name,city_name)=>{
    navigate(`/destination/${name}/${city_name}`)
  }



  return (
    <>
        <div className="destination-card ">
          <section className="main-section destination-detail px-5">
      
            <div className="img-wrapper py-5">
              <img
                src={destination.image || fallbackImage}
                alt={destination.name || 'Destination'}
                className={`detail-image`}
              />
            </div>
              <h1 className="detail-heading">{destination.name}</h1>
              <p className="detail-description">{destination.description}</p>
              
              <h2 className="detail-subheading">Popular Cities </h2>


              {destination.highlights && destination.highlights.length > 0 ? (
                <div className="popular-cities">
                  {destination.highlights.map((highlight) => (
                    <div
                      key={`${destination.id}`}
                      className="cities-card "
                      onClick={() => handleClick(destination.name, highlight.name)}
                      style={{ cursor: highlight.link ? 'pointer' : 'default' }}
                    >
                      <img
                        src={highlight.image}
                        alt={highlight.name || 'Highlight'}
                        className={`City-image `}
                      />
                      <h3 className="city-name">{highlight.name}</h3>
                      <p className="city-description">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No highlights available for this destination.</p>
              )}
          </section>
        </div>
    
    </>
  )
}
