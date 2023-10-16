import React from "react";
import ExploreButtons from "../Components/ExploreButtons";
import MusicCarousel from "../Components/Common_Components/Carousel/MusicCarousel";
import "./Pages.styles/Explore.css";

const Explore = () => {
    return (
        <section className="explore-section">
            <ExploreButtons />

            <MusicCarousel
                heading={"New Albums and Singles"}
                musicType={"trendPlay"}
                cardType={"square"}
            />

            <MusicCarousel
                heading={"Trending Now"}
                musicType={"trendSong"}
                cardType={"smallSize"}
            />

            <MusicCarousel
                heading={"New Musics"}
                musicType={"trendPlay"}
                cardType={"square"}
                isReverse={true}
            />
        </section>
    );
};

export default Explore;
