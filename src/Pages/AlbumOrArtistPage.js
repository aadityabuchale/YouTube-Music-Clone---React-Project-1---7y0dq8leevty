import React, { useEffect } from "react";
import "./Pages.styles/AlbumOrArtistPage.css";
import AlbumOrArtistPageHeader from "../Components/AlbumOrArtistPageHeader";
import { useMusicData } from "../Contexts/MusicDataProvider";
import SmallSizeCard from "../Components/Common_Components/Carousel/SmallSizeCard";
import MusicListContainer from "../Components/Common_Components/MusicListContainer";
import { useParams } from "react-router-dom";

function AlbumOrArtistPage() {
    const { albumArtistSongsList, handleAlbumArtistPage } = useMusicData();

    const { profileType, id } = useParams();

    useEffect(() => {
        handleAlbumArtistPage(profileType, id);
    }, [id]);

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
