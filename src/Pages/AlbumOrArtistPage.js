import React from "react";
import "./Pages.styles/AlbumOrArtistPage.css";
import AlbumOrArtistPageHeader from "../Components/AlbumOrArtistPageHeader";
import { useMusicData } from "../Contexts/MusicDataProvider";
import SmallSizeCard from "../Components/Common_Components/Carousel/SmallSizeCard";
import MusicListContainer from "../Components/Common_Components/MusicListContainer";

function AlbumOrArtistPage() {
    const { allMusicData } = useMusicData();

    return (
        <main className="profile-container">
            <AlbumOrArtistPageHeader />
            <MusicListContainer
                heading={"Songs"}
                musicList={allMusicData[4].data}
            />
        </main>
    );
}

export default AlbumOrArtistPage;
