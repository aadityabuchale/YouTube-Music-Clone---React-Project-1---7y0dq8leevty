import React, { useState } from "react";
import "./Common_components.styles/musicListContainer.css";
import SmallSizeCard from "./Carousel/SmallSizeCard";
import LargeSizeButton from "./LargeSizeButton";

function MusicListContainer({ heading, musicList, isSearchList, musicType }) {
    const [listCount, setListCount] = useState(isSearchList ? 5 : 20);

    return (
        <section className="musiclist-container">
            <div className="songs-heading">{heading}</div>
            <div className="songs-container">
                {musicList?.map((song, idx) => {
                    if (idx >= listCount) {
                        return;
                    } // rendering music according to show more icon clicked
                    return (
                        <SmallSizeCard
                            key={song._id}
                            song={song}
                            count={idx + 1}
                            isProfileCard="true"
                            musicType={musicType}
                        />
                    );
                })}
            </div>
            {isSearchList && listCount === 5 && (
                <LargeSizeButton setListCount={setListCount}>
                    Show All
                </LargeSizeButton>
            )}
        </section>
    );
}

export default MusicListContainer;
