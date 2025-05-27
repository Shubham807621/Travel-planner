import React from 'react';
import Slider from 'react-slick';
import './GallerySection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GallerySection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d2",
    "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  ];

  return (
    <div className="gallery-section">
      <div className="gallery-left">
        <h3>GALLERY / PHOTOS</h3>
        <Slider {...settings} className="gallery-slider">
          {images.map((url, index) => (
            <div key={index} className="slide-img-container">
              <img src={url} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="gallery-right">
        <h5><span className="line"></span> MORE PACKAGES</h5>
        <h3>OTHER TRAVEL PACKAGES</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.
        </p>
        <ul className="packages-list">
          <li>📌 Vacation packages</li>
          <li>📌 Honeymoon packages</li>
          <li>📌 New year packages</li>
          <li>📌 Weekend packages</li>
        </ul>
      </div>
    </div>
  );
};

export default GallerySection;


