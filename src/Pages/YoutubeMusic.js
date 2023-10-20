import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./Pages.styles/YoutubeMusic.css";
import Main from "./Main";
import MusicPlayerController from "../Components/MusicPlayerController";
import { useMusicLogic } from "../Contexts/MusicLogicsProvider";
import { useMusic } from "../Contexts/MusicPlayerProvider";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./Home";
import Explore from "./Explore";
import Library from "./Library";
import Upgrade from "./Upgrade";

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
            <Navbar />
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="explore" element={<Explore />} />
                    <Route path="upgrade" element={<Upgrade />} />
                    <Route path="library" element={<Library />} />
                </Routes>
            </Main>
        </div>
    );
}

export default YoutubeMusic;
