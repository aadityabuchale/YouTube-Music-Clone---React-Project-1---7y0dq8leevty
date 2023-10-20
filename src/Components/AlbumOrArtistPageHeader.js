import React from "react";
import "./Components.styles/AlbumOrArtistPageHeader.css";
import { useMusicData } from "../Contexts/MusicDataProvider";
import { ShareIcon, ShuffleIcon } from "../svgs/MusicPlayerSvgs";
import LargeSizeButton from "./Common_Components/LargeSizeButton";

function AlbumOrArtistPageHeader() {
    const { albumArtistObject, isArtist } = useMusicData();

    const { image, thumbnail, title, name, description } = albumArtistObject;

    return (
        <section
            className="profile-header-container"
            style={{ backgroundImage: `url(${image ? image : thumbnail})` }}
        >
            <div className="black-bg"></div>
            <div className="profile-header">
                <div className="profile-name">{name ? name : title}</div>
                <div className="description">{description}</div>
                <div className="button-container">
                    <LargeSizeButton
                        icon={
                            <ShuffleIcon
                                color="black"
                                width={"25px"}
                                height={"25px"}
                            />
                        }
                    >
                        Shufle
                    </LargeSizeButton>
                    <LargeSizeButton icon={<ShareIcon color="black" />}>
                        Share
                    </LargeSizeButton>
                </div>
            </div>
        </section>
    );
}

export default AlbumOrArtistPageHeader;
