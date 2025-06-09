import './RoomOptions.css';
import room1 from '../../../Images/HotelDetails/RoomOptions/room1.jpeg';
import room2 from '../../../Images/HotelDetails/RoomOptions/room2.jpeg';
import { useNavigate } from 'react-router-dom';

const RoomOptions = ({roomDetails}) => {
     if (!roomDetails) {
        return <div className="hotel-name">Loading Room details...</div>
    }

    console.log(roomDetails)

    // const rooms = [
    //     {
    //         title: 'Studio Suite',
    //         size: '42 m²/452 ft²',
    //         view: 'City view',
    //         bed: '1 king bed',
    //         image: room1
    //     },
    //     {
    //         title: 'Deluxe Room',
    //         size: '25 m²/269 ft²',
    //         view: 'City view',
    //         bed: '1 king bed',
    //         image: room2
    //     }
    // ];

    const navigate = useNavigate();
   
    const handleClick = ()=>{
        navigate("/addMembers")
    }
    return (
        <div className="room-options-container">
            <h2 className="title">
                Rooms available at Lemon Tree Premier, Mumbai International Airport
            </h2>
            <div className="room-cards-grid">
                {roomDetails.map((room) => (
                    <div className="room-card" key={room.id}>
                        <img src={room.image} alt={room.roomType} className="room-image" />
                        <div className="room-info">
                            <h3 >{room.roomType}</h3>
                            <p>🛏️ Room size: {room.capacity}</p>
                            <p>🌇 {room.view}</p>
                            <p>🛌 {room.bedType}</p>
                            <button className="price-button" onClick={handleClick}>Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomOptions;
