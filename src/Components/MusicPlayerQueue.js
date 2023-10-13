import React from "react";
import "./Components.styles/MusicPlayerQueue.css";
import { useMusicData } from "../Contexts/MusicDataProvider";
import SmallSizeCard from "./Common_Components/Carousel/SmallSizeCard";

function MusicPlayerQueue() {
    const { allMusicData } = useMusicData();

    return (
        <section className="music-queue-section">
            <div className="queue-heading">Up Next</div>

            <div className="music-queue">
                {allMusicData[4]?.data?.map((song, idx) => {
                    return (
                        <SmallSizeCard
                            key={song._id}
                            song={song}
                            count={idx + 1}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default MusicPlayerQueue;
