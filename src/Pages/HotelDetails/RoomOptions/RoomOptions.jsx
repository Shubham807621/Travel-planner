import './RoomOptions.css';
import room1 from '../../../Images/HotelDetails/RoomOptions/room1.jpeg';
import room2 from '../../../Images/HotelDetails/RoomOptions/room2.jpeg';
import { useNavigate } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const RoomOptions = ({ roomDetails }) => {
    if (!roomDetails) {
        return <div className="hotel-name">Loading Room details...</div>
    }

    const navigate = useNavigate();
    console.log(roomDetails);
    const handleClick = (room) => {
        localStorage.setItem("selectedRoom", JSON.stringify(room));
        navigate("/booking");
    };
    return (
        <div className="room-options-container">
            <h2 className="title">
                Rooms available at Lemon Tree Premier, Mumbai International Airport
            </h2>
            <div className="room-cards-grid">
                {roomDetails.map((room) => (
                    <div className="room-card" key={room.id}>
                        <img src={room.imgUrl} alt={room.roomType} className="room-image" />
                        <div className="room-info">
                            <h3>{room.roomType}</h3>
                            <p>🛏️ Room size: {room.capacity}</p>
                            <p>🌇 {room.view}</p>
                            <p>🛌 {room.bedType}</p>
                            <p className="room-price">
                                ₹{room.pricePerNight}
                                <CurrencyRupeeIcon className="rupee-icon" />
                            </p>

                            {room.available ? (
                                <button className="price-button" onClick={() => handleClick(room)}>
                                    Book Now
                                </button>
                            ) : (
                                <button className="price-button not-available" disabled>
                                    Not Available
                                </button>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default RoomOptions;
