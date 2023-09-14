import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./Pages.styles/YoutubeMusic.css";
import Main from "./Main";
import { getAllSongs } from "../ApiService";

function YoutubeMusic() {
    useEffect(() => {
        let func = async () => {
            const data = await getAllSongs();
        };

        func();
    }, []);

    return (
        <div className="youtube-music-app">
            <Navbar></Navbar>
            <Main />
        </div>
    );
}

export default YoutubeMusic;
