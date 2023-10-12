import React from "react";
import "./SmallSizeCard.css";
import { useMusic } from "../../../Contexts/MusicPlayerProvider";

import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

function SmallSizeCard({ song, count }) {
    const { _id, thumbnail, title, artist } = song;
    const { musicDispatch } = useMusic();

    return (
        <div
            key={_id}
            className="smusic-card"
            onClick={() => musicDispatch({ type: "setMusicId", payload: _id })}
        >
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
                <img src={thumbnail} alt="" />
            </div>
            <div className="count">
                <b>{count}</b>
            </div>

            <div className="hover-icons">
                <ThumbUpOffAltOutlinedIcon />
                <ThumbDownAltOutlinedIcon />
                <MoreVertOutlinedIcon />
            </div>

            <div className="smusic-details">
                <p className="smusic-name">
                    <b>{title}</b>
                </p>
                <p className="smusic-artist">
                    {artist
                        ?.map((a) => a.name)
                        .slice(0, 2)
                        .join(", ")}
                </p>
            </div>
        </div>
    );
}

export default SmallSizeCard;
