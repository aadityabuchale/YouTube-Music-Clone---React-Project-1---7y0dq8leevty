import React from "react";
import "./Components.styles/UpgradeStartingInfo.css";

import { Button } from "@mui/material";

function UpgradeStartingInfo() {
    return (
        <section className="upgrade-initial-info-container">
            <div className="ytm-logo">
                <img
                    src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_logo_desktop_552x71.png"
                    alt=""
                />
            </div>
            <div className="plan-info-container">
                <div className="plan-heading">
                    Get Music Premium to listen to music ad-free, offline & with
                    your screen off
                </div>
                <Button
                    size="large"
                    sx={{
                        backgroundColor: "#3EA6FF",
                        color: "white",
                        textTransform: "none",
                        padding: "6px 13px",
                        borderRadius: "55px",
                        ":hover": {
                            backgroundColor: "#66b8ff",
                        },
                    }}
                >
                    {"Get Music Premium"}
                </Button>
                <div className="plan-rates">
                    Prepaid and subscription plans available. Prices start at
                    ₹99.00/month. Free trials available with subscription plans
                    only.
                </div>
                <div className="student-offer-text">
                    <div>
                        Or save money with an{" "}
                        <span style={{ color: "#3ea6ff" }}>
                            annual, family or student plan
                        </span>
                    </div>
                    <div style={{ color: "#3ea6ff" }}>
                        Restrictions apply. Learn more here.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpgradeStartingInfo;
