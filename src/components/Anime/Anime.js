import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

//Importing Styles
import "./Anime.css";

const Anime = (props) => {
    const animeId = props.location.state.animeId || 17;
    const [anime, setAnime] = useState(null);

    const fetchAnime = async () => {
        const tempAnime = await Axios.get(`https://api.jikan.moe/v3/anime/${animeId}`);
        console.log(tempAnime.data);
        setAnime(tempAnime.data);
    }
    useEffect(() => {
        fetchAnime();
    }, [])

    return (
        <div>
            {
                anime &&
                (<div className="Anime">
                    <h1>{anime.title}</h1>
                    <img src={anime.image_url} alt={anime.title} />
                    <h4>No of Episodes : {anime.episodes ? anime.episodes : <>Not Avialable</>}</h4>
                    <div className="summary">
                        <h4>Summary :</h4>
                        <p>{anime.synopsis}</p>
                    </div>
                    <div className="more-info">
                        <a href={anime.url}>
                            <button>Read More</button>
                        </a>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default withRouter(Anime);