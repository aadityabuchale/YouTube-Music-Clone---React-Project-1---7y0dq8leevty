import React from "react";
import "./Components.styles/AlbumOrArtistPageHeader.css";
import { useMusicData } from "../Contexts/MusicDataProvider";
import { ShuffleIcon } from "../svgs/MusicPlayerSvgs";

import { Button } from "@mui/material";

function AlbumOrArtistPageHeader() {
    const { albumArtistObject, isArtist } = useMusicData();

    const { image, title, name, description } = albumArtistObject;

    return (
        <section
            className="profile-header-container"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="black-bg"></div>
            <div className="profile-header">
                <div className="profile-name">{isArtist ? name : title}</div>
                <div className="description">{description}</div>
                <div className="button-container">
                    <Button
                        size="large"
                        sx={{
                            backgroundColor: "white",
                            color: "black",
                            textTransform: "none",
                            padding: "5px 23px",
                            borderRadius: "25px",
                            ":hover": {
                                backgroundColor: "#66b8ff",
                            },
                        }}
                    >
                        <ShuffleIcon />
                        Shuffle
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default AlbumOrArtistPageHeader;
