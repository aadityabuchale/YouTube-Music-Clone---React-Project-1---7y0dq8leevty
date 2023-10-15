import { createContext, useContext, useEffect, useReducer } from "react";
import { getSearchResult } from "../ApiService";

const MusicLogic = createContext();

import React from "react";

function MusicLogicsProvider({ children }) {
    // ----------- start of search functionality --------------------
    const intialSearchState = {
        searchPage: "inactive",
        searchInput: "a",
        artistsResult: [],
        songsResult: [],
        albumsResult: [],
    };

    function searchReducer(state, action) {
        switch (action.type) {
            case "setSearchInput":
                return { ...state, searchInput: action.payload };

            case "setartistsResult":
                return { ...state, artistsResult: action.payload };

            case "setsongsResult":
                return { ...state, songsResult: action.payload };

            case "setalbumsResult":
                return { ...state, albumsResult: action.payload };
        }
    }

    const [searchState, searchDispatch] = useReducer(
        searchReducer,
        intialSearchState
    );

    const {
        searchInput,
        searchPage,
        artistsResult,
        songsResult,
        albumsResult,
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

    return (
        <MusicLogic.Provider
            value={{
                songsResult,
                artistsResult,
                albumsResult,
                searchInput,
                searchDispatch,
            }}
        >
            {children}
        </MusicLogic.Provider>
    );
}

function useMusicLogic() {
    return useContext(MusicLogic);
}

export default MusicLogicsProvider;
export { useMusicLogic };
