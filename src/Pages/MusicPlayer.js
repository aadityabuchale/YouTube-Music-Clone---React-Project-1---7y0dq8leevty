import React, { useEffect } from "react";
import "./Pages.styles/MusicPlayer.css";
import MusicPlayerBanner from "../Components/MusicPlayerBanner";
import { useMusic } from "../Contexts/MusicPlayerProvider";
import MusicPlayerQueue from "../Components/MusicPlayerQueue";
import { useParams } from "react-router-dom";

function MusicPlayer() {
    const { musicObject, handleMusicPlayer } = useMusic();
    const { id } = useParams();

    useEffect(() => {
        handleMusicPlayer(id, "active", "active");
    }, [id]);

    const { thumbnail } = musicObject;

    return (
        <main className="musicplayer-section">
            <MusicPlayerBanner imgSrc={thumbnail} />
            <MusicPlayerQueue />
        </main>
    );
}

export default MusicPlayer;
