import React, { useContext } from "react";
import Home from "./Home";
import Header from "../Components/Header";
import { MusicDataContext } from "../Contexts/MusicDataProvider";
import "./Pages.styles/Main.css";
import Explore from "./Explore";
import Library from "./Library";
import Upgrade from "./Upgrade";
import MusicPlayer from "./MusicPlayer";
import AlbumOrArtistPage from "./AlbumOrArtistPage";
import SearchResultPage from "./SearchResultPage";

function Main() {
    const { selectedNavItem } = useContext(MusicDataContext);

    return (
        <div className="main">
            <Header />

            {/* rendering component accoding to selected component from navbar */}
            {/* {selectedNavItem === "Explore" && <Explore />}
            {selectedNavItem === "Home" && <Home />}
            {selectedNavItem === "Library" && <Library />}
            {selectedNavItem === "Upgrade" && <Upgrade />} */}

            {/* <MusicPlayer /> */}
            {/* <AlbumOrArtistPage /> */}
            <SearchResultPage />
        </div>
    );
}

export default Main;
