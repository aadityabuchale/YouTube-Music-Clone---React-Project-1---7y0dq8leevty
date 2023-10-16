import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./Pages.styles/YoutubeMusic.css";
import Main from "./Main";
import SignInModal from "../Components/SignInModal";
import MusicPlayerController from "../Components/MusicPlayerController";
import { useMusicLogic } from "../Contexts/MusicLogicsProvider";

function YoutubeMusic() {
    const { searchDispatch } = useMusicLogic();

    function handleAppClick(e) {
        if (
            !e.target.classList.contains("showSearchResults") &&
            !e.target.parentNode.classList.contains("showSearchResults")
        ) {
            searchDispatch({ type: "setSearchResultBox", payload: "inactive" });
        }
    }

    return (
        <div className="youtube-music-app" onClick={handleAppClick}>
            <Navbar></Navbar>
            <Main />
            {/* <SignInModal></SignInModal> */}
            {/* <MusicPlayerController /> */}
        </div>
    );
}

export default YoutubeMusic;
