import React from "react";
import Button from "../Components/Common_Components/Button";
import "./Pages.styles/Library.css";

import PushPinSharpIcon from "@mui/icons-material/PushPinSharp";

const Library = () => {
    let categoryArr = ["Playlists", "Songs", "Albums", "Artists"];

    return (
        <section className="library-section">
            <div className="library-buttons">
                {categoryArr.map((category, idx) => {
                    return <Button key={idx} activity={category}></Button>;
                })}
            </div>

            <div className="liked-music-card">
                <div className="image">
                    <img src="./images/liked-music.png" alt="" />
                </div>
                <div className="liked-card-text">
                    <p>Your Likes</p>
                    <div>
                        <PushPinSharpIcon sx={{ fontSize: "20px" }} />
                        <span> Auto playlist</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Library;
