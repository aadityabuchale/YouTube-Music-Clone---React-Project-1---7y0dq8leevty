import React from "react";
import { Button } from "@mui/material";

function LargeSizeButton({ icon, children }) {
    return (
        <Button
            size="large"
            sx={{
                backgroundColor: "white",
                color: "black",
                textTransform: "none",
                padding: "5px 23px",
                borderRadius: "25px",
                display: "flex",
                gap: "8px",
                ":hover": {
                    backgroundColor: "#ddd",
                },
            }}
        >
            {icon}
            {children}
        </Button>
    );
}

export default LargeSizeButton;
