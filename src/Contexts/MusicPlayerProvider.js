import React, { createContext, useContext, useEffect, useReducer } from "react";
import { getMusic } from "../ApiService";

const MusicPlayerContext = createContext();

function MusicPlayerProvider({ children }) {
    const initialState = {
        musicPlayer: "inactive",
        musicId: "64cf94e447ae38c3e33a7253",
        musicStatus: "pause",
        musicObject: {},
        musicPlayerSongsList: [],
    };

    function musicReducer(state, action) {
        switch (action.type) {
            case "setMusicPlayer":
                return { ...state, musicPlayer: action.payload };

            case "play":
                return { ...state, musicStatus: "play" };
            case "pause":
                return { ...state, musicStatus: "pause" };

            case "stop":
                return { ...initialState };

            case "setMusicId":
                return {
                    ...state,
                    musicId: action.payload,
                    musicPlayerSongsList: action.songsList,
                };

            case "setMusicData":
                return {
                    ...state,
                    musicObject: action.payload,
                };

            default:
                return { ...state };
        }
    }

    const [musicState, musicDispatch] = useReducer(musicReducer, initialState);

    const {
        musicPlayer,
        musicId,
        musicStatus,
        musicObject,
        musicPlayerSongsList,
    } = musicState;

    useEffect(() => {
        if (musicId) {
            let fetch = async () => {
                try {
                    let data = await getMusic(musicId);
                    musicDispatch({ type: "setMusicData", payload: data });
                    musicDispatch({ type: "play" });
                } catch (err) {
                    console.log("error fetching music data", err);
                }
            };
            fetch();
        }
    }, [musicId]);

    let obj = {
        musicPlayer,
        musicStatus,
        musicId,
        musicObject,
        musicDispatch,
        musicPlayerSongsList,
    };

    return (
        <MusicPlayerContext.Provider value={obj}>
            {children}
        </MusicPlayerContext.Provider>
    );
}

function useMusic() {
    const obj = useContext(MusicPlayerContext);

    if (obj === undefined) {
        console.log("trying to access data outside MusicPlayer context");
    } else {
        return obj;
    }
}

export default MusicPlayerProvider;
export { useMusic };
