import React from "react";
import MusicPlayerController from "../Components/MusicPlayerController";
import "./Pages.styles/MusicPlayer.css";
import MusicPlayerBanner from "../Components/MusicPlayerBanner";
import { useMusic } from "../Contexts/MusicPlayerProvider";
import MusicPlayerQueue from "../Components/MusicPlayerQueue";

function MusicPlayer() {
    const { musicObject } = useMusic();

    const { thumbnail } = musicObject;

    return (
        <main className="musicplayer-section">
            <MusicPlayerBanner imgSrc={thumbnail} />
            <MusicPlayerQueue />
        </main>
    );
}

export default MusicPlayer;
