import React from "react";
import "./Pages.styles/SearchResultPage.css";
import SearchTopResults from "../Components/SearchTopResults";
import MusicListContainer from "../Components/Common_Components/MusicListContainer";
import { useMusicLogic } from "../Contexts/MusicLogicsProvider";

function SearchResultPage() {
    const { songsResult, albumsResult, artistsResult } = useMusicLogic();

    console.log(artistsResult);

    return (
        <div className="searchpage-container">
            <div className="topresult-heading ytsans-heading">Top Result</div>
            {/* <SearchTopResults result={albumArtistObject} /> */}

            {songsResult?.length > 0 && (
                <MusicListContainer
                    heading={"Songs"}
                    isSearchList={true}
                    musicList={songsResult}
                    musicType="song"
                />
            )}

            {albumsResult?.length > 0 && (
                <MusicListContainer
                    heading={"Albums"}
                    isSearchList={true}
                    musicList={albumsResult}
                    musicType="album"
                />
            )}

            {artistsResult?.length > 0 && (
                <MusicListContainer
                    heading={"Artists"}
                    isSearchList={true}
                    musicList={artistsResult}
                    musicType="artist"
                />
            )}
        </div>
    );
}

export default SearchResultPage;
