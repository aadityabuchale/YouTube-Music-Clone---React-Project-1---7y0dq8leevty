import React from "react";
import "./RectangleCard.css";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";

function RectangleCard(props) {
    return (
        <div key={props.song?._id} className="music-card">
            <div className="image">
                <PlayArrowSharpIcon
                    sx={{
                        fontSize: "50px",
                        opacity: 0.9,
                        position: "absolute",
                        top: "42%",
                        zIndex: "5",
                    }}
                />
                <img src={props.song?.thumbnail} alt="" />
            </div>
            <div className="music-details">
                <p className="music-name">{props.song?.title}</p>
                <p className="music-artist">{props.song?.artist[0]?.name}</p>
            </div>
        </div>
    );
}

export default RectangleCard;
