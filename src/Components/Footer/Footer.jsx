import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {


    const location = useLocation();
    const hideElement = location.pathname.startsWith("/admin"); 
    return (
       
        <>
        
            {!hideElement &&(
                <footer className="footer">
                    <div className="footer-container">
                        {/* About Travel */}
                        <div>
                            <h3 className="footer-heading">ABOUT TRAVEL</h3>
                            <p className="footer-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
        
                        {/* Contact Information */}
                        <div>
                            <h3 className="footer-heading">CONTACT INFORMATION</h3>
                            <p className="footer-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <ul className="footer-list">
                                <li>📞 +01 (977) 2599 12</li>
                                <li>📧 company@domain.com</li>
                                <li>📍 3146 Koontz, California</li>
                            </ul>
                        </div>
        
                        {/* Latest Post */}
                        <div>
                            <h3 className="footer-heading">LATEST POST</h3>
                            <div className="footer-post">
                                <p className="post-title">
                                    Life is a beautiful journey not a destination
                                </p>
                                <p className="post-meta">August 17, 2021 | No Comments</p>
                            </div>
                            <div className="footer-post">
                                <p className="post-title">
                                    Take only memories, leave only footprints
                                </p>
                                <p className="post-meta">August 17, 2021 | No Comments</p>
                            </div>
                        </div>
        
                        {/* Subscribe Us */}
                        <div>
                            <h3 className="footer-heading">SUBSCRIBE US</h3>
                            <p className="footer-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <input
                                type="email"
                                placeholder="Your Email.."
                                className="footer-input"
                            />
                            <button className="footer-button">
                                SUBSCRIBE NOW
                            </button>
                        </div>
                    </div>
        
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="footer-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Term &amp; Condition</a>
                            <a href="#">FAQ</a>
                        </div>
                        <p>Copyright © 2021 Travele. All rights reserved</p>
                    </div>
                </footer>

            )}
        </>
    );
};

export default Footer;