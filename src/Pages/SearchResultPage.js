import React from "react";
import "./Pages.styles/SearchResultPage.css";
import SearchPageTopResultCard from "../Components/SearchPageTopResultCard";
import MusicListContainer from "../Components/Common_Components/MusicListContainer";
import { useMusicLogic } from "../Contexts/MusicLogicsProvider";
import SearchPageNoResultsFound from "../Components/SearchPageNoResultsFound";

function SearchResultPage() {
    const { songsResult, albumsResult, artistsResult, searchInput } =
        useMusicLogic();

    const topResultObj = getTopResult(
        songsResult,
        albumsResult,
        artistsResult,
        searchInput
    );

    return (
        <div className="searchpage-container">
            {songsResult?.length === 0 &&
            albumsResult?.length === 0 &&
            artistsResult?.length === 0 ? (
                <SearchPageNoResultsFound searchInput={searchInput} />
            ) : (
                <>
                    {
                        // if input length is more than zero
                        searchInput?.length > 0 && (
                            <SearchPageTopResultCard result={topResultObj} />
                        )
                    }
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
                    )}{" "}
                </>
            )}
        </div>
    );
}

export default SearchResultPage;

// -------- logic  for finding top result by compairing the titles of all search result -----

function getMatchedIndexes(input, nameString) {
    let maxIdx = 0;

    for (let i = 0; i < nameString?.length; ) {
        if (nameString[i] === input[0]) {
            let prevI = i;
            let j = 0;
            for (
                ;
                j < input?.length &&
                nameString[i] === input[j] &&
                i < nameString?.length;

            ) {
                j++;
                i++;
            }

            maxIdx = Math.max(maxIdx, i - prevI);
        } else {
            i++;
        }
    }

    return maxIdx;
}

function getTopResult(songsResult, albumsResult, artistsResult, searchInput) {
    let machedIdxes = 0;
    let resultObj = {};

    let ip = "" + searchInput; // created new copy
    ip.trim();

    for (let i = artistsResult?.length - 1; i >= 0; i--) {
        let artist = artistsResult[i];
        let idx = getMatchedIndexes(
            ip.toLowerCase(),
            artist?.name.toLowerCase()
        );

        if (idx >= machedIdxes) {
            resultObj = { ...artist };
        }
    }

    for (let i = albumsResult?.length - 1; i >= 0; i--) {
        let album = albumsResult[i];
        let idx = getMatchedIndexes(
            ip.toLowerCase(),
            album?.title.toLowerCase()
        );

        if (idx >= machedIdxes) {
            resultObj = { ...album };
        }
    }

    for (let i = songsResult?.length - 1; i >= 0; i--) {
        let song = songsResult[i];
        let idx = getMatchedIndexes(
            ip.toLowerCase(),
            song?.title.toLowerCase()
        );

        if (idx > machedIdxes) {
            resultObj = { ...song };
        }
    }

    return resultObj;
}
