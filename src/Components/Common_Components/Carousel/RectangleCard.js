import React from "react";
import "./RectangleCard.css";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";

function RectangleCard(props) {
    const { _id, thumbnail, title, artist } = props.song;

    return (
        <div key={_id} className="rmusic-card">
            <div className="rimage">
                <PlayArrowSharpIcon
                    sx={{
                        fontSize: "50px",
                        opacity: 0.9,
                        position: "absolute",
                        top: "42%",
                        zIndex: "5",
                    }}
                />
                <img src={thumbnail} alt="" />
            </div>
            <div className="rmusic-details">
                <p className="rmusic-name">
                    <b>{title}</b>
                </p>
                <p className="rmusic-artist">{artist[0]?.name}</p>
            </div>
        </div>
    );
}

export default RectangleCard;
