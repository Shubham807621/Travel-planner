import React from "react";
import "./Testimonials.css";


const Testimonials = () => {

const testimonials = [
    {
        name: "Kar S.",
        text: "The cab was waiting at our apartment as requested for 4:45am Morning. Driver was professional and ride was smooth. Reservation was simple and quick. Highly recommend without a doubt.",
        img: "./src/assets/Testimonials/user1.png", // place image in public folder
    },
    {
        name: "Charles J.",
        text: "The ride was a surprise for my wife's visit. She was thrilled and the driver was extremely nice.",
        img: "./src/assets/Testimonials/user2.png",
    },
    {
        name: "Talvin D.",
        text: "My ride and driver were great, he was very nice, talkative but not too much and ON TIME which is very important to me. I give your service a 5 out of 5 stars.",
        img: "./src/assets/Testimonials/user3.png",
    },
];
    return (
        <div className="testimonial-section">
            <h2>What customers have said</h2>
            <div className="testimonial-container">
                {testimonials.map((t, idx) => (
                    <div className="testimonial" key={idx}>
                        <div className="speech-bubble">
                            <p>{t.text}</p>
                        </div>
                        <div className="customer">
                            <img src={t.img} alt={t.name} />
                            <p>{t.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
