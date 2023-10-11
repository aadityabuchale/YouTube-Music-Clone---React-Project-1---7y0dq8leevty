import React from "react";
import "./SquareCard.css";

import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";

function AlbumCard({ album, isRectangle }) {
    const { _id, image, title, artists } = album;

    let musicCardStyles = isRectangle
        ? { minWidth: "285px", height: "90%", borderRadius: "3px" }
        : {};

    return (
        <div key={_id} className="music-card" style={musicCardStyles}>
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
                    <b>{title}</b>
                </p>
                <p className="music-artist">
                    {artists
                        ?.map((a) => a.name)
                        .slice(0, 2)
                        .join(", ")}
                </p>
            </div>
        </div>
    );
}

export default AlbumCard;
