import React from 'react';
import {motion} from 'framer-motion';

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
    console.log(item)
    return (
        <motion.div className="Card" whileHover={{ scale: 1.1 }}>
            <div onClick={() => goToCharacter(item.id)} className="container">
                {item.attributes.image 
                    ?<img src={item.attributes.image.original} width="198px" height="198px" alt="Character pic" />
                     :<img src="https://pngimage.net/wp-content/uploads/2018/06/no-image-available-png-3.png" width="198px" height="198px" alt="Character pic" />
                }
                <div className="title">{item.attributes.name}</div>
            </div>
        </motion.div>
    )
}

export default withRouter(CharacterCard)
