import React from "react";
import "./Components.styles/SearchTopResults.css";

import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import LargeSizeButton from "./Common_Components/LargeSizeButton";

function SearchPageTopResultCard({ result }) {
    const { _id, thumbnail, title, artists, artist, image, name, description } =
        result;

    return (
        <section className="topresult-card-container">
            <div className="topresult-heading ytsans-heading">Top Result</div>
            <div
                className="topresult-container"
                style={{ backgroundImage: `url(${image ? image : thumbnail})` }}
            >
                <div className="blur-div"></div>
                <div className="topresult-data">
                    <img src={image ? image : thumbnail} alt="" />
                    <div className="topresult-text-info">
                        <div className="topresult-title">
                            {title ? title.substring(0, 39) + "..." : name}
                        </div>
                        <div className="extra-info">
                            {artists &&
                                artists
                                    ?.map((a) => a.name)
                                    .slice(0, 2)
                                    .join(", ")}
                            {description &&
                                description?.substring(0, 25) + "..."}

                            {artist &&
                                artist
                                    ?.map((a) => a.name)
                                    .slice(0, 2)
                                    .join(", ")}
                        </div>
                        <LargeSizeButton icon={<PlayArrowSharpIcon />}>
                            Play
                        </LargeSizeButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchPageTopResultCard;
