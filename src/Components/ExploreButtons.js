import React from "react";
import "./Components.styles/ExploreButtons.css";

const ExploreButtons = () => {
    return (
        <div className="explore-nav-buttons">
            <div className="explore-btn new-releases">
                <div className="btn-icon">
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        className="style-scope yt-icon"
                        style={{
                            pointerEvents: "none",
                            display: "block",
                            width: "100%",
                            height: "100%",
                        }}
                        fill="white"
                    >
                        <g className="style-scope yt-icon">
                            <path
                                d="M16,7h-4v5.51C11.58,12.19,11.07,12,10.5,12C9.12,12,8,13.12,8,14.5c0,1.38,1.12,2.5,2.5,2.5c1.36,0,2.46-1.08,2.5-2.43V9h3 V7z M12,3.41L14.59,6H18v3.41L20.59,12L18,14.59V18h-3.41L12,20.59L9.41,18H6v-3.41L3.41,12L6,9.41V6h3.41L12,3.41 M12,2L9,5H5v4 l-3,3l3,3v4h4l3,3l3-3h4v-4l3-3l-3-3V5h-4L12,2L12,2z"
                                className="style-scope yt-icon"
                            ></path>
                        </g>
                    </svg>
                </div>
                <p>New releases</p>
            </div>
            <div className="explore-btn charts">
                <div className="btn-icon">
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        className="style-scope yt-icon"
                        style={{
                            pointerEvents: "none",
                            display: "block",
                            width: "100%",
                            height: "100%",
                        }}
                        fill="white"
                    >
                        <g className="style-scope yt-icon">
                            <path
                                d="M22,6v7h-1V7.6l-8.5,7.6l-4-4l-5.6,5.6l-0.7-0.7l6.4-6.4l4,4L20.2,7H15V6H22z"
                                className="style-scope yt-icon"
                            ></path>
                        </g>
                    </svg>
                </div>
                <p>Charts</p>
            </div>

            <div className="explore-btn moods-genres">
                <div className="btn-icon">
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        className="style-scope yt-icon"
                        style={{
                            pointerEvents: "none",
                            display: "block",
                            width: "100%",
                            height: "100%",
                        }}
                        fill="white"
                    >
                        <g className="style-scope yt-icon">
                            <path
                                d="M12,17c-1.82,0-3.47-0.92-4.43-2.47c-0.14-0.24-0.07-0.54,0.16-0.69c0.23-0.14,0.54-0.07,0.69,0.16c0.77,1.25,2.11,2,3.57,2
	s2.8-0.75,3.57-2c0.15-0.24,0.46-0.31,0.69-0.16c0.24,0.14,0.31,0.45,0.16,0.69C15.47,16.08,13.82,17,12,17z M12,3
	c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z
	 M8.5,8C7.67,8,7,8.67,7,9.5S7.67,11,8.5,11S10,10.33,10,9.5S9.33,8,8.5,8z M15.5,8C14.67,8,14,8.67,14,9.5s0.67,1.5,1.5,1.5
	c0.83,0,1.5-0.67,1.5-1.5S16.33,8,15.5,8z"
                                className="style-scope yt-icon"
                            ></path>
                        </g>
                    </svg>
                </div>
                <p>Moods & genres</p>
            </div>
        </div>
    );
};

export default ExploreButtons;
