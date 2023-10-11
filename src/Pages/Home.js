import React from "react";
import Buttons from "../Components/Common_Components/Button";
import "./Pages.styles/Home.css";
import ArtistsBanner from "../Components/ArtistsBanner";
import MusicCarousel from "../Components/Common_Components/Carousel/MusicCarousel";

function Home() {
    const activities = ["Relax", "Energize", "Commute", "Workout", "Focus"];

    return (
        <section className="home-section">
            {/* adding all activities button */}
            <div className="button-container">
                {activities.map((activity, idx) => {
                    return <Buttons key={idx} activity={activity}></Buttons>;
                })}
            </div>
            <MusicCarousel
                heading={"Recommanded Music Videos"}
                musicType="trendSong"
                cardType="rectangle"
            />

            <MusicCarousel
                heading={"New Releases"}
                musicType={"newRelease"}
                cardType={"square"}
            />

            <ArtistsBanner />

            <MusicCarousel
                heading={"Top Artists"}
                musicType={"stars"}
                cardType={"artist"}
            />

            <MusicCarousel
                heading={"Trending Songs"}
                musicType={"trendSong"}
                cardType={"smallSize"}
            />

            <MusicCarousel
                heading={"Romance Right Now"}
                musicType={"romantic"}
                cardType={"rectangle"}
            />

            <MusicCarousel
                heading={"Let's Party"}
                musicType={"happy"}
                cardType={"square"}
            />

            <MusicCarousel
                heading={"Quick Picks"}
                musicType={"newRelease"}
                cardType={"smallSize"}
            />

            <MusicCarousel
                heading={"Wistful Melodies"}
                musicType={"sad"}
                cardType={"square"}
            />
        </section>
    );
}

export default Home;
