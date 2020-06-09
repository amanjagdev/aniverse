import React, { useState, useEffect } from 'react'
import Axios from 'axios';

//Importing Styles
import "./Search.css"

//Importing HOC
import AnimeCard from '../../HOC/AnimeCard/AnimeCard';
import CharacterCard from '../../HOC/CharacterCard/CharacterCard';

const Search = (props) => {
    //Getting data
    const [searchText,setSearchText] = useState(props.location.state.searchText);
    const [searchType,setSearchType] = useState(props.location.state.searchType);

    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const fetchCharecter = async () => {
        const url = `https://api.jikan.moe/v3/search/people?q=${searchText}`
        try {
            const tempResult = await Axios.get(url);
            setResult(tempResult.data.results);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    const fetchAnime = async () => {
        const url = `https://api.jikan.moe/v3/search/anime?q=${searchText}`
        const tempResult = await Axios.get(url);
        setResult(tempResult.data.results);
    }

    useEffect(() => {

        console.log()
        if (searchType) {
            fetchCharecter();
        } else {
            fetchAnime();
        }
    }, [])

    return (
        <div className="Search">
            <h1>Search Results : </h1>
            {
                error ? (
                    <h3>{error.toString()}</h3>
                ): result && (
                    searchType === 1 ?
                    result.map((item) => <CharacterCard item={item} key={item.id} /> )
                    : result.map((item) => <AnimeCard item={item} key={item.mal_id} /> ))
            }
        </div>
    )
}

export default Search
