import React from "react";
import "./Components.styles/SearchResults.css";
import { useMusicLogic } from "../Contexts/MusicLogicsProvider";
import { useMusicData } from "../Contexts/MusicDataProvider";
import { HistoryIcon, DeleteIcon } from "../svgs/SearchHistorySvgs";

function SearchResults() {
    const { songResult } = useMusicLogic();

    return (
        <div className="searchresults-container">
            {songResult?.map((song) => {
                return <SingleSearchResult song={song} />;
            })}
        </div>
    );
}

export default SearchResults;

function SingleSearchResult({ song }) {
    const { name, title } = song;

    // console.log(title);

    return (
        <div className="result-container">
            <div className="searchresult-icon">
                <HistoryIcon />
            </div>
            <div className="result-text">{title}</div>
            <div className="searchresult-icon">
                <DeleteIcon />
            </div>
        </div>
    );
}
