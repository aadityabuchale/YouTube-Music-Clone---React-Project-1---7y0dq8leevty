import React from "react";
import "./styles/App.css";
import YoutubeMusic from "./Pages/YoutubeMusic";
import MusicDataContextProvider from "./Contexts/MusicDataProvider";
import MusicLogicsProvider from "./Contexts/MusicLogicsProvider";
import MusicPlayerProvider from "./Contexts/MusicPlayerProvider";

const App = () => {
    return (
        <MusicDataContextProvider>
            <MusicLogicsProvider>
                <MusicPlayerProvider>
                    <YoutubeMusic />
                </MusicPlayerProvider>
            </MusicLogicsProvider>
        </MusicDataContextProvider>
    );
};

export default App;
