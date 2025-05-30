import React from "react";
import "./MapCoverage.css";

const markers = [
    { label: "850+", top: "25%", left: "15%", region: "North America" },
    { label: "600+", top: "31%", left: "47%", region: "Europe" },
    { label: "250+", top: "15%", left: "80%", region: "Asia" },
    { label: "50+", top: "40%", left: "70%", region: "Central Asia" },
    { label: "100+", top: "60%", left: "55%", region: "Africa" },
    { label: "150+", top: "74%", left: "30%", region: "South America" },
    { label: "75+", top: "75%", left: "82%", region: "Australia" },
];

const MapCoverage = () => {
    return (
        <div className="map-container">
            <h2>Global coverage in over 2000 airports around the world</h2>
            <div className="map">
                {markers.map((marker, idx) => (
                    <div
                        key={idx}
                        className="marker"
                        style={{ top: marker.top, left: marker.left }}
                        title={marker.region}
                    >
                        <span>{marker.label}</span>
                        <div className="tooltip">{marker.region}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MapCoverage;
