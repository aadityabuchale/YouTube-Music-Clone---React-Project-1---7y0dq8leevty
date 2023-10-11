import React from "react";

import "./Components.styles/SignInModal.css";
import { Avatar } from "@mui/material";

function SignInModal() {
    return (
        <section className="modal-container">
            <div className="user-info-container">
                <div className="user-pic">
                    <Avatar sx={{ width: 32, height: 32, fontSize: 15 }}>
                        AB
                    </Avatar>
                </div>
                <div className="user-name">Aaditya Buchale</div>
            </div>
            <ul className="modal-list">
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        className="style-scope yt-icon"
                        style={{
                            pointerEvents: "none",
                            display: "block",
                            width: "30px",
                            height: "30px",
                        }}
                        fill="grey"
                    >
                        <g className="style-scope yt-icon">
                            <path
                                d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"
                                className="style-scope yt-icon"
                            ></path>
                        </g>
                    </svg>
                    Sign In
                </li>
                <li>
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        className="style-scope yt-icon"
                        style={{
                            pointerEvents: "none",
                            display: "block",
                            width: "30px",
                            height: "30px",
                        }}
                        fill="grey"
                    >
                        <g className="style-scope yt-icon">
                            <path
                                d="M12,2L4,5.67v5.49c0,1.47,0.3,2.9,0.81,4.22c0.17,0.44,0.37,0.86,0.6,1.28c0.16,0.3,0.34,0.6,0.52,0.88 c1.42,2.17,3.52,3.82,5.95,4.44L12,22l0.12-0.03c2.43-0.61,4.53-2.26,5.95-4.43c0.19-0.29,0.36-0.58,0.52-0.88 c0.22-0.41,0.43-0.84,0.6-1.28C19.7,14.05,20,12.62,20,11.15V5.67L12,2z M12,3.1l6.11,2.8L12,11.15L5.89,5.9L12,3.1z M5.75,15.01 C5.25,13.75,5,12.45,5,11.15v-4.7l6.23,5.35l-4.98,4.28C6.05,15.71,5.88,15.36,5.75,15.01z M17.23,16.99 C15.91,19,14.06,20.41,12,20.97C9.94,20.41,8.09,19,6.77,16.99c0-0.01-0.01-0.01-0.01-0.02l5.24-4.5l5.24,4.5 C17.23,16.98,17.23,16.98,17.23,16.99z M19,11.15c0,1.3-0.25,2.6-0.75,3.86c-0.14,0.35-0.3,0.7-0.5,1.08l-4.98-4.28L19,6.45V11.15z"
                                className="style-scope yt-icon"
                            />
                        </g>
                    </svg>
                    Terms & privacy policy{" "}
                </li>
                <li>
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        className="style-scope yt-icon"
                        style={{
                            pointerEvents: "none",
                            display: "block",
                            width: "30px",
                            height: "30px",
                        }}
                        fill="grey"
                    >
                        <g className="style-scope yt-icon">
                            <path
                                d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.40-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                                className="style-scope yt-icon"
                            />
                        </g>
                    </svg>
                    Help
                </li>
                <li>
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        className="style-scope yt-icon"
                        style={{
                            pointerEvents: "none",
                            display: "block",
                            width: "30px",
                            height: "30px",
                        }}
                        fill="grey"
                    >
                        <g className="style-scope yt-icon">
                            <path
                                d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
                                className="style-scope yt-icon"
                            />
                        </g>
                    </svg>
                    Send feedback
                </li>
            </ul>
        </section>
    );
}

export default SignInModal;
