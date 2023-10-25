import React, { useState, useContext } from "react";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ExploreIcon from "@mui/icons-material/Explore";
import LibraryMusicSharpIcon from "@mui/icons-material/LibraryMusicSharp";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { MusicDataContext } from "../Contexts/MusicDataProvider";

import "./Components.styles/Navbar.css";
import { useMusicLogic } from "../Contexts/MusicLogicsProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { useMusic } from "../Contexts/MusicPlayerProvider";

function Navbar() {
    const [navExpanded, setNavExpanded] = useState(true);
    const navigate = useNavigate();
    const { handleMusicPlayer, musicPlayer, musicController } = useMusic();

    // navarray which contains all components and current states
    const navArray = [
        {
            name: "Home",
            icon: <HomeSharpIcon />,
        },
        {
            name: "Explore",
            icon: <ExploreIcon />,
        },
        {
            name: "Library",
            icon: <LibraryMusicSharpIcon />,
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
        },
    ];

    // changing styles according to expand icon clicked
    let navStyle = navExpanded ? "nav-item" : "nav-item-collapse";
    let navbarStyle = navExpanded
        ? {}
        : {
              borderRight: "transparent",
              width: "10%",
              transition: "all 0.6s ease-out",
          };

    function handleNavbarClick() {
        if (musicPlayer === "active" && musicController === "active") {
            handleMusicPlayer("keepAsItIs", "inactive", "active");
        }

        navigate("/");
    }

    return (
        <nav className={"navbar"} style={navbarStyle}>
            <div className="header-1 nav-item-logo">
                <MenuOutlinedIcon
                    onClick={() => setNavExpanded((expanded) => !expanded)}
                ></MenuOutlinedIcon>

                <img
                    src="./images/on_platform_logo_dark.svg"
                    alt="logo-img"
                    onClick={handleNavbarClick}
                />
            </div>

            {/* rendering the links */}
            {navArray.map((item, index) => (
                <NavLink
                    to={item.name == "Home" ? "/" : item.name}
                    key={index}
                    className={navStyle}
                >
                    {item.icon}
                    <span>{item.name}</span>
                </NavLink>
            ))}
        </nav>
    );
}

export default Navbar;
