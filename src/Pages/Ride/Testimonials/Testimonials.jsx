import React from "react";
import "./Testimonials.css";
import { testimonials } from "./RideBookingForm";

const Testimonials = () => {
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
