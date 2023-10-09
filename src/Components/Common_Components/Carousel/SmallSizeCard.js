import React from "react";
import "./SmallSizeCard.css";

import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";

function SmallSizeCard(props) {
    return (
        <div key={props.song?._id} className="music-card">
            <div className="simage">
                <PlayArrowSharpIcon
                    className="play-icon"
                    sx={{
                        opacity: 0,
                        fontSize: "30px",
                        position: "absolute",
                        top: "10%",
                        left: "20%",
                        zIndex: "5",
                    }}
                />
                <img src={props.song?.thumbnail} alt="" />
            </div>
            <div className="count">
                <b>{props.count}</b>
            </div>

            <div className="smusic-details">
                <p className="smusic-name">
                    <b>{props.song?.title}</b>
                </p>
                <p className="smusic-artist">
                    {props.song?.artist?.map((a) => a.name).join(", ")}
                </p>
            </div>
        </div>
    );
}

export default SmallSizeCard;
