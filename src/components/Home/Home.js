import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

//Importing Styles
import "./Home.css"

//Importing HOC
import Card from "../../HOC/Card/Card";

const Home = (props) => {
    const [animeList, setAnimeList] = useState(null);
    // const [charecterList, setCharecterList] = useState(null);

    const fetchAnime = async () => {
        const tempAnimeList = await Axios.get("https://api.jikan.moe/v3/search/anime?limit=10");
        setAnimeList(tempAnimeList.data.results);
        console.log(tempAnimeList.data.results);
        // return animeList;
    }
    useEffect(() => {
        fetchAnime();
    }, [])

    return (
        <div className="Home">
            <h1>Popular Anime</h1>
            {
                animeList &&
                animeList.map((anime) => (<Card item={anime} key={anime.mal_id}/>))
            }
            <h1>Popular Charecters</h1>
        </div>
    )
}

export default withRouter(Home)
