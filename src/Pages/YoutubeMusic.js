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
import AllMusicPage from "./AllMusicPage";
import SignInModal from "../Components/SignInModal";
import { useMusicAuth } from "../Contexts/MusicAuthProvider";

function YoutubeMusic() {
    const { searchDispatch } = useMusicLogic();
    const { musicController, musicPlayer } = useMusic();
    const { authDispatch, userModal } = useMusicAuth();

    function handleAppClick(e) {
        if (
            !e.target.classList.contains("showSearchResults") &&
            !e.target.parentNode.classList.contains("showSearchResults")
        ) {
            searchDispatch({ type: "setSearchResultBox", payload: "inactive" });
        }

        if (
            !e.target.classList.contains("keepSigninModal") &&
            !e.target.parentNode.classList.contains("keepSigninModal") &&
            !e.target.parentNode.parentNode.classList.contains(
                "keepSigninModal"
            )
        ) {
            authDispatch({ type: "hideModal" });
        }
    }

    return (
        <div className="youtube-music-app" onClick={handleAppClick}>
            <Navbar />
            <Main>
                <Routes>
                    <Route path="/Home" element={<Home />} />
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
                    {/* search page route */}
                    <Route
                        path="searchpage/:input"
                        element={<SearchResultPage />}
                    ></Route>{" "}
                    {/* all music route */}
                    <Route
                        path={"/allsongs/:musicType/:heading"}
                        element={<AllMusicPage />}
                    ></Route>
                    {/* for handling wrong route */}
                    <Route path="*" element={<Home />}></Route>
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
