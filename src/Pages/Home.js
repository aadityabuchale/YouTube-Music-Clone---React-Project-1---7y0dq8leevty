import React from "react";
import Buttons from "../Components/Common_Components/Button";
import "./Pages.styles/Home.css";
import ArtistYouLike from "../Components/ArtistYouLike";
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

            <ArtistYouLike />
        </section>
    );
}

export default Home;
