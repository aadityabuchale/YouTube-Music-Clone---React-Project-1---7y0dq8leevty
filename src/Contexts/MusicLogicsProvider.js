import { createContext, useContext, useEffect, useReducer } from "react";
import { getSearchResult } from "../ApiService";

const MusicLogic = createContext();

import React from "react";
import { useNavigate } from "react-router-dom";
import addHistoryInLocalStorage from "../utils/addHistoryInLocalStorage";

function MusicLogicsProvider({ children }) {
    const navigate = useNavigate();

    // ----------- start of search functionality --------------------
    const intialSearchState = {
        searchPageStatus: "inactive",
        searchResultBoxStatus: "inactive",
        searchInput: "",
        artistsResult: [],
        songsResult: [],
        albumsResult: [],
    };

    function searchReducer(state, action) {
        switch (action.type) {
            case "setSearchInput":
                return { ...state, searchInput: action.payload };

            case "setartistsResult":
                return {
                    ...state,
                    artistsResult: !action.payload ? [] : action.payload,
                };

            case "setsongsResult":
                return {
                    ...state,
                    songsResult: !action.payload ? [] : action.payload,
                };

            case "setalbumsResult":
                return {
                    ...state,
                    albumsResult: !action.payload ? [] : action.payload,
                };

            case "setSearchPage":
                return { ...state, searchPageStatus: action.payload };

            case "setSearchResultBox":
                return { ...state, searchResultBoxStatus: action.payload };
        }
    }

    const [searchState, searchDispatch] = useReducer(
        searchReducer,
        intialSearchState
    );

    const {
        searchInput,
        searchPageStatus,
        artistsResult,
        songsResult,
        albumsResult,
        searchResultBoxStatus,
    } = searchState;

    useEffect(() => {
        const fetchData = async () => {
            const songsData = await getSearchResult(searchInput, "song");
            searchDispatch({ type: "setsongsResult", payload: songsData });

            const albumsData = await getSearchResult(searchInput, "album");
            searchDispatch({ type: "setalbumsResult", payload: albumsData });

            const artistsData = await getSearchResult(searchInput, "artist");
            searchDispatch({ type: "setartistsResult", payload: artistsData });
        };
        fetchData();
    }, [searchInput]);

    function handleSearchpageOpen() {
        searchDispatch({
            type: "setSearchResultBox",
            payload: "inactive",
        });
        searchDispatch({ type: "setSearchPage", payload: "active" });
        addHistoryInLocalStorage(searchInput);
        navigate(`../searchpage/${searchInput}`);
    }

    const obj = {
        ...searchState,
        searchDispatch,
        handleSearchpageOpen,
    };

    return <MusicLogic.Provider value={obj}>{children}</MusicLogic.Provider>;
}

function useMusicLogic() {
    const obj = useContext(MusicLogic);

    if (obj === undefined) {
        console.log("trying to access data outside MusicLogic context");
    } else {
        return obj;
    }
}

export default MusicLogicsProvider;
export { useMusicLogic };
