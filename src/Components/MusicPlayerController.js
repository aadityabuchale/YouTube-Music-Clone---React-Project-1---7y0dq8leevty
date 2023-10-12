import React, { useEffect, useRef, useState } from "react";
import "./Components.styles/MusicPlayerController.css";
import { SpeakerIcon, LoopIcon, ShuffleIcon } from "../svgs/MusicPlayerSvgs";
import { useMusic } from "../Contexts/MusicPlayerProvider";

import useSound from "use-sound";

//mui imports
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

function MusicPlayerController() {
    // gettting data from context
    const { musicId, musicStatus, musicDispatch, musicObject } = useMusic();
    const [audioUrl, setAudioUrl] = useState("");

    const { _id, title, artist, thumbnail, audio_url } = musicObject;

    let artistName = artist && artist?.map((a) => a.name)?.join(" & ");

    // using use-sound hook
    const [play, { pause, stop, duration }] = useSound(audioUrl, {
        volume: 1,
    });

    const isFirstRender = useRef(true);
    const [isCapable, setIsCapable] = useState(false);

    useEffect(() => {
        setAudioUrl(() => audio_url);
    }, [audio_url]);

    // for handling current song when different song clicked
    useEffect(() => {
        if (musicId) {
            musicDispatch({ type: "play" });
            stop();
        }

        return () => stop();
    }, [musicId]);

    // checking for second time render

    useEffect(() => {
        if (duration > 0) {
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
        }
        play();
        if (musicStatus === "play") {
            setIsCapable(true);
        }

        return () => stop();
    }, [duration]);

    useEffect(() => {
        if (isCapable) {
            if (musicStatus === "play") {
                play();
            } else {
                pause();
            }
        }
    }, [musicStatus]);

    //icon styles
    const iconStyles = {
        pointerEvents: "none",
        display: "inline",
        fontSize: "30px",
    };

    function handleMusicPause() {
        musicDispatch({ type: "pause" });
    }

    function handleMusicPlay() {
        musicDispatch({ type: "play" });
    }

    function handleMusicStop() {
        stop();
        musicDispatch({ type: "stop" });
    }

    return (
        <section className="controller-container">
            {/* left side controls */}
            <div className="player-controls">
                <SkipPreviousIcon sx={iconStyles} />

                {/* handling play pause button */}
                {musicStatus === "pause" ? (
                    <PlayArrowIcon
                        sx={{ fontSize: "50px" }}
                        onClick={handleMusicPlay}
                    />
                ) : (
                    <PauseIcon
                        sx={{ fontSize: "50px" }}
                        onClick={handleMusicPause}
                    />
                )}

                <SkipNextIcon sx={iconStyles} />
                <div className="music-duration">
                    <span>{duration}</span>/ <span>02:00</span>
                </div>
            </div>

            {/* center display information */}
            {musicObject && (
                <div className="music-details">
                    <img src={thumbnail} alt="" />
                    <div className="music-info">
                        <div className="music-name">{title}</div>
                        <div className="artist-name">{artistName}</div>
                    </div>
                    <div className="music-buttons">
                        <ThumbUpOffAltOutlinedIcon sx={iconStyles} />
                        <ThumbDownAltOutlinedIcon sx={iconStyles} />
                        <MoreVertOutlinedIcon sx={iconStyles} />
                    </div>
                </div>
            )}

            {/* right side icons */}
            <div className="additional-controls">
                <SpeakerIcon />
                <LoopIcon />
                <ShuffleIcon />
                <ArrowDropDownIcon sx={iconStyles} />
            </div>
        </section>
    );
}

export default MusicPlayerController;
