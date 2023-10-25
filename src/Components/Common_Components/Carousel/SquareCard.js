import React from "react";
import "./SquareCard.css";
import { useMusic } from "../../../Contexts/MusicPlayerProvider";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import { useMusicData } from "../../../Contexts/MusicDataProvider";
import { useNavigate } from "react-router-dom";

function SquareCard({ song, musicList, allMusicCard }) {
    const { _id, thumbnail, image, title, name, artist, artists, description } =
        song;
    const navigate = useNavigate();
    const { musicDispatch } = useMusic();
    const { albumArtistDispatch } = useMusicData();

    // square card is used for songs albums and artists so navigating accordingly
    function handleCardClick(e) {
        if (title && thumbnail) {
            //song click
            musicDispatch({
                type: "setMusicList",
                songsList: musicList,
            });
            navigate(`musicPlayer/${_id}`);
        } else {
            if (artists) {
                // album click
                navigate(`../playlist/${"album"}/${_id}`);
            }
            // artist click
            else {
                navigate(`../playlist/${"artist"}/${_id}`);
            }
        }
    }

    return (
        <div
            key={_id}
            className={`music-card ${allMusicCard ? "hovered-card" : ""}`}
            onClick={(e) => handleCardClick(e)}
            style={{
                borderRadius: allMusicCard && "5px",
                padding: allMusicCard && "5px",
                width: allMusicCard && "200px",
                height: allMusicCard && "250px",
            }}
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

export default React.memo(SquareCard);
