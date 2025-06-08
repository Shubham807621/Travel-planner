import React from "react";
import "./MapCoverage.css";

const markers = [
    { label: "850+", top: "57%", left: "22%", region: "Hydrabad" },
    { label: "600+", top: "31%", left: "38%", region: "Maharashtra" },
    { label: "250+", top: "24%", left: "70%", region: "Kashmir" },
    { label: "50+", top: "30%", left: "57%", region: "Somnath" },
    { label: "100+", top: "60%", left: "55%", region: "Manipur" },
    { label: "150+", top: "47%", left: "44%", region: "Indore" },
    { label: "75+", top: "61%", left: "81%", region: "Trivendrum" },
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
