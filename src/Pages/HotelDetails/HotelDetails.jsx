import React from 'react';
import HotelName from './HotelName/HotelName';
import HotelGallery from '../HotelDetails/HotelGallery/HotelGallery';
import DetailsSection from '../HotelDetails/DetailsSection/DetailsSection';
import LocationCard from '../HotelDetails/LocationCard/LocationCard';
import BookingCard from '../HotelDetails/BookingCard/BookingCard';
import HotelFeatures from '../HotelDetails/HotelFeatures/HotelFeatures';
import GallerySection from '../HotelDetails/GallerySection/GallerySection';
import PlanJourney from '../HotelDetails/PlanJourney/PlanJourney';
import RoomOptions from '../HotelDetails/RoomOptions/RoomOptions';
import './HotelDetails.css';

export default function HotelDetails() {
    return (
        <div className="hotel-details">
            <div className="hotel-details__top">
                <div className="hotel-details__main">
                    <HotelName />
                    <HotelGallery />
                    <DetailsSection />
                    <HotelFeatures />
                    <GallerySection />
                    <PlanJourney />
                </div>

                <div className="hotel-details__side">
                    <LocationCard />
                    <BookingCard />
                </div>
            </div>

            {/* Room Section */}
            <div className="hotel-details__rooms">
                <RoomOptions />
            </div>
        </div>
    );
}
