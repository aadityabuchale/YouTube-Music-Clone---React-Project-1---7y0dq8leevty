import React, { useEffect, useState } from "react";
import "./SmallSizeCard.css";
import { useMusic } from "../../../Contexts/MusicPlayerProvider";

import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { getAlbumOrArtist } from "../../../ApiService";
import { useMusicData } from "../../../Contexts/MusicDataProvider";
import { useMusicLogic } from "../../../Contexts/MusicLogicsProvider";
import { useNavigate } from "react-router-dom";

function SmallSizeCard({
    song,
    count,
    isProfileCard,
    isSearchCard,
    musicList,
    isCurrentSong,
}) {
    const { _id, thumbnail, title, artist, image, name, description, artists } =
        song;

    const [artistNames, setArtistNames] = useState([]);
    const { setPlayerData, musicDispatch } = useMusic();
    const { isAlbum, albumArtistSongsList } = useMusicData();
    const { artistsResult, songsResult, albumsResult } = useMusicLogic();
    const navigate = useNavigate();

    // Function to fetch data for a single ID
    async function fetchData(id) {
        try {
            const response = await getAlbumOrArtist(id, false);

            setArtistNames((prev) => [...prev, response]);
            return response;
        } catch (error) {
            console.error(`Error fetching data for ID ${id}:`, error);
        }
    }

    // Iterate over IDs and fetch data for each ID
    useEffect(() => {
        if (isSearchCard) {
            if (artist) {
                // Create an array of promises by mapping IDs to fetchData calls
                artist.map((id) => fetchData(id));
            }

            if (artists) {
                // album has artists so using this check
                artists.map((id) => fetchData(id));
            }
        }
    }, [artist, artists, isSearchCard]);

    // setting styles conditionalliy according to card type we want for searchpage and for album or artist page card
    const musicCardStyles = isSearchCard
        ? {
              height: "70px",
              fontSize: "16px",
              alignItems: "center",
              borderBottom: "0.5px solid #121",

              backgroundColor: isCurrentSong && "#1d1d1d",
          }
        : {
              borderBottom: "0.9px solid #121",

              backgroundColor: isCurrentSong && "#1d1d1d",
          };

    function handleCardClick() {
        musicDispatch({
            type: "setMusicList",
            songsList: isProfileCard
                ? albumArtistSongsList
                : isSearchCard
                ? [[...artistsResult], [...songsResult], [...albumsResult]]
                : musicList,
        });
        navigate(`../musicPlayer/${_id}`);
    }

    return (
        <div
            key={_id}
            className="smusic-card"
            onClick={() => handleCardClick()}
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
                <p
                    className="smusic-artist"
                    style={{
                        color: isSearchCard ? "#909090" : "#bbb",
                        fontSize: !isSearchCard ? "14px" : "16px",
                    }}
                >
                    {
                        // if artistNames present
                        artistNames.length > 0
                            ? artistNames
                                  ?.map((a) => {
                                      return a?.name;
                                  })
                                  .slice(0, 3)
                                  .join(", ")
                            : artist
                            ? artist
                                  ?.map((a) => {
                                      return a?.name;
                                  })
                                  .slice(0, 3)
                                  .join(", ")
                            : artists
                            ? artists
                                  ?.map((a) => {
                                      return a?.name;
                                  })
                                  .slice(0, 3)
                                  .join(", ")
                            : description?.substring(0, 25) + "..."
                    }
                </p>
            </div>
        </div>
    );
}

export default React.memo(SmallSizeCard);
