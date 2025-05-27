// HotelGallery.jsx
import "./HotelGallery.css";

const photos = [
    { src: "../src/assets/HotelGallery/frontview.jpeg", alt: "Hotel Front" },
    { src: "../src/assets/HotelGallery/hotelroom.jpeg", alt: "Hotel Room" },
    { src: "../src/assets/HotelGallery/dining.jpeg", alt: "Dining Area" },
    { src: "../src/assets/HotelGallery/Lobby.jpeg", alt: "Lobby" },
    { src: "../src/assets/HotelGallery/poolviewnight.jpeg", alt: "Pool Night View" },
    { src: "../src/assets/HotelGallery/Resturant.jpeg", alt: "Restaurant" },
    { src: "../src/assets/HotelGallery/poolviewday.jpeg", alt: "Day Pool View" },
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

