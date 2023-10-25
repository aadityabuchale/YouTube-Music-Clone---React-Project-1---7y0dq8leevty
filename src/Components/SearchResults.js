import React from "react";
import "./Components.styles/SearchResults.css";
import { useMusicLogic } from "../Contexts/MusicLogicsProvider";

import { HistoryIcon, DeleteIcon, SearchIcon } from "../svgs/SearchHistorySvgs";
import deleteHistoryFromLocalStorage from "../utils/deleteHistoryFromLocalStorage";
import getHistoryFromLocalStorage from "../utils/getHistoryFromLocaltorage";
import { useNavigate } from "react-router-dom";
import addHistoryInLocalStorage from "../utils/addHistoryInLocalStorage";

function SearchResults() {
    const { songsResult, albumsResult, artistsResult, searchInput } =
        useMusicLogic();

    const historyArray = getHistoryFromLocalStorage();

    // getting total length of search results
    let totalLength = songsResult?.length
        ? songsResult?.length
        : 0 + albumsResult?.length
        ? albumsResult?.length
        : 0 + artistsResult?.length
        ? artistsResult?.length
        : 0;

    return (
        <div
            className="searchresults-container"
            style={{
                height:
                    totalLength < 7 || searchInput?.length === 0
                        ? "fit-content"
                        : "calc(400px - 45px)",
            }}
        >
            {/* if there is a word inside search input then we show searchresult otherwise search history */}
            {searchInput?.length > 0 ? (
                <>
                    {" "}
                    {songsResult?.map((song) => {
                        return (
                            <SingleSearchResult key={song?._id} result={song} />
                        );
                    })}
                    {albumsResult?.map((album) => {
                        return (
                            <SingleSearchResult
                                key={album?._id}
                                result={album}
                            />
                        );
                    })}
                    {artistsResult?.map((artist) => {
                        return (
                            <SingleSearchResult
                                key={artist?._id}
                                result={artist}
                            />
                        );
                    })}
                </>
            ) : (
                historyArray.map((history, idx) => {
                    return (
                        <SingleSearchResult
                            key={idx}
                            history={history}
                            isHistory="true"
                        />
                    );
                })
            )}
        </div>
    );
}

export default SearchResults;

function SingleSearchResult({ result, isHistory, history }) {
    const { searchDispatch, searchInput } = useMusicLogic();

    const navigate = useNavigate();

    // handling when search history is clicked
    function handleSearchResultClick(e) {
        let searchValue = !history
            ? result?.title
                ? result?.title
                : result?.name
            : history;

        if (!e.target.classList.contains("showSearchResults")) {
            searchDispatch({ type: "setSearchResultBox", payload: "inactive" });
            searchDispatch({
                type: "setSearchInput",
                payload: searchValue,
            });

            addHistoryInLocalStorage(searchValue);
            navigate(`../searchpage/${searchValue}`);
        }

        searchDispatch({ type: "setSearchPage", payload: "active" });
    }

    function handleDeleteHistory() {
        deleteHistoryFromLocalStorage(history);
    }

    return (
        <div
            className="result-container"
            onClick={(e) => handleSearchResultClick(e)}
        >
            <div className="searchresult-icon">
                {isHistory ? <HistoryIcon /> : <SearchIcon />}
            </div>
            <div className="result-text">
                {result?.title
                    ? result?.title
                    : isHistory
                    ? history
                    : result?.name}
            </div>
            <div
                className="searchresult-icon showSearchResults"
                onClick={handleDeleteHistory}
            >
                {isHistory && <DeleteIcon />}
            </div>
        </div>
    );
}
