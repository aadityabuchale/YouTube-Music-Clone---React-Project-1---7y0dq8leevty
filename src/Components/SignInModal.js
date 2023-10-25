import React from "react";
import { createPortal } from "react-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./Components.styles/SignInModal.css";
import { Avatar } from "@mui/material";
import {
    HelpIcon,
    MusicPremiumIcon,
    SendFeedbackIcon,
    SignInIcon,
    TermsPrivacyIcon,
} from "../svgs/ModalSvgs";
import { useNavigate } from "react-router-dom";
import { useMusicAuth } from "../Contexts/MusicAuthProvider";

function SignInModal() {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const navigate = useNavigate();
    const { authDispatch } = useMusicAuth();

    console.log("current user", user);

    function handleLoginLogout() {
        if (isAuthenticated) {
            logout();
        } else {
            loginWithRedirect();
        }
    }

    return createPortal(
        <section className="modal-container keepSigninModal">
            <div className="user-info-container keepSigninModal">
                <div className="user-pic">
                    <Avatar
                        sx={{ width: 30, height: 30, fontSize: "14px" }}
                        src={user?.picture}
                    ></Avatar>
                </div>
                <div className="user-name">{user?.name}</div>
            </div>
            <ul className="modal-list keepSigninModal">
                <li onClick={handleLoginLogout}>
                    <SignInIcon />
                    {isAuthenticated ? "Sign Out" : "Sign In"}
                </li>

                <li
                    onClick={() => {
                        navigate("../upgrade");
                        authDispatch({ type: "hideModal" });
                    }}
                >
                    <MusicPremiumIcon />
                    Get Music Premium
                </li>
                <li>
                    <TermsPrivacyIcon />
                    Terms & privacy policy{" "}
                </li>
                <li>
                    <HelpIcon />
                    Help
                </li>
                <li>
                    <SendFeedbackIcon />
                    Send feedback
                </li>
            </ul>
        </section>,
        document.querySelector(".user-modal")
    );
}

export default SignInModal;
