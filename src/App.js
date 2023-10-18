import React from "react";
import "./styles/App.css";
import YoutubeMusic from "./Pages/YoutubeMusic";
import MusicDataContextProvider from "./Contexts/MusicDataProvider";
import MusicLogicsProvider from "./Contexts/MusicLogicsProvider";
import MusicPlayerProvider from "./Contexts/MusicPlayerProvider";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <MusicDataContextProvider>
                <MusicLogicsProvider>
                    <MusicPlayerProvider>
                        <YoutubeMusic />
                    </MusicPlayerProvider>
                </MusicLogicsProvider>
            </MusicDataContextProvider>
        </BrowserRouter>
    );
};

export default App;
