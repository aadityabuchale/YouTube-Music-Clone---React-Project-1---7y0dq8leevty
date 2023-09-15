import React, { useState, useContext } from "react";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ExploreIcon from "@mui/icons-material/Explore";
import LibraryMusicSharpIcon from "@mui/icons-material/LibraryMusicSharp";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { AppContext } from "../Pages/AppContext";
import "./Components.styles/Navbar.css";

function Navbar() {
    const [navExpanded, setNavExpanded] = useState(true);
    const { selectedNavItem, setSelectedNavItem } = useContext(AppContext);

    const navArray = [
        {
            name: "Home",
            icon: <HomeSharpIcon />,
            isClicked: selectedNavItem === "Home",
        },
        {
            name: "Explore",
            icon: <ExploreIcon />,
            isClicked: selectedNavItem === "Explore",
        },
        {
            name: "Library",
            icon: <LibraryMusicSharpIcon />,
            isClicked: selectedNavItem === "Library",
        },
        {
            name: "Upgrade",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    className="style-scope yt-icon"
                    style={{
                        pointerEvents: "none",
                        width: "25px",
                        height: "25px",
                    }}
                    fill="white"
                >
                    <g className="style-scope yt-icon">
                        <path
                            d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
                            className="style-scope yt-icon"
                        ></path>
                    </g>
                </svg>
            ),
            isClicked: selectedNavItem === "Upgrade",
        },
    ];

    let navStyle = navExpanded ? "nav-item" : "nav-item-collapse";
    let navbarStyle = navExpanded
        ? {}
        : { borderRight: "transparent", width: "10%" };

    const handleNavClick = (name) => {
        setSelectedNavItem(name);
    };

    return (
        <nav className={"navbar"} style={navbarStyle}>
            <div className="header-1 nav-item-logo">
                <MenuOutlinedIcon
                    onClick={() => setNavExpanded((expanded) => !expanded)}
                ></MenuOutlinedIcon>

                <img src="./images/on_platform_logo_dark.svg" alt="logo-img" />
            </div>

            {navArray.map((item, index) => (
                <div
                    key={index}
                    className={navStyle}
                    style={{
                        backgroundColor: item.isClicked
                            ? "#1e1e1e"
                            : "var(--primary-color)",
                    }}
                    onClick={() => handleNavClick(item.name)}
                >
                    {item.icon}
                    <span>{item.name}</span>
                </div>
            ))}
        </nav>
    );
}

export default Navbar;
