import React from "react";
import UpgradeStartingInfo from "../Components/UpgradeStartingInfo";
import "./Pages.styles/Upgrade.css";
import UpgradeBenefitPage from "../Components/UpgradeBenefitPage";
import UpgradePageBanners from "../Components/UpgradePageBanners";

function Upgrade() {
    return (
        <section className="upgrade-section">
            <UpgradeStartingInfo />
            <UpgradeBenefitPage />
            <UpgradePageBanners />

            <div className="bottom-text">
                Have other questions?{" "}
                <span style={{ color: "#3ea6ff" }}>
                    Visit the YouTube Help Center
                </span>
            </div>
        </section>
    );
}

export default Upgrade;
