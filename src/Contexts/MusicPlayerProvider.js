import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import { getMusic } from "../ApiService";
import { useNavigate } from "react-router-dom";

const MusicPlayerContext = createContext();

function MusicPlayerProvider({ children }) {
    const [originalMusicList, setOriginalMusicList] = useState([]);
    const navigate = useNavigate();

    const initialState = {
        musicPlayer: "inactive",
        musicController: "inactive",
        musicId: "64cf94e447ae38c3e33a7253",
        musicStatus: "play",
        musicObject: {},
        musicPlayerSongsList: [],
        isShuffle: false,
        isLoop: false,
    };

    function musicReducer(state, action) {
        switch (action.type) {
            case "setMusicPlayer":
                return {
                    ...state,
                    musicPlayer: action.player,
                    musicController: action.controller,
                };

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
                };

            case "setMusicData":
                return {
                    ...state,
                    musicObject: action.payload,
                };

            case "setMusicList":
                setOriginalMusicList(action.songsList);
                return { ...state, musicPlayerSongsList: action.songsList };

            case "setMusicSettings":
                return {
                    ...state,
                    isShuffle: action.shuffle,
                    isLoop: action.loop,
                };

            default:
                return { ...state };
        }
    }

    const [musicState, musicDispatch] = useReducer(musicReducer, initialState);

    let {
        musicPlayer,
        musicId,
        musicStatus,
        musicObject,
        musicPlayerSongsList,
        musicController,
        isShuffle,
        isLoop,
    } = musicState;

    //  ------------- for getting music data --------------------

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

    // --------------- handlers -------------------------

    // handling prev next actions
    function handlePlayerControls(playDirection) {
        let curIdx = 0;
        let n = musicPlayerSongsList?.length;

        for (let i = 0; i < n; i++) {
            if (musicPlayerSongsList[i]?._id === musicObject?._id) {
                curIdx = i;
            }
        }

        let nextIdx = playDirection === "next" ? curIdx + 1 : curIdx - 1;

        if (nextIdx === n) {
            nextIdx = 0;
        }

        if (nextIdx === -1) {
            return;
        }

        const nextObj = musicPlayerSongsList[nextIdx];
        musicDispatch({ type: "setMusicId", payload: nextObj?._id });
        musicDispatch({ type: "setMusicData", payload: nextObj });
    }

    // function for handling music player ui interactions
    function handleMusicPlayer(id, curState, controllerState) {
        if (id !== "keepAsItIs") {
            musicDispatch({ type: "setMusicId", payload: id });
        }

        musicDispatch({
            type: "setMusicPlayer",
            player: curState,
            controller: controllerState,
        });
    }

    // handling shuffle loop
    function handleAdditionalSettings(e) {
        if (e.target.classList.contains("shuffleIcon")) {
            musicDispatch({
                type: "setMusicSettings",
                shuffle: !isShuffle,
                loop: isLoop,
            });
        } else if (e.target.classList.contains("loopIcon")) {
            musicDispatch({
                type: "setMusicSettings",
                loop: !isLoop,
                shuffle: isShuffle,
            });
        } else if (e.target.classList.contains("downArrowIcon")) {
            musicDispatch({
                type: "setMusicPlayer",
                player: "inactive",
                controller: "inactive",
            });
            navigate(-1);
        }
    }

    useEffect(() => {
        if (isShuffle) {
            let shuffledArray = musicPlayerSongsList;

            // Fisher-Yates (Knuth-Shuffle) algorithm

            for (let i = shuffledArray.length - 1; i > 0; i--) {
                // Generate a random index between 0 and i
                const randomIndex = Math.floor(Math.random() * (i + 1));

                // Swap elements at randomIndex and i
                [shuffledArray[i], shuffledArray[randomIndex]] = [
                    shuffledArray[randomIndex],
                    shuffledArray[i],
                ];
            }

            musicPlayerSongsList = shuffledArray;
        } else {
            musicPlayerSongsList = [...originalMusicList];
        }
    }, [isShuffle]);

    let obj = {
        ...musicState,
        musicDispatch,
        handleMusicPlayer,
        handlePlayerControls,
        handleAdditionalSettings,
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
