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
import AlbumOrArtistPage from "./AlbumOrArtistPage";
import MusicPlayer from "./MusicPlayer";
import MusicPlayerBanner from "../Components/MusicPlayerBanner";
import SearchResultPage from "./SearchResultPage";

function YoutubeMusic() {
    const { searchDispatch } = useMusicLogic();
    const { musicController, musicPlayer } = useMusic();

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
                    <Route path="Explore" element={<Explore />} />
                    <Route path="Upgrade" element={<Upgrade />} />
                    <Route path="Library" element={<Library />} />

                    <Route
                        path="playlist/:profileType/:id"
                        element={<AlbumOrArtistPage />}
                    ></Route>

                    <Route
                        path="musicPlayer/:id"
                        element={<MusicPlayer />}
                    ></Route>
                    <Route path="*" element={<Home />}></Route>

                    <Route
                        path="searchpage/:input"
                        element={<SearchResultPage />}
                    ></Route>
                </Routes>
            </Main>

            {musicPlayer === "inactive" && musicController === "active" && (
                <MusicPlayerBanner />
            )}
            {musicController === "active" && <MusicPlayerController />}
        </div>
    );
}

export default YoutubeMusic;
