import React from "react";
import "./Components.styles/MusicPlayerBanner.css";
import { useMusic } from "../Contexts/MusicPlayerProvider";
import { useNavigate } from "react-router-dom";

function MusicPlayerBanner() {
    const { musicPlayer, musicObject, handleMusicPlayer } = useMusic();
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate("../musicPlayer/" + musicObject?._id)}
            className={`${
                musicPlayer === "inactive" ? "banner-small" : "banner-container"
            }`}
        >
            <img src={musicObject?.thumbnail} />
        </div>
    );
}

export default MusicPlayerBanner;
