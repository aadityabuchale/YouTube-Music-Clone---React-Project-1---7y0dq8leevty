import React, { createRef } from "react";
import { useMusicLogic } from "../Contexts/MusicLogicsProvider";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import SearchResults from "./SearchResults";
import "./Components.styles/SearchBox.css";

function SearchBox() {
    const { searchDispatch, searchInput } = useMusicLogic();

    const searchInputRef = createRef();

    function handleSearchBoxClick(e) {
        searchInputRef.current.focus();
    }

    function handleSearchInput(e) {
        searchDispatch({ type: "setSearchInput", payload: e.target.value });
    }

    return (
        <section className="searchbox-container">
            <div className="header-2 search-box" onClick={handleSearchBoxClick}>
                <div className="search-icon">
                    <SearchSharpIcon />
                </div>
                <input
                    type="text"
                    className="search-input "
                    placeholder="Search songs, albums, artists, podcasts"
                    value={searchInput}
                    onChange={handleSearchInput}
                    ref={searchInputRef}
                />
            </div>

            {/* <SearchResults /> */}
        </section>
    );
}

export default SearchBox;
