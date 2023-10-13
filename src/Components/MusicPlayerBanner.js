import React from "react";
import "./Components.styles/MusicPlayerBanner.css";

function MusicPlayerBanner({ imgSrc }) {
    return (
        <div className="banner-container">
            <img src={imgSrc} />
        </div>
    );
}

export default MusicPlayerBanner;
