// HotelGallery.jsx
import "./HotelGallery.css";
import HotelFront from '../../../Images/HotelDetails/HotelGallery/frontview.jpeg'
import HotelRoom from '../../../Images/HotelDetails/HotelGallery/hotelroom.jpeg'
import DiningArea from '../../../Images/HotelDetails/HotelGallery/dining.jpeg'
import Lobby from '../../../Images/HotelDetails/HotelGallery/Lobby.jpeg'
import PoolNightView from '../../../Images/HotelDetails/HotelGallery/poolviewnight.jpeg'
import Restaurant from '../../../Images/HotelDetails/HotelGallery/Resturant.jpeg'
import DayPoolView from '../../../Images/HotelDetails/HotelGallery/poolviewday.jpeg'

const photos = [
    { src: HotelFront, alt: "Hotel Front" },
    { src: HotelRoom, alt: "Hotel Room" },
    { src: DiningArea, alt: "Dining Area" },
    { src: Lobby, alt: "Lobby" },
    { src: PoolNightView, alt: "Pool Night View" },
    { src: Restaurant, alt: "Restaurant" },
    { src: DayPoolView, alt: "Day Pool View" },
];

export default function HotelGallery() {
    return (
        <section className="hotel-section">
            <h2 className="hotel-heading">Explore Our Hotel</h2>
            <div className="hotel-grid">
                <div className="hotel-main-image">
                    <img src={photos[0].src} alt={photos[0].alt} className="hotel-main-img" />
                    <span className="hotel-tag">360° Tour</span>
                </div>
                {photos.slice(1).map((photo, index) => (
                    <div key={index} className="hotel-thumb-wrapper">
                        <img src={photo.src} alt={photo.alt} className="hotel-thumb-img" />
                        <div className="hotel-thumb-overlay">
                            <p className="hotel-thumb-text">{photo.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hotel-button-container">
                <button className="hotel-button">See all photos</button>
            </div>
        </section>
    );
}

