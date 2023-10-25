import { useAuth0 } from "@auth0/auth0-react";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const MusicAuthContext = createContext();

function MusicAuthProvider({ children }) {
    // auth0 hook
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    const intialAuthObj = {
        isSignIn: false,
        userModal: false,
        userInfo: {},
        userAuthToken: "",
    };

    function authReducer(state, action) {
        switch (action.type) {
            case "setUserInfo":
                return { ...state, userInfo: action.payload };

            case "showModal":
                return { ...state, userModal: true };

            case "hideModal":
                return { ...state, userModal: false };
        }
    }

    const [authState, authDispatch] = useReducer(authReducer, intialAuthObj);

    const { isSignIn, userInfo, userAuthToken, userModal } = authState;

    useEffect(() => {
        if (user) {
        }
    }, [user]);

    useEffect(() => {
        document.querySelector(".user-modal").style.visibility = userModal
            ? "visible"
            : "hidden";
    }, [userModal]);

    let object = {
        ...authState,
        authDispatch,
    };

    return (
        <MusicAuthContext.Provider value={object}>
            {children}
        </MusicAuthContext.Provider>
    );
}

function useMusicAuth() {
    let obj = useContext(MusicAuthContext);

    if (obj) {
        return obj;
    } else {
        console.log("trying to access MusicAuthContext from outside");
    }
}

export default MusicAuthProvider;
export { useMusicAuth };
