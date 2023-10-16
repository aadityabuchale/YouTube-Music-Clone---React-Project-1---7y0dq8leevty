import React from "react";
import "./Pages.styles/AlbumOrArtistPage.css";
import AlbumOrArtistPageHeader from "../Components/AlbumOrArtistPageHeader";
import { useMusicData } from "../Contexts/MusicDataProvider";
import SmallSizeCard from "../Components/Common_Components/Carousel/SmallSizeCard";
import MusicListContainer from "../Components/Common_Components/MusicListContainer";

function AlbumOrArtistPage() {
    const { albumArtistSongsList } = useMusicData();

    return (
        <main className="profile-container">
            <AlbumOrArtistPageHeader />
            <MusicListContainer
                heading={"Songs"}
                musicList={albumArtistSongsList}
            />
        </main>
    );
}

export default AlbumOrArtistPage;
