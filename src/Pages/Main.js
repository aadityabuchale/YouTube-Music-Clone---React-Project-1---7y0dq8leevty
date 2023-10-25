import React, { useContext } from "react";
import Home from "./Home";
import Header from "../Components/Header";
import { MusicDataContext, useMusicData } from "../Contexts/MusicDataProvider";
import "./Pages.styles/Main.css";

import { useMusicLogic } from "../Contexts/MusicLogicsProvider";
import { useMusic } from "../Contexts/MusicPlayerProvider";

function Main({ children }) {
    const { selectedNavItem } = useContext(MusicDataContext);
    const { searchPageStatus } = useMusicLogic();
    const { albumArtistPage } = useMusicData();
    const { musicPlayer } = useMusic();

    return (
        <div className="main">
            <Header />

            {/* rendering component accoding to selected component from navbar */}

            {children}
        </div>
    );
}

export default Main;
