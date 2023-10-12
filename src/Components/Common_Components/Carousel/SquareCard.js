import React from "react";
import "./SquareCard.css";
import { useMusic } from "../../../Contexts/MusicPlayerProvider";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";

function SquareCard(props) {
    const { _id, thumbnail, title, artist } = props.song;
    const { musicDispatch } = useMusic();
    return (
        <div
            key={_id}
            className="music-card"
            onClick={() => musicDispatch({ type: "setMusicId", payload: _id })}
        >
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

                <img src={thumbnail} alt="" />
            </div>
            <div className="music-details">
                <p className="music-name">{title}</p>
                <p className="music-artist">{artist[0]?.name}</p>
            </div>
        </div>
    );
}

export default SquareCard;
