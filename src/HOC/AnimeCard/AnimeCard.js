import React from 'react';

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
        <div className="Card">
            <div onClick={() => goToAnime(item.mal_id)} className="container">
                <img src={item.image_url} width="198px" height="198px" alt="Anime pic" />
                <div className="title">{item.title}</div>
                <div className="score">{item.score}</div>
            </div>

        </div>
    )
}

export default withRouter(AnimeCard)
