import { createContext, useContext, useEffect, useReducer } from "react";
import { getSearchResult } from "../ApiService";

const MusicLogic = createContext();

import React from "react";

function MusicLogicsProvider({ children }) {
    // ----------- start of search functionality --------------------
    const intialSearchState = {
        searchPage: "inactive",
        searchInput: "a",
        artistResult: [],
        songResult: [],
        albumResult: [],
    };

    function searchReducer(state, action) {
        switch (action.type) {
            case "setSearchInput":
                return { ...state, searchInput: action.payload };

            case "setArtistResult":
                return { ...state, artistResult: action.payload };

            case "setSongResult":
                return { ...state, songResult: action.payload };

            case "setAlbumResult":
                return { ...state, albumResult: action.payload };
        }
    }

    const [searchState, searchDispatch] = useReducer(
        searchReducer,
        intialSearchState
    );

    const { searchInput, searchPage, artistResult, songResult, albumResult } =
        searchState;

    useEffect(() => {
        const fetchData = async () => {
            const songsData = await getSearchResult(searchInput, "song");

            searchDispatch({ type: "setSongResult", payload: songsData });

            const albumsData = await getSearchResult(searchInput, "album");
            searchDispatch({ type: "setAlbumResult", payload: albumsData });

            const artistsData = await getSearchResult(searchInput, "artist");
            searchDispatch({ type: "setArtistResult", payload: artistsData });
        };
        fetchData();
    }, [searchInput]);

    return (
        <MusicLogic.Provider
            value={{ songResult, searchInput, searchDispatch }}
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
