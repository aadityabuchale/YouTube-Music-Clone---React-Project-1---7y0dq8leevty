import React, { useState } from "react";
import CastSharpIcon from "@mui/icons-material/CastSharp";
import { Avatar } from "@mui/material";
import "./Components.styles/Header.css";
import SearchBox from "./SearchBox";
import SignInModal from "./SignInModal";
import { useAuth0 } from "@auth0/auth0-react";
import { useMusicAuth } from "../Contexts/MusicAuthProvider";

function Header() {
    const { user } = useAuth0();
    const { authDispatch, userModal } = useMusicAuth();

    // console.log(document.querySelector(".user-modal"));

    function handleAvatarClick() {
        if (userModal) authDispatch({ type: "hideModal" });
        else authDispatch({ type: "showModal" });
    }

    return (
        <div className="header">
            <SearchBox />

            <div className=" header-login">
                <CastSharpIcon
                    className="screencast-icon"
                    style={{ fill: "#999", marginTop: "3px" }}
                />

                <Avatar
                    sx={{
                        width: 30,
                        height: 30,
                        fontSize: 13,
                    }}
                    src={user?.picture}
                    onClick={handleAvatarClick}
                    className="keepSigninModal"
                ></Avatar>
            </div>
            <SignInModal />
        </div>
    );
}

export default Header;
