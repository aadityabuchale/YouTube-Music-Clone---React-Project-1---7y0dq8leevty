import React from "react";
import { createContext, useState, useEffect } from "react";
import { getAllSongs } from "../ApiService";

// creating a context
const AppContext = createContext({});

function AppContextFunction({ children }) {
    const [selectedNavItem, setSelectedNavItem] = useState("Home");
    const [allSongs, setAllSongs] = useState([]);

    // fetching all movies
    useEffect(() => {
        async function func() {
            const data = await getAllSongs();
            setAllSongs(data);
        }
        func();
    }, []);

    return (
        <AppContext.Provider
            value={{
                selectedNavItem,
                setSelectedNavItem,
                setAllSongs,
                allSongs,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

// exporting stuff
export default AppContextFunction;
export { AppContext };
