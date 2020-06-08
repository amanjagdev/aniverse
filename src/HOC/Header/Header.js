import React, { useState } from "react";
import { withRouter ,Link} from "react-router-dom";

//Importing Styles
import "./Header.css"

const Header = (props) => {
    const [searchText, setSearchText] = useState("Search Anime or Charecter");
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
            <div className="Search">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className="Selector">
                <button onClick={() => setSearchType(0)}>Anime</button>
                <button onClick={() => setSearchType(1)}>Charecter</button>
            </div>
        </div>
    );
};

export default withRouter(Header);
