import React from "react";
import { Button } from "@mui/material";

function Buttons({ activity }) {
    return (
        <Button
            size="small"
            sx={{
                backgroundColor: "#232323",
                color: "white",
                textTransform: "none",
                padding: "5px",
                ":hover": {
                    backgroundColor: "rgb(70, 70, 70)",
                },
            }}
        >
            {activity}
        </Button>
    );
}

export default Buttons;
