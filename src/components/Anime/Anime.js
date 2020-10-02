import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import {motion} from 'framer-motion';

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
        <motion.div initial={{x:-1000}} animate={{x:0}}  transition={{duration:0.5,type:'tween'}}>
            {
                anime &&
                (<div className="Anime">
                    <h1 className="title">{anime.title}</h1>
                    <div className="top-section">
                        <div className="details">
                            <h4>No of Episodes : {anime.episodes ? anime.episodes : <>Not Avialable</>}</h4>
                            <h4>Status : {anime.status ? anime.status : <>Not Avialable</>}</h4>
                            <h4>Rating : {anime.rating ? anime.rating : <>Not Avialable</>}</h4>
                            <h4>Score : {anime.score ? anime.score : <>Not Avialable</>}</h4>
                        </div>
                        <img src={anime.image_url} alt={anime.title} />
                    </div>
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
        </motion.div>
    )
}

export default withRouter(Anime);