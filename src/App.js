import React from "react";
import "./styles/App.css";
import YoutubeMusic from "./Pages/YoutubeMusic";
import MusicDataContextProvider from "./Contexts/MusicDataProvider";
import MusicLogicsProvider from "./Contexts/MusicLogicsProvider";
import MusicPlayerProvider from "./Contexts/MusicPlayerProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Library from "./Pages/Library";
import Navbar from "./Components/Navbar";
import Upgrade from "./Pages/Upgrade";

const App = () => {
    return (
        <Router>
            <MusicDataContextProvider>
                <MusicLogicsProvider>
                    <MusicPlayerProvider>
                        <Routes>
                            <Route path="*" element={<YoutubeMusic />} />
                        </Routes>
                    </MusicPlayerProvider>
                </MusicLogicsProvider>
            </MusicDataContextProvider>
        </Router>
    );
};

export default App;
