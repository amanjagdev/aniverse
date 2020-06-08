import React from 'react';

//CSS
import './CharacterCard.css';
import { withRouter } from 'react-router-dom';

const CharacterCard = ({ item, history }) => {

    const goToCharacter = (id) => {
        history.push({
            pathname: '/character',
            state: {
                characterId: id
            }
        });
    }

    return (
        <div className="Card">
            <div onClick={() => goToCharacter(item.id)} className="container">
                <img src={item.attributes.image.original} width="198px" height="198px" alt="Character pic" />
                <div className="title">{item.attributes.name}</div>
            </div>
        </div>
    )
}

export default withRouter(CharacterCard)
