import React, { useState } from 'react';
import './DetailsSection.css';
import Weather from '../../../Components/Weather/Weather';

const DetailsSectionTabs = [
    'Overview',
    'Trip Recommendations',
    'Weather'
];

const MainPage = () => {
    const [activeTab, setActiveTab] = useState('Overview');

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
                                Occaecat pariatur! Quaerat ligula, ab, consequuntur orci mus ultricies praesent aute blandit beatae
                                nisl aut, totam mauris rhoncus? Tellus netus fringilla class auctor dui. Dolores excepteur, doloribus,
                                blanditiis aliquid nisl. Occaecat iusto? Provident sociis rerum.
                            </p>
                            <p>
                                Occaecat pariatur! Quaerat ligula, ab, consequuntur orci mus ultricies praesent aute blandit beatae
                                nisl aut, totam mauris rhoncus? Tellus netus fringilla class auctor dui.
                            </p>
                            <ul className="feature-list">
                                <li>Travel cancellation insurance</li>
                                <li>Breakfast and dinner included</li>
                                <li>Health care included</li>
                                <li>Transfer to the airport and return to the agency</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                            </ul>
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
