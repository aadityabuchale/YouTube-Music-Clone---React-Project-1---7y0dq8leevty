import React from "react";
import "./SquareCard.css";

import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";

function ArtistsCard(props) {
    const { _id, image, name, description } = props.artist;

    return (
        <div key={_id} className="music-card">
            <div className="image">
                <div className="play-btn-bg">
                    <PlayArrowSharpIcon
                        sx={{
                            fontSize: "35px",
                            opacity: 1,
                            zIndex: "5",
                        }}
                    />
                </div>

                <img src={image} alt="" />
            </div>
            <div className="music-details">
                <p className="music-name">
                    <b>{name}</b>
                </p>
                <p className="music-artist">
                    {description.substring(0, 25) + "..."}
                </p>
            </div>
        </div>
    );
}

export default ArtistsCard;
