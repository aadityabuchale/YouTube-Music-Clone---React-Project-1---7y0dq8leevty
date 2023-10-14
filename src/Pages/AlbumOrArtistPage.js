import React from "react";
import "./Pages.styles/AlbumOrArtistPage.css";
import AlbumOrArtistPageHeader from "../Components/AlbumOrArtistPageHeader";
import { useMusicData } from "../Contexts/MusicDataProvider";
import SmallSizeCard from "../Components/Common_Components/Carousel/SmallSizeCard";

function AlbumOrArtistPage() {
    const { allMusicData } = useMusicData();

    return (
        <main className="profile-container">
            <AlbumOrArtistPageHeader />

            <div className="songs-heading">Songs</div>
            <div className="songs-container">
                {allMusicData[4]?.data?.map((song, idx) => {
                    return (
                        <SmallSizeCard
                            key={song._id}
                            song={song}
                            count={idx + 1}
                            isProfileCard="true"
                        />
                    );
                })}
            </div>
        </main>
    );
}

export default AlbumOrArtistPage;
