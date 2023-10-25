import React, { useState } from "react";
import "./Common_components.styles/musicListContainer.css";
import SmallSizeCard from "./Carousel/SmallSizeCard";
import LargeSizeButton from "./LargeSizeButton";

function MusicListContainer({ heading, musicList, isSearchList, musicType }) {
    // adding features and buttons according to containerstype
    //if it is search container then show more show less icons there

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
                            isProfileCard={!isSearchList}
                            musicType={musicType}
                            isSearchCard={isSearchList}
                        />
                    );
                })}
            </div>
            {isSearchList && musicList.length >= 5 && (
                <LargeSizeButton setListCount={setListCount}>
                    {listCount >= 15 ? "Show Less" : "Show More"}
                </LargeSizeButton>
            )}
        </section>
    );
}

export default MusicListContainer;
