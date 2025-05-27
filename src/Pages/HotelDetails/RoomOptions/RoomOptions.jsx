import './RoomOptions.css';
import room1 from '../../../Images/HotelDetails/RoomOptions/room1.jpeg'
import room2 from '../../../Images/HotelDetails/RoomOptions/room2.jpeg'

const rooms = [
    {
        title: 'Studio Suite',
        size: '42 m²/452 ft²',
        view: 'City view',
        bed: '1 king bed',
        image: room1
    },
    {
        title: 'Deluxe Room',
        size: '25 m²/269 ft²',
        view: 'City view',
        bed: '1 king bed',
        image: room2
    }
];

const RoomOptions = () => {
    return (
        <div className="room-options-container">
            <h2>Rooms available at Lemon Tree Premier, Mumbai International Airport</h2>
            <div className="room-cards-grid">
                {rooms.map((room, index) => (
                    <div className="room-card" key={index}>
                        <img src={room.image} alt={room.title} className="room-image" />
                        <div className="room-info">
                            <h3>{room.title}</h3>
                            <p>🛏️ Room size: {room.size}</p>
                            <p>🌇 {room.view}</p>
                            <p>🛌 {room.bed}</p>
                            <button className="price-button">Enter dates to see prices</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomOptions;
