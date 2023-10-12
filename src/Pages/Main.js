import React, { useContext } from "react";
import Home from "./Home";
import Header from "../Components/Header";
import { MusicDataContext } from "../Contexts/MusicDataProvider";
import "./Pages.styles/Main.css";
import Explore from "./Explore";
import Library from "./Library";
import Upgrade from "./Upgrade";

function Main() {
    const { selectedNavItem } = useContext(MusicDataContext);

    return (
        <div className="main">
            <Header />

            {/* rendering component accoding to selected component from navbar */}
            {selectedNavItem === "Explore" && <Explore />}
            {selectedNavItem === "Home" && <Home />}
            {selectedNavItem === "Library" && <Library />}
            {selectedNavItem === "Upgrade" && <Upgrade />}
        </div>
    );
}

export default Main;
