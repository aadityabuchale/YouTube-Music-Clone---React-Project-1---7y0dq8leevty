import React, { useContext } from "react";
import Home from "./Home";
import Header from "../Components/Header";
import { AppContext } from "./AppContext";
import "./Pages.styles/Main.css";
import Explore from "./Explore";
import Library from "./Library";

function Main() {
    const { selectedNavItem } = useContext(AppContext);

    return (
        <div className="main">
            <Header />
            {/* rendering component accoding to selected component from navbar */}
            {selectedNavItem === "Explore" && <Explore />}
            {selectedNavItem === "Home" && <Home />}
            {selectedNavItem === "Library" && <Library />}
        </div>
    );
}

export default Main;
