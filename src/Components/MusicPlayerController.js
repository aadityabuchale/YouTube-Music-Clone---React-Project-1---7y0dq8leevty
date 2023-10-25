import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
    const {
        musicId,
        musicStatus,
        musicDispatch,
        musicObject,
        isShuffle,
        isLoop,
        handlePlayerControls,
        handleAdditionalSettings,
    } = useMusic();

    const [audioUrl, setAudioUrl] = useState(
        "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf94e447ae38c3e33a7253.mp3"
    );

    const { _id, title, artist, thumbnail, audio_url } = musicObject;

    let artistName = artist && artist?.map((a) => a.name)?.join(" & ");

    const [songDuration, setSongDuration] = useState(0);

    const [currMin, setCurrMin] = useState(0);
    const [currSec, setCurrSec] = useState(0);
    const [remainingMin, setRemainingMin] = useState(0);
    const [remainaingSec, setRemainingSec] = useState(0);
    const [playPercent, setPlayPercent] = useState(0);

    // ----------------- handlers ------------------------------

    function handleAdditionalClick(e) {
        handleAdditionalSettings(e);

        if (e.target.classList.contains("downArrowIcon")) {
            handleMusicStop();
        }
    }

    function handlePrevClick() {
        handlePlayerControls("prev");
    }

    function handleNextClick() {
        handlePlayerControls("next");
    }

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

    // ------------------ playing the music --------------------

    // using use-sound hook
    const [play, { duration, pause, stop, sound }] = useSound(audioUrl, {
        format: "mp3",
        volume: 1,
    });

    const isFirstRender = useRef(true);
    const [isCapable, setIsCapable] = useState(false);

    // console.log(duration, audioUrl, title);

    useEffect(() => {
        setAudioUrl(audio_url);
    }, [audio_url]);

    // for handling current song when different song clicked
    useEffect(() => {
        return () => stop();
    }, [musicId]);

    // checking for second time render
    useEffect(() => {
        if (duration > 0) {
            resetTiming();
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

    //---------------- logic for changing duration of song ------------------

    function resetTiming() {
        setSongDuration((duration - (duration % 1000)) / 1000);
        setCurrSec(0);
        setCurrMin(0);
        setPlayPercent(0);
        if (duration >= 60000) {
            let sec = duration / 1000 - Math.floor(duration / 60000) * 60;
            sec = Math.floor(sec);
            let min = Math.floor(duration / 60000);
            setRemainingMin(min);
            setRemainingSec(sec);
        } else {
            let sec = duration / 1000;
            sec = Math.floor(sec);
            setRemainingSec(sec);
        }
    }

    useEffect(() => {
        let timer;
        if (musicStatus === "play") {
            timer = setTimeout(() => {
                // setting the percentage of duration
                setPlayPercent((currMin + (currSec + 1) / songDuration) * 100);

                // handling seconds
                if (currSec < 59) {
                    setCurrSec((prev) => prev + 1);
                } else {
                    setCurrSec(0);
                    setCurrMin((prev) => prev + 1);
                }
                // handeling remaining seconds
                if (remainaingSec > 1) {
                    setRemainingSec((prev) => prev - 1);
                } else {
                    // if the time has ended
                    if (remainaingSec === 1 && remainingMin === 0) {
                        stop();
                        resetTiming();

                        // if loop is on
                        if (isLoop) {
                            play();
                        } else {
                            handlePlayerControls("next");
                        }
                    } else {
                        remainaingSec;
                        setRemainingSec(59);
                        if (remainingMin > 0) {
                            setRemainingMin((prev) => prev - 1);
                        }
                    }
                }
            }, 1000);
        } else {
            clearTimeout(timer);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [remainaingSec, isCapable, musicStatus]);

    //icon styles
    const iconStyles = {
        display: "inline",
        fontSize: "30px",
        ":active": {
            scale: "1.2",
        },
    };

    return createPortal(
        <section className="controller-container">
            {/* left side controls */}
            <div className="player-controls">
                <SkipPreviousIcon sx={iconStyles} onClick={handlePrevClick} />

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

                <SkipNextIcon sx={iconStyles} onClick={handleNextClick} />

                <div className="music-duration">
                    <span>
                        {currMin <= 9 ? "0" + currMin : currMin}:
                        {currSec <= 9 ? "0" + currSec : currSec}
                    </span>
                    / <span>{duration / 1000}</span>
                </div>
            </div>

            {/* center display information */}
            {musicObject && (
                <div className="music-info">
                    <img src={thumbnail} alt="" />
                    <div className="music-artist-name">
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
            <div
                className="additional-controls"
                onClick={handleAdditionalClick}
            >
                <SpeakerIcon color={"#909090"} />
                <LoopIcon color={isLoop ? "#ffffff" : "#909090"} />
                <ShuffleIcon color={isShuffle ? "#ffffff" : "#909090"} />
                <ArrowDropDownIcon sx={iconStyles} className="downArrowIcon" />
            </div>
        </section>,
        document.querySelector(".music-player-controller")
    );
}

export default MusicPlayerController;
