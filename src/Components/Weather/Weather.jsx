import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../../Images/Weather-icon/search.png';
import clear_icon from '../../Images/Weather-icon/clear.png';
import cloud_icon from '../../Images/Weather-icon/cloud.png';
import drizzle_icon from '../../Images/Weather-icon/drizzle.png';
import rain_icon from '../../Images/Weather-icon/rain.png';
import snow_icon from '../../Images/Weather-icon/snow.png';
import wind_icon from '../../Images/Weather-icon/wind.png';
import humidity_icon from '../../Images/Weather-icon/humidity.png';
import { useParams } from 'react-router-dom';
import { getWeather } from '../APIServices/apiservice';

const Weather = () => {
  const { city } = useParams();
    const [selectedCity, setSelectedCity] = useState("");
    const inputRef=useRef()
    const [weatherData,setWeatherData]=useState(false);

    const allIcons={
        "01d":clear_icon,
        "01n":clear_icon,
        "02d":cloud_icon,
        "02n":cloud_icon,
        "03d":cloud_icon,
        "03n":cloud_icon,
        "04d":drizzle_icon,
        "04n":drizzle_icon,
        "09d":rain_icon,
        "09n":rain_icon,
        "10d":rain_icon,
        "10n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon,
    }
  useEffect(() => {

    setSelectedCity(city);
  }, [ city]);

    
      useEffect(()=>{
        const fetchWeather = async () =>{
              try {
                const response = await getWeather(selectedCity);
                console.log(response)
                const icon=allIcons[response.weather[0].icon] || clear_icon;
                setWeatherData({
                  humidity:response.main.humidity,
                  windSpeed:response.wind.speed,
                  temperature:Math.floor(response.main.temp),
                  location:response.name,
                  icon:icon
                })
              } catch (error) {
                  console.error("Error fetching documents:", error);
                }
        };
        fetchWeather();
      },)




  return (
    <div className='weather'>
        <div className='d-flex align-items-center justify-content-around w-100'>
          <img src={weatherData.icon} alt="" className='weather-icon'/>
          <div>
            <p className='temperature'>{weatherData.temperature}°c</p>
            <p className='location'>{weatherData.location}</p>
          </div>
        </div>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="" style={{width:'40px'}}/>
                <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} className='wind-icon' alt="" style={{width:'40px'}}/>
                <div>
                    <p>{weatherData.windSpeed} km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather