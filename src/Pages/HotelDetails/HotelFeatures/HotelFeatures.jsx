import './HotelFeatures.css';
import { FaCheckCircle, FaParking, FaWifi, FaSpa, FaUtensils, FaDumbbell, FaConciergeBell, FaCocktail, FaHeartbeat } from 'react-icons/fa';
import { MdLocationOn, MdOutlineAccessTime, MdTransferWithinAStation } from 'react-icons/md';
import { GiCroissant } from 'react-icons/gi';
import { RiHotelBedLine } from 'react-icons/ri';
import { AiFillAlert } from 'react-icons/ai';

function HotelFeatures() {
    return (
        <div className="hotel-features">
            {/* Highlights */}
            <div className="feature-box">
                <h2>Highlights</h2>
                <div className="highlight-list">
                    <div className="feature-item">
                        <FaHeartbeat className="icon green" />
                        <span>Hygiene Plus</span>
                    </div>
                    <div className="feature-item">
                        <MdLocationOn className="icon red" />
                        <span>Located in heart of Mumbai</span>
                    </div>
                    <div className="feature-item">
                        <MdOutlineAccessTime className="icon blue" />
                        <span>Check-in [24-hour]</span>
                    </div>
                    <div className="feature-item">
                        <MdTransferWithinAStation className="icon purple" />
                        <span>Airport transfer</span>
                    </div>
                    <div className="feature-item">
                        <GiCroissant className="icon gold" />
                        <span>Great Breakfast</span>
                    </div>
                </div>
            </div>

            {/* Facilities */}
            <div className="feature-box">
                <h2>Facilities</h2>
                <div className="facility-list">
                    <div><FaWifi /> <span>Free Wi-Fi</span></div>
                    <div><FaParking /> <span>Free parking</span></div>
                    <div><FaSpa /> <span>Spa</span></div>
                    <div><FaConciergeBell /> <span>Front desk [24-hour]</span></div>
                    <div><FaDumbbell /> <span>Fitness center</span></div>
                    <div><FaUtensils /> <span>Restaurant</span></div>
                    <div><FaCocktail /> <span>Bar</span></div>
                    <div><RiHotelBedLine /> <span>Massage</span></div>
                </div>
            </div>

            {/* High Demand Notice */}
            <div className="demand-notice">
                <AiFillAlert className="alert-icon" />
                <div>
                    <strong>This property is in high demand!</strong><br />
                    8 travelers have booked today.
                </div>
            </div>
        </div>
    );
}

export default HotelFeatures;
