import React from "react";
import "./SmallSizeCard.css";
import { useMusic } from "../../../Contexts/MusicPlayerProvider";

import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

function SmallSizeCard({ song, count, isProfileCard, isSearchCard }) {
    const { _id, thumbnail, title, artist, image, name, description, artists } =
        song;
    const { musicDispatch } = useMusic();

    console.log(artist);

    // setting styles conditionalliy according to card type we want for searchpage and for album or artist page card
    const musicCardStyles = isSearchCard
        ? {
              height: "70px",
              fontSize: "16px",
              alignItems: "center",
              borderBottom: "0.5px solid #121",
              marginBottom: "5px",
          }
        : {
              borderBottom: isSearchCard && "0.9px solid #121",
              marginBottom: isSearchCard && "5px",
          };

    return (
        <div
            key={_id}
            className="smusic-card"
            onClick={() => musicDispatch({ type: "setMusicId", payload: _id })}
            style={musicCardStyles}
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
                <img src={image ? image : thumbnail} alt="" />
            </div>

            {!isProfileCard && (
                <div className="count">
                    <b>{count}</b>
                </div>
            )}

            <div className="hover-icons">
                {!isSearchCard && <ThumbUpOffAltOutlinedIcon />}
                {!isSearchCard && <ThumbDownAltOutlinedIcon />}
                <MoreVertOutlinedIcon />
            </div>

            {/* music card text details */}
            <div
                className={`smusic-details  ${
                    isProfileCard && "profilecard-music-details"
                } ${isSearchCard && "searchpage-music-details"}`}
            >
                <p
                    className="smusic-name"
                    style={{ width: isProfileCard && "50%" }}
                >
                    <b>{title ? title : name}</b>
                </p>
                <p className="smusic-artist">
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

export default SmallSizeCard;
