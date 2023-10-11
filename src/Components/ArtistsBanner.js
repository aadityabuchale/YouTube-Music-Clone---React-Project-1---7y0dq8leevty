import React from "react";
import "./Components.styles/ArtistsBanner.css";
import { Button } from "@mui/material";

const ArtistsBanner = () => {
    return (
        <div className="artists-like-container">
            <img
                src="https://www.youtube.com/img/music/tastebuilder/shelf_thumbnail/v6/IN_992_X_304.png"
                alt=""
            />
            <div className="info-container">
                <div className="question-text">
                    Tell us which artists you like
                </div>
                <p>We'll create an experience just for you</p>
                <Button
                    size="medium"
                    sx={{
                        backgroundColor: "#fff",
                        color: "black",
                        borderRadius: "50px",
                        padding: "5px 7px",
                        width: "100px",
                        ":hover": {
                            backgroundColor: "rgb(215, 216, 216)",
                        },
                    }}
                >
                    Lets go!
                </Button>
            </div>
        </div>
    );
};

export default ArtistsBanner;
