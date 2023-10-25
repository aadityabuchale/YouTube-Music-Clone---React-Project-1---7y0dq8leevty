import React, { useEffect, useState } from "react";
import { useMusicData } from "../Contexts/MusicDataProvider";
import { getSongsByCategory } from "../ApiService";

function useMusicListToRender(initialType, initialLimit) {
    const { allMusicData } = useMusicData();

    const [musicListToRender, setMusicListToRender] = useState([]);
    const [cardLimit, setCardLimit] = useState(initialLimit);
    const [musicType, setMusicType] = useState(initialType);

    useEffect(() => {
        let musicMetaData = allMusicData?.find(
            (music) => music?.action === musicType
        );

        async function fetchMusicData() {
            let response = [];

            try {
                if (musicMetaData?.mood) {
                    response = await getSongsByCategory(
                        `${
                            musicMetaData?.type
                        }?filter={"mood":"${encodeURIComponent(
                            musicMetaData?.mood
                        )}"}&limit=${cardLimit}`
                    );

                    setMusicListToRender(response);
                } else if (musicMetaData?.sort) {
                    response = await getSongsByCategory(
                        `${musicMetaData?.type}?sort={"release":1}&limit=${cardLimit}`
                    );

                    setMusicListToRender(response);
                } else {
                    response = await getSongsByCategory(
                        `${musicMetaData?.type}?limit=${cardLimit}`
                    );

                    setMusicListToRender(response);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        musicMetaData !== undefined && fetchMusicData();
    }, [musicType, cardLimit, allMusicData]);

    return [musicListToRender, setCardLimit, setMusicType];
}

export default useMusicListToRender;
