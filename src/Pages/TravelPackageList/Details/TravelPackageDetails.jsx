import React, { useEffect, useState } from 'react'
import './TravelPackageDetails.css';
import { getPackageById } from '../../../Components/APIServices/apiservice';
import { useParams } from 'react-router-dom';

export default function TravelPackageDetails() {

    const { id } = useParams();
    const [travelPackage, setTravelPackage] = useState(null);
   
    
     useEffect(() => {
        const fetchPackageById = async () => {
          try {
            const response = await getPackageById(id);
            setTravelPackage(response || []); // fallback to [] to prevent undefined
            //   console.log("📦 API response:", response);
          } catch (error) {
            console.error("Error fetching package list:", error);
          }
        };
    
        fetchPackageById();
      }, [id]);

         if (!travelPackage) {
        return <div>Loading travel package...</div>; // Show loader while data loads
    }
    return (
        <>
            <div className="travel-package-wrapper">
                <div className="travel-package-container">
                    <h1 className="travel-package-title">{travelPackage.packageName}</h1>
                    <div className="travel-package-meta">
                        <p><strong>City:</strong> {travelPackage.cityName}</p>
                        <p><strong>Type:</strong> {travelPackage.groupPackage ? 'Group' : 'Solo'}</p>
                        <p><strong>Duration:</strong> {travelPackage.durationInDays} days</p>
                        <p><strong>Price:</strong> ₹{travelPackage.price}</p>
                    </div>
                    <div className="hotel-section">
                        <h2>Hotels</h2>
                        {travelPackage.hotels.map((hotel, index) => (
                            <div className="hotel-card" key={index}>
                                <h3 className="hotel-name">{hotel.name}</h3>
                                <p className="hotel-address">{hotel.address}</p>
                                <p className="hotel-rating">Rating: {hotel.rating}</p>
                            </div>
                        ))}
                    </div>
                    <div className="activity-section">
                        <h2>Activities</h2>
                        {travelPackage.activities.map((activity) => (
                            <div className="activity-card" key={activity.id}>
                                <h3 className="activity-name">{activity.name}</h3>
                                <p className="activity-description">{activity.description}</p>
                                <p className="activity-price">Price: ₹{activity.price}</p>
                                <p className="activity-type">Type: {activity.outdoor ? 'Outdoor' : 'Indoor'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
