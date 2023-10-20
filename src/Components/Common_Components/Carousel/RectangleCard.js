import React from "react";
import "./RectangleCard.css";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import { useMusic } from "../../../Contexts/MusicPlayerProvider";

function RectangleCard(props) {
    const { _id, thumbnail, title, artist } = props.song;
    const { musicDispatch } = useMusic();

    function handleOpenMusicPlayer() {
        musicDispatch({
            type: "setMusicId",
            payload: _id,
            songsList: props.musicList,
        });
        musicDispatch({ type: "setMusicPlayer", payload: "active" });
    }

    return (
        <div
            key={_id}
            className="rmusic-card"
            onClick={() => handleOpenMusicPlayer()}
        >
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
