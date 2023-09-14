import React from "react";
import { Button } from "@mui/material";

function Buttons({ activity }) {
    return (
        <Button
            size="small"
            sx={{
                backgroundColor: "#41413D",
                color: "white",
                textTransform: "none",
                padding: "5px",
                ":hover": {
                    backgroundColor: "rgb(117, 116, 116)",
                },
            }}
        >
            {activity}
        </Button>
    );
}

export default Buttons;
