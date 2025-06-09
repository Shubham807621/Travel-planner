import React, { useState } from 'react';
import './DetailsSection.css';
import Weather from '../../../Components/Weather/Weather';

const DetailsSectionTabs = [
    'Overview',
    'Weather'
];

const MainPage = ({ hoteldetails }) => {
    const [activeTab, setActiveTab] = useState('Overview');
    if (!hoteldetails) {
        return <div className="hotel-name">Loading hotel details...</div>;
    }

    return (
        <div>
            {/* Content Area */}
            <div className="details-wrapper">
                {/* Left: Tab content */}
                <div className="tab-content">
                    <div className="tabs">
                        {DetailsSectionTabs.map((tab) => (
                            <button
                                key={tab}
                                className={activeTab === tab ? 'active' : ''}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {activeTab === 'Overview' && (
                        <div>
                            <p>
                                {hoteldetails.description}
                            </p>
                       

                        </div>
                    )}
                    
                    {activeTab === 'Weather' && (
                        <div>
                              <Weather/>
                        </div>
                    )}

                  
                </div>

                {/* Right: Travel tips */}
                <div className="travel-tips-box">
                    <h5><span className="line"></span> TRAVEL TIPS</h5>
                    <h3>NEED TRAVEL RELATED <br /> TIPS & INFORMATION</h3>
                    <p>
                        Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent,
                        odit placeat.
                    </p>
                    <button className="quote-btn">GET A QUOTE</button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
