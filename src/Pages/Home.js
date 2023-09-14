import React from "react";
import Buttons from "../Components/Common_Components/Button";
import "./Pages.styles/Home.css";
function Home() {
    const activities = ["Relax", "Energize", "Commute", "Workout", "Focus"];

    return (
        <section className="home-section">
            <div className="button-container">
                {activities.map((activity, idx) => {
                    return <Buttons key={idx} activity={activity}></Buttons>;
                })}
            </div>
        </section>
    );
}

export default Home;
