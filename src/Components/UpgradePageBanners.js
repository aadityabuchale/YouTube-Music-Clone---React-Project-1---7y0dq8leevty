import React from "react";
import "./Components.styles/UpgradePagebanners.css";

function UpgradePageBanners() {
    return (
        <section className="banners-container">
            <UpgradePageBanner
                bannerImg={
                    "https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_266999_story1_desktop_2880x1620.jpg"
                }
                heading={"Background play"}
                text={
                    "Turn off the screen, use other apps, all while your music keeps playing."
                }
                floatPos={"left"}
            />
            <UpgradePageBanner
                bannerImg={
                    "https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_266999_story2_desktop_2880x1620.jpg"
                }
                heading={"No ads or interruptions on music"}
                text={
                    "Easily explore the world of music without any interruptions."
                }
                floatPos={"right"}
            />
            <UpgradePageBanner
                bannerImg={
                    "https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_266999_story3_desktop_2880x1620.jpg"
                }
                heading={"Download your favorite tracks"}
                text={
                    "No connection? No problem. Take your songs, albums and playlists offline."
                }
                floatPos={"left"}
            />
        </section>
    );
}

export default UpgradePageBanners;

function UpgradePageBanner({ bannerImg, heading, text, floatPos }) {
    return (
        <div
            className="upgradebanner-container"
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div
                className="banner-text-container"
                style={{
                    left: floatPos === "left" ? "10%" : "",
                    right: floatPos === "right" ? "10%" : "",
                }}
            >
                {" "}
                <div className="banner-heading">{heading}</div>
                <div className="banner-text">{text}</div>
            </div>
        </div>
    );
}
