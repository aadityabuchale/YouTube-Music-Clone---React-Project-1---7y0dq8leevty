import React from "react";
import { Button } from "@mui/material";

function LargeSizeButton({ icon, children, setListCount }) {
    // list count is coming from search results where we have to add
    //button on click of that we have to render all songs

    let buttonStyles = setListCount
        ? {
              backgroundColor: "black",
              border: "1.5px solid #555",
              margin: "10px",
              color: "white",
              textTransform: "none",
              padding: "3px 20px",
              borderRadius: "25px",
              display: "flex",
              gap: "8px",
              ":hover": {
                  backgroundColor: "#333",
              },
          }
        : {
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
          };

    return (
        <Button
            size="large"
            sx={buttonStyles}
            onClick={() =>
                setListCount((cnt) => {
                    return cnt === 5 ? 20 : 5;
                })
            }
        >
            {icon}
            {children}
        </Button>
    );
}

export default LargeSizeButton;
