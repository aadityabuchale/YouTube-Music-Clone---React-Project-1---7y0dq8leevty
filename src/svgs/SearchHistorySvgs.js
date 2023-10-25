import React from "react";

const SearchIcon = () => {
    return (
        <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope tp-yt-iron-icon showSearchResults"
            style={{
                pointerEvents: "none",
                display: "block",
                width: "100%",
                height: "100%",
            }}
            fill="#909090"
        >
            <g className="style-scope tp-yt-iron-icon">
                <path
                    d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                    className="style-scope tp-yt-iron-icon"
                />
            </g>
        </svg>
    );
};

const DeleteIcon = () => {
    return (
        <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope tp-yt-iron-icon showSearchResults"
            style={{
                pointerEvents: "none",
                display: "block",
                width: "100%",
                height: "100%",
            }}
            fill="#909090"
        >
            <g className="style-scope tp-yt-iron-icon">
                <path
                    d="M11,17H9V8h2V17z M15,8h-2v9h2V8z M19,4v1h-1v16H6V5H5V4h4V3h6v1H19z M17,5H7v15h10V5z"
                    className="style-scope tp-yt-iron-icon"
                />
            </g>
        </svg>
    );
};

const HistoryIcon = () => {
    return (
        <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope tp-yt-iron-icon showSearchResults"
            style={{
                display: "block",
                width: "100%",
                height: "100%",
            }}
            fill="#909090"
        >
            <g className="style-scope tp-yt-iron-icon">
                <path
                    d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"
                    className="style-scope tp-yt-iron-icon"
                ></path>
            </g>
        </svg>
    );
};

export { HistoryIcon, SearchIcon, DeleteIcon };
