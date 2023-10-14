import React from "react";
import "./Pages.styles/SearchResultPage.css";
import { useMusicData } from "../Contexts/MusicDataProvider";
import SearchTopResults from "../Components/SearchTopResults";

function SearchResultPage() {
    const { albumArtistObject } = useMusicData();

    return (
        <div className="searchpage-container">
            <div className="topresult-heading ytsans-heading">Top Result</div>
            <SearchTopResults result={albumArtistObject} />
        </div>
    );
}

export default SearchResultPage;
