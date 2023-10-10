import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./Pages.styles/YoutubeMusic.css";
import Main from "./Main";
import MusicDataContextFunction from "../Contexts/MusicDataContext";

function YoutubeMusic() {
    return (
        <MusicDataContextFunction>
            <div className="youtube-music-app">
                <Navbar></Navbar>
                <Main />
            </div>
        </MusicDataContextFunction>
    );
}

export default YoutubeMusic;
