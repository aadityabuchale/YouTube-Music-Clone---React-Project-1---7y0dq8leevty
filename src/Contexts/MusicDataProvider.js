import React, { useContext, useReducer } from "react";
import { createContext, useState, useEffect } from "react";
import { getAlbumOrArtist, getSongsByCategory } from "../ApiService";

// creating a context
const MusicDataContext = createContext({});

function MusicDataContextProvider({ children }) {
    const [selectedNavItem, setSelectedNavItem] = useState("Home");
    const [allMusicData, setAllMusicData] = useState([]);

    //---------- fetching all music at initial level -------------
    const musicDataInfo = [
        {
            title: "Trending Playlist",
            data: [],
            type: "album",
            action: "trendPlay",
        },
        {
            title: "Trending Songs",
            data: [],
            type: "song",
            action: "trendSong",
        },
        { title: "All Stars", data: [], type: "artist", action: "stars" },
        {
            title: "New Release",
            data: [],
            type: "song",
            sort: { release: 1 },
            action: "newRelease",
        },
        {
            title: "Let's Party",
            data: [],
            type: "song",
            mood: "happy",
            action: "happy",
        },
        {
            title: "Top Romantic",
            data: [],
            type: "song",
            mood: "romantic",
            action: "romantic",
        },
        {
            title: "Heal Your Hearts",
            data: [],
            type: "song",
            mood: "sad",
            action: "sad",
        },
    ];

    function handleMusicData(data, action) {
        let updatedMusicDataInfo = musicDataInfo.map((musicData) => {
            if (musicData.action === action) {
                musicData.data = data;
            }
            return musicData;
        });

        setAllMusicData(updatedMusicDataInfo);
    }

    function fetchMusic() {
        musicDataInfo.map(async (music) => {
            if (music.mood) {
                let data = await getSongsByCategory(
                    `${music.type}?filter={"mood":"${music.mood}"}&limit=30`
                );

                handleMusicData(data, music.action);
            } else if (music.sort) {
                let data = await getSongsByCategory(
                    `${music.type}?sort={"release":1}&limit=30`
                );

                handleMusicData(data, music.action);
            } else {
                let data = await getSongsByCategory(`${music.type}?limit=30`);

                handleMusicData(data, music.action);
            }
        });
    }

    useEffect(() => {
        fetchMusic();
    }, []);

    // ----------- end of all music fetching --------------------

    //------------ fetching albums and artist data -----------

    const intialAlbumArtistState = {
        albumArtistPage: "hidden",
        isAlbum: true,
        albumArtistId: "64cee72fe41f6d0a8b0cd0a8",
        albumArtistObject: {},
    };

    function AlbumArtistReducer(state, action) {
        switch (action.type) {
            case "setAlbumArtistId":
                return { ...state, albumArtistId: action.payload };

            case "setAlbumArtistData":
                return { ...state, albumArtistObject: action.payload };

            case "setAlbumArtistPage":
                return { ...state, albumArtistPage: "active" };

            case "hideAlbumArtistPage":
                return { ...state, albumArtistPage: "hidden" };
            case "setArtist":
                return { ...state, isAlbum: false };

            case "setAlbum":
                return { ...state, isAlbum: true };
        }
    }

    const [albumArtistState, albumArtistDispatch] = useReducer(
        AlbumArtistReducer,
        intialAlbumArtistState
    );

    const { albumArtistId, albumArtistObject, albumArtistPage, isAlbum } =
        albumArtistState;

    useEffect(() => {
        let fetch = async () => {
            const data = await getAlbumOrArtist(albumArtistId, isAlbum);

            albumArtistDispatch({
                type: "setAlbumArtistData",
                payload: data,
            });
        };

        fetch();
    }, [albumArtistId]);

    return (
        <MusicDataContext.Provider
            value={{
                selectedNavItem,
                setSelectedNavItem,
                allMusicData,
                setAllMusicData,
                albumArtistDispatch,
                albumArtistObject,
                isAlbum,
                albumArtistPage,
            }}
        >
            {children}
        </MusicDataContext.Provider>
    );
}

function useMusicData() {
    return useContext(MusicDataContext);
}

// exporting stuff
export default MusicDataContextProvider;
export { MusicDataContext, useMusicData };
