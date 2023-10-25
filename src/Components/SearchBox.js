import React, { createRef } from "react";
import { useMusicLogic } from "../Contexts/MusicLogicsProvider";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import SearchResults from "./SearchResults";
import "./Components.styles/SearchBox.css";

function SearchBox() {
    const {
        searchDispatch,
        searchInput,
        searchResultBoxStatus,
        handleSearchpageOpen,
    } = useMusicLogic();

    const searchInputRef = createRef();

    // handling click on whole search box
    function handleSearchBoxClick(e) {
        searchInputRef.current.focus();
        searchDispatch({ type: "setSearchResultBox", payload: "active" });
    }

    function handleSearchInput(e) {
        searchDispatch({ type: "setSearchInput", payload: e.target.value });
    }

    function handleEnterKey(e) {
        if (e.key === "Enter") {
            if (searchInput !== "") {
                // handling searchpage open and historylist close
                handleSearchpageOpen();
            }
        }
    }

    return (
        <section
            className="searchbox-container showSearchResults"
            style={{
                backgroundColor:
                    searchResultBoxStatus === "active" ? "#030303" : "#292929",
            }}
        >
            <div
                className="header-2 showSearchResults search-box"
                onClick={handleSearchBoxClick}
            >
                <div className="search-icon showSearchResults">
                    <SearchSharpIcon />
                </div>
                <input
                    type="text"
                    className="search-input showSearchResults"
                    placeholder="Search songs, albums, artists, podcasts"
                    value={searchInput}
                    onChange={handleSearchInput}
                    onKeyDown={handleEnterKey}
                    ref={searchInputRef}
                />
            </div>

            {searchResultBoxStatus == "active" && <SearchResults />}
        </section>
    );
}

export default SearchBox;
