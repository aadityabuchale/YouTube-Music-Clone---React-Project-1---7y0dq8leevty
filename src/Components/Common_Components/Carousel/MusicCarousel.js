import React, { useContext, createRef, useState, useEffect } from "react";
import { MusicDataContext } from "../../../Contexts/MusicDataProvider";
import { getSongsByCategory } from "../../../ApiService";
import { useNavigate } from "react-router-dom";
import "./MusicCarousel.css";
import RectangleCard from "./RectangleCard";
import SquareCard from "./SquareCard";
import SmallSizeCard from "./SmallSizeCard";
import useMusicListToRender from "../../../hooks/useMusicListToRender";

// mui imports
import { Button } from "@mui/material";

const MusicCarousel = ({ heading, musicType, cardType, isReverse }) => {
    const { allMusicData } = useContext(MusicDataContext);
    const navigate = useNavigate();
    //custom hook
    const [musicListToRender, setCardLimit] = useMusicListToRender(
        musicType,
        30
    );

    // ---------------------- scroll logic ---------------------

    const myRef = createRef();

    // finding the music list for rendering according to type
    useEffect(() => {
        // if we get small sized card then we fetch more songs
        if (cardType === "smallSize") {
            setCardLimit(50);
        }
    }, [cardType, musicType, allMusicData]);

    // logic for left right carousel movement
    const [isLeft, setIsLeft] = useState(true);
    const [isRight, setIsRight] = useState(false);

    // for handling enable disable of buttons
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

    // -------------------- handlers -------------------------

    function handleLeftClick() {
        myRef.current.scrollBy({
            left: -window.innerWidth + 200,
            behavior: "smooth",
        });
    }

    function handleRightClick() {
        myRef.current.scrollBy({
            left: window.innerWidth - 200,
            behavior: "smooth",
        });
    }

    function handleShowAllClick() {
        navigate(`/allsongs/${musicType}/${heading}`);
    }

    // ------------------- jsx --------------------
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
                        onClick={handleShowAllClick}
                    >
                        Show All
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
                    cardType === "smallSize"
                        ? {
                              overflowX: "hidden",
                              display: "flex",
                              flexDirection: "column",
                              flexWrap: "wrap",
                              gap: "10px",
                              height: "100%",
                              marginTop: "10px",
                          }
                        : {}
                }
            >
                {musicListToRender &&
                    musicListToRender?.map((song, idx) => {
                        return (
                            <React.Fragment key={song?._id}>
                                {/* card rendering for rectangle shape */}
                                {cardType === "rectangle" && (
                                    <RectangleCard
                                        song={song}
                                        key={song?._id}
                                        cardType={cardType}
                                        musicList={musicListToRender}
                                    />
                                )}
                                {/* card rendering for squre shape */}
                                {cardType === "square" && (
                                    <SquareCard
                                        song={song}
                                        key={song?._id}
                                        cardType={cardType}
                                        musicList={musicListToRender}
                                    />
                                )}
                                {/* small sized card rendering */}
                                {cardType === "smallSize" && (
                                    <SmallSizeCard
                                        song={song}
                                        key={song?._id}
                                        count={idx + 1}
                                        cardType={cardType}
                                        musicList={musicListToRender}
                                    />
                                )}
                            </React.Fragment>
                        );
                    })}
            </div>
        </div>
    );
};

export default React.memo(MusicCarousel);
