import React, { useEffect } from "react";
import { useMusic } from "../Contexts/MusicPlayerProvider";

const iconStyles = {
    display: "inline",
    width: "28px",
    height: "28px",
};

const SpeakerIcon = ({ width, height, color }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope tp-yt-iron-icon speakerIcon"
            style={iconStyles}
            fill={"#909090"}
        >
            <g className="style-scope tp-yt-iron-icon">
                <path
                    d="M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z"
                    className="style-scope tp-yt-iron-icon"
                />
            </g>
        </svg>
    );
};

const LoopIcon = ({ width, height, color }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope tp-yt-iron-icon loopIcon"
            style={iconStyles}
            fill={color}
        >
            <g className="style-scope tp-yt-iron-icon">
                <path
                    d="M21,13h1v5L3.93,18.03l2.62,2.62l-0.71,0.71L1.99,17.5l3.85-3.85l0.71,0.71l-2.67,2.67L21,17V13z M3,7l17.12-0.03 l-2.67,2.67l0.71,0.71l3.85-3.85l-3.85-3.85l-0.71,0.71l2.62,2.62L2,6v5h1V7z"
                    className="style-scope tp-yt-iron-icon"
                />
            </g>
        </svg>
    );
};

const ShuffleIcon = ({ color, width, height }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope tp-yt-iron-icon shuffleIcon"
            style={iconStyles}
            fill={color}
        >
            <g className="style-scope tp-yt-iron-icon">
                <path
                    d="M18.15,13.65l3.85,3.85l-3.85,3.85l-0.71-0.71L20.09,18H19c-2.84,0-5.53-1.23-7.39-3.38l0.76-0.65 C14.03,15.89,16.45,17,19,17h1.09l-2.65-2.65L18.15,13.65z M19,7h1.09l-2.65,2.65l0.71,0.71l3.85-3.85l-3.85-3.85l-0.71,0.71 L20.09,6H19c-3.58,0-6.86,1.95-8.57,5.09l-0.73,1.34C8.16,15.25,5.21,17,2,17v1c3.58,0,6.86-1.95,8.57-5.09l0.73-1.34 C12.84,8.75,15.79,7,19,7z M8.59,9.98l0.75-0.66C7.49,7.21,4.81,6,2,6v1C4.52,7,6.92,8.09,8.59,9.98z"
                    className="style-scope tp-yt-iron-icon"
                />
            </g>
        </svg>
    );
};

const ShareIcon = () => {
    return (
        <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon shareIcon"
            style={{
                pointerEvents: "none",
                display: "inline",
                width: "25px",
                height: "25px",
            }}
            fill="black"
        >
            <g mirror-in-rtl="" className="style-scope yt-icon">
                <path
                    d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"
                    className="style-scope yt-icon"
                />
            </g>
        </svg>
    );
};
export { SpeakerIcon, LoopIcon, ShuffleIcon, ShareIcon };
