import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./Pages.styles/YoutubeMusic.css";
import Main from "./Main";
import MusicDataContextProvider from "../Contexts/MusicDataProvider";
import SignInModal from "../Components/SignInModal";
import MusicPlayerProvider from "../Contexts/MusicPlayerProvider";
import MusicPlayerController from "../Components/MusicPlayerController";

function YoutubeMusic() {
    return (
        <MusicDataContextProvider>
            <MusicPlayerProvider>
                <div className="youtube-music-app">
                    <Navbar></Navbar>
                    <Main />
                    {/* <SignInModal></SignInModal> */}
                </div>
                {/* <MusicPlayerController /> */}
            </MusicPlayerProvider>
        </MusicDataContextProvider>
    );
}

export default YoutubeMusic;
