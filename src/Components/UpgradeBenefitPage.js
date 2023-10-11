import React from "react";
import "./Components.styles/UpgradeBenefitPage.css";
import styles from "./Components.styles/UpgradeStartingInfo.css";

function UpgradeBenefitPage() {
    return (
        <div className="benefit-page-container">
            <BenefitPageSection
                imgUrl={
                    "https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_headset_168x168.png"
                }
                heading={"Listen in the background"}
                text={
                    "Don’t worry about your music stopping when you lock your screen or use other apps."
                }
            />
            <BenefitPageSection
                imgUrl={
                    "https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_play_168x168.png"
                }
                heading={"Ad-free music"}
                text={"Listen to the world of music without ads."}
            />
            <BenefitPageSection
                imgUrl={
                    "https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_download_168x168.png"
                }
                heading={"Download and go"}
                text={"Listen to your favorite music on the go."}
            />
        </div>
    );
}

export default UpgradeBenefitPage;

function BenefitPageSection({ imgUrl, heading, text }) {
    return (
        <div className="benefit-section">
            <img src={imgUrl} alt="" />
            <div className="plan-heading">{heading}</div>
            <div>{text}</div>
        </div>
    );
}
