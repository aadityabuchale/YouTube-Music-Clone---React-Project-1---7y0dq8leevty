import React, { useContext } from "react";
import { AppContext } from "../../Pages/AppContext";

// mui imports
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Button } from "@mui/material";

import "./Common_components.styles/MusicCarousel.css";

const MusicCarousel = ({ heading }) => {
    const { allSongs } = useContext(AppContext);

    return (
        <div className="carousel-container">
            <div className="carousel-heading">
                <h2>{heading}</h2>
                <div className="carousel-nav-icons">
                    <Button variant="outlined" className="btn btn-playall">
                        Play All
                    </Button>
                    <Button
                        variant="outlined"
                        className="btn btn-prev"
                        startIcon={<ArrowBackIosSharpIcon />}
                    ></Button>

                    <Button
                        variant="outlined"
                        className="btn btn-next"
                        size="small"
                        sx={{
                            borderRadius: "50% !important",
                            borderColor: "#c0c0c0",
                        }}
                    >
                        <ArrowForwardIosSharpIcon
                            sx={{
                                fontSize: "16px",
                                margin: "15px 0px",
                            }}
                        />
                    </Button>
                </div>
            </div>

            <div className="carousel-body">
                {allSongs?.map((song) => {
                    return (
                        <div key={song?._id} className="music-card">
                            <div className="image">
                                <img src={song?.thumbnail} alt="" />
                            </div>
                            <div className="music-details">
                                <p className="music-name">{song?.title}</p>
                                <p className="music-artist">
                                    {song?.artist[0]?.name}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MusicCarousel;
