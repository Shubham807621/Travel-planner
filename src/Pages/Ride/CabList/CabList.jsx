import "./CabList.css";

const CabList = () => {
    const cabs = [
        {
            name: "Indica, Swift or similar",
            rating: "4.7",
            fuel: "CNG",
            price: "2,024",
            originalPrice: "2,625",
            tax: "+₹603 (Taxes & Charges)",
            ac: true,
            seats: 4,
            image: "./src/assets/cab4.jpeg",
        },
        {
            name: "SUV or similar",
            rating: "4.3",
            fuel: "Diesel",
            price: "2,292",
            originalPrice: "2,951",
            tax: "+₹617 (Taxes & Charges)",
            ac: false,
            seats: 6,
            image: "./src/assets/cab.jpeg",
        },
        {
            name: "Dzire, Etios or similar",
            rating: "4.5",
            fuel: "CNG",
            price: "2,073",
            originalPrice: "2,796",
            tax: "+₹723 (Taxes & Charges)",
            note: "Roof carrier available with this car starting @ INR 209",
            ac: true,
            seats: 4,
            image: "./src/assets/cab4.jpeg",
        },
        {
            name: "SUV or similar",
            rating: "4.3",
            fuel: "Diesel",
            price: "2,292",
            originalPrice: "2,951",
            tax: "+₹617 (Taxes & Charges)",
            ac: false,
            seats: 6,
            image: "./src/assets/cab.jpeg",
        },
    ];

    return (
        <div className="cab-list">
            {cabs.map((cab, index) => (
                <div className="cab-card" key={index}>
                    <div className="cab-content">
                        <div className="cab-image">
                            <img src={cab.image} alt={cab.name} />
                        </div>
                        <div className="cab-info">
                            <div className="car-name-rating">
                                <span className="car-name">{cab.name}</span>
                                <span className="rating">⭐ {cab.rating}</span>
                            </div>
                            <span className={`fuel ${cab.fuel.toLowerCase()}`}>{cab.fuel}</span>
                            <div className="seats">{cab.seats} Seater • {cab.ac ? "AC" : "Non-AC"}</div>
                            {cab.note && <div className="note">{cab.note}</div>}
                            <div className="bottom">
                                <div className="price">
                                    <span className="original-price">₹{cab.originalPrice}</span>
                                    <span className="tax">{cab.tax}</span>
                                </div>
                                <div className="action">
                                    <span className="final-price">₹{cab.price}</span>
                                    <button className="select-btn">SELECT CAB</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CabList;
