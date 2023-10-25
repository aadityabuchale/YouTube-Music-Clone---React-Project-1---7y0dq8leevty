import React, { useContext, useReducer } from "react";
import { createContext, useState, useEffect } from "react";
import { getAlbumOrArtist, getMusic, getSongsByCategory } from "../ApiService";

// creating a context
const MusicDataContext = createContext({});

function MusicDataContextProvider({ children }) {
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

    //------------ fetching albums and artist data -------------

    const initialAlbumArtistState = {
        albumArtistPage: "inactive",
        isAlbum: true,
        albumArtistId: "",
        albumArtistObject: {},
        albumArtistSongsList: [],
    };

    function AlbumArtistReducer(state, action) {
        switch (action.type) {
            case "setAlbumArtistId":
                return { ...state, albumArtistId: action?.payload };

            case "setAlbumArtistData":
                return { ...state, albumArtistObject: action?.payload };

            case "setAlbumArtistPage":
                return { ...state, albumArtistPage: action.payload };

            case "setArtist":
                return { ...state, isAlbum: false };

            case "setAlbum":
                return { ...state, isAlbum: true };

            case "setAlbumArtistSongsList":
                return { ...state, albumArtistSongsList: action?.payload };

            default:
                return state;
        }
    }

    const [albumArtistState, albumArtistDispatch] = useReducer(
        AlbumArtistReducer,
        initialAlbumArtistState
    );

    const {
        albumArtistId,
        albumArtistObject,
        albumArtistPage,
        isAlbum,
        albumArtistSongsList,
    } = albumArtistState;

    // getting data from api
    useEffect(() => {
        let fetch = async () => {
            const data = await getAlbumOrArtist(albumArtistId, isAlbum);

            albumArtistDispatch({
                type: "setAlbumArtistData",
                payload: data,
            });

            albumArtistDispatch({
                type: "setAlbumArtistSongsList",
                payload: data?.songs,
            });
        };

        fetch();
    }, [albumArtistId]);

    // setting up initial states
    function handleAlbumArtistPage(profileType, id) {
        albumArtistDispatch({ type: "setAlbumArtistId", payload: id });
        albumArtistDispatch({
            type: "setAlbumArtistPage",
            payload: "active",
        });

        if (profileType === "artist") {
            albumArtistDispatch({ type: "setArtist" });
        } else {
            albumArtistDispatch({ type: "setAlbum" });
        }
    }

    // ----------- end of fetching album artists data ------------

    return (
        <MusicDataContext.Provider
            value={{
                allMusicData,
                setAllMusicData,
                albumArtistDispatch,
                albumArtistObject,
                isAlbum,
                albumArtistPage,
                albumArtistSongsList,
                handleAlbumArtistPage,
            }}
        >
            {children}
        </MusicDataContext.Provider>
    );
}

function useMusicData() {
    const obj = useContext(MusicDataContext);

    if (!obj) {
        console.log("Accessing Music Data context outside limits");
        return;
    }
    return obj;
}

// exporting stuff
export default MusicDataContextProvider;
export { MusicDataContext, useMusicData };
