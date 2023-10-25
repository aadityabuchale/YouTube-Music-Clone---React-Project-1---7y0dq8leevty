import React from "react";
import "./styles/App.css";
import YoutubeMusic from "./Pages/YoutubeMusic";
import MusicDataContextProvider from "./Contexts/MusicDataProvider";
import MusicLogicsProvider from "./Contexts/MusicLogicsProvider";
import MusicPlayerProvider from "./Contexts/MusicPlayerProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import MusicAuthProvider from "./Contexts/MusicAuthProvider";

const App = () => {
    return (
        <Auth0Provider
            domain="dev-tkuwxktzkqh4y7ok.us.auth0.com"
            clientId="oLd3h6SFxFefSHPxmLx81abDLbUfA1ic"
            redirectUri={window.location.origin}
        >
            <Router>
                <MusicAuthProvider>
                    <MusicDataContextProvider>
                        <MusicLogicsProvider>
                            <MusicPlayerProvider>
                                <Routes>
                                    <Route
                                        path="*"
                                        element={<YoutubeMusic />}
                                    />
                                </Routes>
                            </MusicPlayerProvider>
                        </MusicLogicsProvider>
                    </MusicDataContextProvider>
                </MusicAuthProvider>
            </Router>
        </Auth0Provider>
    );
};

export default App;
