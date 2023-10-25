import React from "react";
import "./Components.styles/MusicPlayerQueue.css";
import SmallSizeCard from "./Common_Components/Carousel/SmallSizeCard";
import { useMusic } from "../Contexts/MusicPlayerProvider";

function MusicPlayerQueue() {
    const { musicPlayerSongsList, musicObject } = useMusic();

    return (
        <section className="music-queue-section">
            <div className="queue-heading">Up Next</div>

            <div className="music-queue">
                {musicPlayerSongsList?.map((song, idx) => {
                    return (
                        <SmallSizeCard
                            key={song._id}
                            isCurrentSong={song?._id === musicObject?._id}
                            song={song}
                            count={idx + 1}
                            musicList={musicPlayerSongsList}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default MusicPlayerQueue;
