import "./HotelGallery.css";
import HotelFront from '../../../Images/HotelDetails/HotelGallery/frontview.jpeg';
import HotelRoom from '../../../Images/HotelDetails/HotelGallery/hotelroom.jpeg';
import DiningArea from '../../../Images/HotelDetails/HotelGallery/dining.jpeg';
import Lobby from '../../../Images/HotelDetails/HotelGallery/Lobby.jpeg';
import PoolNightView from '../../../Images/HotelDetails/HotelGallery/poolviewnight.jpeg';
import Restaurant from '../../../Images/HotelDetails/HotelGallery/Resturant.jpeg';
import DayPoolView from '../../../Images/HotelDetails/HotelGallery/poolviewday.jpeg';



export default function HotelGallery({ hoteldetails }) {

      if (!hoteldetails) {
        return <div className="hotel-name">Loading hotel details...</div>;
    }
    const photos = [
    { src: hoteldetails.imgUrl, alt: "Hotel Front" },
    { src: HotelRoom, alt: "Hotel Room" },
    { src: DiningArea, alt: "Dining Area" },
    { src: Lobby, alt: "Lobby" },
    { src: PoolNightView, alt: "Pool Night View" },
    { src: Restaurant, alt: "Restaurant" },
    // { src: DayPoolView, alt: "Day Pool View" },
];

    localStorage.setItem("hotelName", hoteldetails.name);

    return (
        <section className="hotel-gallery">
            <h2 className="hotel-gallery-heading">{hoteldetails.name}</h2>
            <div className="hotel-gallery-grid">
                <div className="hotel-gallery-main">
                    <img src={photos[0].src} alt={photos[0].alt} className="hotel-gallery-main-img" />
                    <span className="hotel-gallery-tag">360° Tour</span>
                </div>
                {photos.slice(1).map((photo, index) => (
                    <div key={index} className="hotel-gallery-thumb">
                        <img src={photo.src} alt={photo.alt} className="hotel-gallery-thumb-img" />
                        <div className="hotel-gallery-overlay">
                            <p className="hotel-gallery-overlay-text">{photo.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hotel-gallery-button-container">
                <button className="hotel-gallery-button">See all photos</button>
            </div>
        </section>
    );
}
