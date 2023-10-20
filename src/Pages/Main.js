import React, { useContext } from "react";
import Home from "./Home";
import Header from "../Components/Header";
import { MusicDataContext, useMusicData } from "../Contexts/MusicDataProvider";
import "./Pages.styles/Main.css";
import Explore from "./Explore";
import Library from "./Library";
import Upgrade from "./Upgrade";
import MusicPlayer from "./MusicPlayer";
import AlbumOrArtistPage from "./AlbumOrArtistPage";
import SearchResultPage from "./SearchResultPage";
import { useMusicLogic } from "../Contexts/MusicLogicsProvider";
import { useMusic } from "../Contexts/MusicPlayerProvider";
import MusicPlayerController from "../Components/MusicPlayerController";

function Main({ children }) {
    const { selectedNavItem } = useContext(MusicDataContext);
    const { searchPageStatus } = useMusicLogic();
    const { albumArtistPage } = useMusicData();
    const { musicPlayer } = useMusic();

    return (
        <div className="main">
            <Header />

            {/* rendering component accoding to selected component from navbar */}
            {/* 
            {searchPageStatus === "inactive" &&
                albumArtistPage === "inactive" &&
                musicPlayer === "inactive" && (
                    <>
                        {" "}
                        {selectedNavItem === "Explore" && <Explore />}
                        {selectedNavItem === "Home" && <Home />}
                        {selectedNavItem === "Library" && <Library />}
                        {selectedNavItem === "Upgrade" && <Upgrade />}
                    </>
                )} */}

            {/* <AlbumOrArtistPage /> */}

            {children}

            {searchPageStatus === "active" && <SearchResultPage />}
            {albumArtistPage === "active" && <AlbumOrArtistPage />}
            {musicPlayer === "active" && <MusicPlayer />}
        </div>
    );
}

export default Main;
