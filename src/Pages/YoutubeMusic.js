import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./Pages.styles/YoutubeMusic.css";
import Main from "./Main";
import AppContext from "./AppContext";
import AppContextFunction from "./AppContext";

import { getAllSongs } from "../ApiService";

function YoutubeMusic() {
    return (
        <AppContextFunction>
            <div className="youtube-music-app">
                <Navbar></Navbar>
                <Main />
            </div>
        </AppContextFunction>
    );
}

export default YoutubeMusic;
