import React from "react";
import "./Testimonials.css";
import user from '../../../Images/Users/user.jpg'; // Adjust the path as necessary


const Testimonials = () => {

const testimonials = [
    {
        name: "Amaar.",
        text: "The cab was waiting at our apartment as requested for 4:45am Morning. Driver was professional and ride was smooth. Reservation was simple and quick. Highly recommend without a doubt.",
        img: user // place image in public folder
    },
    {
        name: "Riya",
        text: "The ride was a surprise for my wife's visit. She was thrilled and the driver was extremely nice.",
        img: user
    },
    {
        name: "Prem",
        text: "My ride and driver were great, he was very nice, talkative but not too much and ON TIME which is very important to me. I give your service a 5 out of 5 stars.",
        img: user
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
