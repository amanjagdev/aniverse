import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

//Importing Styles
import "./Header.css"

const Header = (props) => {
    const [searchText, setSearchText] = useState(undefined);
    const [searchType, setSearchType] = useState(0);

    const hanldeSearch = () => {
        props.history.push({
            pathname: '/search',
            state: {
                searchText: searchText,
                searchType: searchType,
            }
        });
    }

    return (
        <div className="Header">
            <div className="Logo">
                <Link to="/">
                    <h4>Aniverse</h4>
                </Link>
            </div>
            <div className="Search-Box">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder={"Search"}
                />
                <button onClick={() => hanldeSearch()}> <i className="fas fa-search"></i> </button>
            </div>
            <div className="Selector">
                <button className={searchType === 0 ? "selected" : ""} onClick={() => setSearchType(0)}>Anime</button>
                <button className={searchType === 1 ? "selected" : ""} onClick={() => setSearchType(1)}>Charecter</button>
            </div>
        </div>
    );
};

export default withRouter(Header);
