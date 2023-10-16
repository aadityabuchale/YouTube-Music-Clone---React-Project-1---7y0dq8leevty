import React from "react";
import "./Components.styles/SearchPageNoResultsFound.css";

function SearchPageNoResultsFound({ searchInput }) {
    return (
        <section className="noresults-container">
            <img src="./images/no-results.png" className="no-results-img" />
            <h1 className="ytsans-heading">
                No results found for{" "}
                <span style={{ color: "red" }}>{searchInput}</span> , try
                different song!
            </h1>
        </section>
    );
}

export default SearchPageNoResultsFound;
