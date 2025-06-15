import React, { useEffect } from "react";
import "./TravelPackageList.css";
import { getPackageList } from "../../Components/APIServices/apiservice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TravelPackageList = () => {

    const packages = [
  {
    id: "26142053-4cfc-4226-884d-56cf7341c0a4",
    packageName: "Jaipur Royal Retreat Package",
    price: 1800.0,
    durationInDays: 4,
    cityName: "Jaipur",
    groupPackage: true
  },
  {
    id: "3c14ee6a-5782-49c7-826d-308f52765d48",
    packageName: "Konkan Coastal Escape - Solo",
    price: 9999.0,
    durationInDays: 4,
    cityName: "Konkan",
    groupPackage: false
  },
  {
    id: "e1e0f6ad-d86e-4043-b392-427fd87c308f",
    packageName: "Royal Heritage Tour of Jaipur",
    price: 1350.0,
    durationInDays: 5,
    cityName: "Jaipur",
    groupPackage: true
  }
];

const [data, setData] = useState([]);
const navigate = useNavigate();

 useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await getPackageList();
        setData(response || []); // fallback to [] to prevent undefined
        //   console.log("📦 API response:", response);
      } catch (error) {
        console.error("Error fetching package list:", error);
      }
    };

    fetchPackages();
  }, []);
  return (
    <div className="travel-package-list container">
      <h2 className="travel-package-list__title">Available Packages</h2>
      <div className="travel-package-list__container">
        {data.map((pkg) => (
          <div key={pkg.id} className="travel-package-card"
            onClick={() => {navigate(`/package-details/${pkg.id}`)}}
          >
            <h3 className="travel-package-card__name">{pkg.packageName}</h3>
            <div className="travel-package-card__details">
              <p className="travel-package-card__city">
                <strong>City:</strong> {pkg.cityName}
              </p>
              <p className="travel-package-card__duration">
                <strong>Duration:</strong> {pkg.durationInDays} days
              </p>
              <p className="travel-package-card__price">
                <strong>Price:</strong> ₹{pkg.price}
              </p>
              <p className="travel-package-card__type">
                <strong>Type:</strong> {pkg.groupPackage ? "Group" : "Solo"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPackageList;
