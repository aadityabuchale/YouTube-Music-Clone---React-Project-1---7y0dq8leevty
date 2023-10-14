import React from "react";
import CastSharpIcon from "@mui/icons-material/CastSharp";
import { Avatar } from "@mui/material";
import "./Components.styles/Header.css";
import SearchBox from "./SearchBox";

function Header() {
    return (
        <div className="header">
            <SearchBox />

            <div className=" header-3">
                <CastSharpIcon className="screencast-icon" />
                <Avatar sx={{ width: 27, height: 27, fontSize: 13 }}>AB</Avatar>
            </div>
        </div>
    );
}

export default Header;
