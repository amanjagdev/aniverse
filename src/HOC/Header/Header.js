import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

//Importing Styles
import "./Header.css";

const Header = (props) => {
    const searchQuery = new URLSearchParams(props.location.search);
    const [searchText, setSearchText] = useState(
        searchQuery.get("query") || ""
    );
    const [searchType, setSearchType] = useState(
        parseInt(searchQuery.get("type")) || 0
    );

    const handleSearch = (ev) => {
        ev.preventDefault();
        props.history.push(`/search/?query=${searchText}&type=${searchType}`);
    };

    return (
        <form onSubmit={handleSearch} className="Header">
            <div className="Logo">
                <Link to="/">
                    <h4>Aniverse</h4>
                </Link>
            </div>
            <div onSubmit={handleSearch} className="Search-Box">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder={"Search"}
                />
                <button type="submit">
                    {" "}
                    <i className="fas fa-search"></i>{" "}
                </button>
            </div>
            <div className="Selector">
                <button
                    className={searchType === 0 ? "selected" : ""}
                    onClick={() => setSearchType(0)}
                    type="submit"
                >
                    Anime
                </button>
                <button
                    className={searchType === 1 ? "selected" : ""}
                    onClick={() => setSearchType(1)}
                    type="submit"
                >
                    Character
                </button>
            </div>
        </form>
    );
};

export default withRouter(Header);
