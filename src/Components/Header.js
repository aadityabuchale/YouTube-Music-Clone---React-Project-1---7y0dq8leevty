import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CastSharpIcon from "@mui/icons-material/CastSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Avatar } from "@mui/material";

function Header() {
    return (
        <div className="flex justify-between text-center header p-3 px-4 h-[3.5rem] mx-2 pe-20">
            <div className="flex gap-5">
                <MenuOutlinedIcon
                    color="white"
                    className=" text-white"
                ></MenuOutlinedIcon>

                <img
                    src="./images/on_platform_logo_dark.svg"
                    className=" h-[70%]"
                    alt="logo img"
                />
            </div>

            <div className="flex w-[30%] h-[120%] rounded-md">
                <div className="bg-[#292929] text-white w-[10%] text-center pt-1 rounded-s-md">
                    <SearchSharpIcon />
                </div>
                <input
                    type="text"
                    className="w-[80%] p-1 ps-3 bg-[#292929] rounded-e-md focus:border-none border-none"
                    placeholder="Search songs, albums, artists, podcasts"
                />
            </div>

            <div className="flex gap-8 text-center">
                <CastSharpIcon className="text-white mt-[3px] text-[14px]" />
                <Avatar sx={{ width: 27, height: 27, fontSize: 13 }}>AB</Avatar>
            </div>
        </div>
    );
}

export default Header;
