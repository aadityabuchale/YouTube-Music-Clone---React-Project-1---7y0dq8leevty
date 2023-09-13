import React from "react";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";

function Navbar() {
    let categories = ["Home", "Explore", "Library", "Upgrade"];

    return (
        <div className=" text-white text-lg flex-col gap-3">
            <div className="p-[10px] ps-4 flex gap-4 bg-red-800 rounded-lg w-fit pe-[140px]">
                <HomeSharpIcon />
                <span>Home</span>
            </div>

            <div className="p-[10px] ps-4 flex gap-4 bg-red-800 rounded-lg w-fit pe-[140px]">
                <HomeSharpIcon />
                <span>Home</span>
            </div>
        </div>
    );
}

export default Navbar;
