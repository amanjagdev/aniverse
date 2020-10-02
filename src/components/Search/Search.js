import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import {motion} from 'framer-motion';

//Importing Styles
import "./Search.css"

//Importing HOC
import AnimeCard from '../../HOC/AnimeCard/AnimeCard';
import CharacterCard from '../../HOC/CharacterCard/CharacterCard';

const Search = (props) => {

    //Getting data
    let searchText = props.location.state.searchText;

    const [display,setDisplay] = useState("anime");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const fetchCharecter = async () => {
        const url = `https://kitsu.io/api/edge/characters?filter[name]=${searchText}`
        try {
            const tempResult = await Axios.get(url);
            setResult([...tempResult.data.data]);
            setDisplay("character");
            console.log(result)
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    const fetchAnime = async () => {
        const url = `https://api.jikan.moe/v3/search/anime?q=${searchText}`
        const tempResult = await Axios.get(url);
        setResult([...tempResult.data.results]);
        console.log(result);
        setDisplay("anime");
    }

    useEffect(() => {
        setResult(null);
        const text = props.location.state.searchText;
        const escapedText = escape(text);
        searchText = escapedText;
        if (props.location.state.searchType === 1) {
            fetchCharecter();
        } else {
            fetchAnime();
        }
    }, [props.location.state]);

    return (
        <motion.div className="Search" initial={{opacity:0}} animate={{opacity:1}}  transition={{duration:0.5}}>
            <h1>Search Results : </h1>
            <div className="card-list">
                {
                    error ? (
                        <h3>{error.toString()}</h3>
                    ) : result && (
                        display === "character" ?
                            result.map((item) => <CharacterCard item={item} key={item.id} />)
                            : result.map((item) => <AnimeCard item={item} key={item.mal_id} />))
                }
            </div>
        </motion.div>
    )
}

export default Search
