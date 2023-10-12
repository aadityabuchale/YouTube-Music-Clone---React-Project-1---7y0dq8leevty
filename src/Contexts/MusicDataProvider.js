import React from "react";
import { createContext, useState, useEffect } from "react";
import { getSongsByCategory } from "../ApiService";

// creating a context
const MusicDataContext = createContext({});

function MusicDataContextProvider({ children }) {
    const [selectedNavItem, setSelectedNavItem] = useState("Home");
    const [allMusicData, setAllMusicData] = useState([]);

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

    // fetching all music at initial level
    useEffect(() => {
        fetchMusic();
    }, []);

    return (
        <MusicDataContext.Provider
            value={{
                selectedNavItem,
                setSelectedNavItem,
                allMusicData,
                setAllMusicData,
            }}
        >
            {children}
        </MusicDataContext.Provider>
    );
}

// exporting stuff
export default MusicDataContextProvider;
export { MusicDataContext };
