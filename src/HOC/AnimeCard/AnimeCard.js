import React from 'react';
import {motion} from 'framer-motion';

//CSS
import './AnimeCard.css';
import { withRouter } from 'react-router-dom';

const AnimeCard = ({ item, history }) => {

    const goToAnime = (id) => {
        history.push({
            pathname: '/anime',
            state: {
                animeId: id
            }
        });
    }
    
    return (
        <motion.div className="Card" whileHover={{ scale: 1.1 }}>
            <div onClick={() => goToAnime(item.mal_id)} className="container">
                <img src={item.image_url} width="198px" height="298px" alt="Anime pic" />
                <div className="title">{item.title}</div>
                <div className="score">{item.score}</div>
            </div>

        </motion.div>
    )
}

export default withRouter(AnimeCard)
