import React, { useContext, createRef, useState } from "react";
import { MusicDataContext } from "../../../Contexts/MusicDataContext";

// mui imports
import { Button } from "@mui/material";

import "./MusicCarousel.css";
import RectangleCard from "./RectangleCard";
import SquareCard from "./SquareCard";
import SmallSizeCard from "./SmallSizeCard";

const MusicCarousel = ({ heading, musicType, cardType }) => {
    const { allMusicData } = useContext(MusicDataContext);
    const myRef = createRef();

    // finding the music list for rendering according to type
    let musicListToRender = allMusicData.find(
        (musicData) => musicData.action === musicType
    )?.data;

    // logic for left right carousel movement
    const [isLeft, setIsLeft] = useState(true);
    const [isRight, setIsRight] = useState(false);

    // for handling enable diable of buttons
    function handleScroll() {
        if (myRef.current.scrollLeft > 0) {
            setIsLeft(false);
        } else {
            setIsLeft(true);
        }

        if (
            myRef.current.scrollWidth -
                (myRef.current.scrollLeft + window.innerWidth) >
            0
        ) {
            setIsRight(false);
        } else {
            setIsRight(true);
        }
    }

    function handleLeftClick() {
        myRef.current.scrollBy({
            left: -window.innerWidth + 150,
            behavior: "smooth",
        });
    }

    function handleRightClick() {
        myRef.current.scrollBy({
            left: window.innerWidth - 150,
            behavior: "smooth",
        });
    }

    return (
        <div className="carousel-container">
            <div className="carousel-heading">
                {/* heading */}
                <h2>{heading}</h2>

                {/* button - play all */}
                <div className="carousel-nav-icons">
                    <Button
                        className="btn btn-play-all"
                        sx={{
                            border: "0.1px solid #242424;",
                            color: "white",
                            borderRadius: "25px",
                            fontSize: "13px",
                            padding: "5px 8px",
                            textTransform: "none",
                            ":hover": {
                                backgroundColor: "#282828",
                            },
                        }}
                    >
                        Play All
                    </Button>

                    {/* button - left */}
                    <button
                        className="btn-left btn"
                        disabled={isLeft}
                        style={{
                            opacity: isLeft && "0.3",
                            color: isLeft && "grey",
                            cursor: isLeft && "auto",
                        }}
                        onClick={handleLeftClick}
                    >
                        <i
                            className="fa-solid fa-chevron-left"
                            style={{ color: "#ffffff" }}
                        ></i>
                    </button>

                    {/*  button - right */}
                    <button
                        className="btn btn right"
                        disabled={isRight}
                        style={{
                            opacity: isRight && "0.3",
                            color: isRight && "grey",
                            cursor: isRight && "auto",
                        }}
                        onClick={handleRightClick}
                    >
                        <i
                            className="fa-solid fa-chevron-right"
                            style={{ color: "#ffffff" }}
                        ></i>
                    </button>
                </div>
            </div>

            {/* all cards */}
            <div
                className="carousel-body"
                ref={myRef}
                onScroll={handleScroll}
                style={
                    cardType === "smallSize" && {
                        overflowX: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        gap: "10px",
                        height: "90%",
                        marginTop: "10px",
                    }
                }
            >
                {musicListToRender &&
                    musicListToRender?.map((song, idx) => {
                        return (
                            <React.Fragment key={song?._id}>
                                {cardType === "rectangle" && (
                                    <RectangleCard
                                        song={song}
                                        key={song?._id}
                                    />
                                )}

                                {cardType === "square" && (
                                    <SquareCard song={song} key={song?._id} />
                                )}

                                {cardType === "smallSize" && (
                                    <SmallSizeCard
                                        song={song}
                                        key={song?._id}
                                        count={idx + 1}
                                    />
                                )}
                            </React.Fragment>
                        );
                    })}
            </div>
        </div>
    );
};

export default MusicCarousel;
