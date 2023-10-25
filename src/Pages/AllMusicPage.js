import React, { useEffect } from "react";
import "./Pages.styles/AllMusicPage.css";
import { useMusicData } from "../Contexts/MusicDataProvider";
import useMusicListToRender from "../hooks/useMusicListToRender";
import { useParams } from "react-router-dom";
import SquareCard from "../Components/Common_Components/Carousel/SquareCard";

function AllMusicPage() {
    const { musicType, heading } = useParams();

    const [musicListToRender] = useMusicListToRender(musicType, 100);

    return (
        <section className="allmusic-container">
            <h1 className="main-heading allmusic-heading">{heading}</h1>

            <div className="allmusic-container">
                {musicListToRender?.map((song) => {
                    return (
                        <SquareCard
                            key={song?._id}
                            song={song}
                            musicList={musicListToRender}
                            allMusicCard={true}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default AllMusicPage;
