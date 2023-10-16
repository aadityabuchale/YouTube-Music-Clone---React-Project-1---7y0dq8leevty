import React from "react";
import "./SquareCard.css";
import { useMusic } from "../../../Contexts/MusicPlayerProvider";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import { useMusicData } from "../../../Contexts/MusicDataProvider";

function SquareCard(props) {
    const { _id, thumbnail, image, title, name, artist, artists, description } =
        props.song;
    const { musicDispatch } = useMusic();
    const { albumArtistDispatch } = useMusicData();

    function handleCardClick(e) {
        if (name && thumbnail) {
            musicDispatch({ type: "setMusicId", payload: _id });
        } else {
            albumArtistDispatch({ type: "setAlbumArtistId", payload: _id });

            if (artists) {
                albumArtistDispatch({ type: "setAlbum" });
            } else {
                albumArtistDispatch({ type: "setArtist" });
            }

            albumArtistDispatch({
                type: "setAlbumArtistPage",
                payload: "active",
            });
        }
    }

    return (
        <div
            key={_id}
            className="music-card"
            onClick={(e) => handleCardClick(e)}
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

                <img src={thumbnail ? thumbnail : image} alt="" />
            </div>
            <div className="music-details">
                <p className="music-name">{title ? title : name}</p>
                <p className="music-artist">
                    {artist
                        ? artist
                              ?.map((a) => a.name)
                              .slice(0, 2)
                              .join(", ")
                        : artists
                        ? artists
                              ?.map((a) => a.name)
                              .slice(0, 2)
                              .join(", ")
                        : description?.substring(0, 25) + "..."}
                </p>
            </div>
        </div>
    );
}

export default SquareCard;
