import React from "react";
import "./Components.styles/SearchTopResults.css";

import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import LargeSizeButton from "./Common_Components/LargeSizeButton";

function SearchTopResults({ result }) {
    const { image, artists, title } = result;

    return (
        <div
            className="topresults-container"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="blur-div"></div>
            <div className="topresults-data">
                <img src={image} alt="" />
                <div className="topresults-text-info">
                    <div className="topresults-title">{title}</div>
                    <div className="extra-info">
                        {artists
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
    );
}

export default SearchTopResults;
