import React, { useState } from "react";

import CastSharpIcon from "@mui/icons-material/CastSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Avatar } from "@mui/material";
import "./Components.styles/Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header-2 search-box">
                <div className="search-icon">
                    <SearchSharpIcon />
                </div>
                <input
                    type="text"
                    className="search-input "
                    placeholder="Search songs, albums, artists, podcasts"
                />
            </div>

            <div className=" header-3">
                <CastSharpIcon className="screencast-icon" />
                <Avatar sx={{ width: 27, height: 27, fontSize: 13 }}>AB</Avatar>
            </div>
        </div>
    );
}

export default Header;
