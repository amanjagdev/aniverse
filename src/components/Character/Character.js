import React, { useState, useEffect } from 'react'
import Axios from "axios";
import {motion} from 'framer-motion';

//Importing Styles
import "./Character.css"

const Character = (props) => {

    const characterId = props.location.state.characterId || 7;
    const [character, setCharacter] = useState(null);

    const fetchCharacter = async () => {
        const tempCharacter = await Axios.get(`https://kitsu.io/api/edge/characters/${characterId}`);
        console.log(tempCharacter.data.data);
        setCharacter(tempCharacter.data.data);
    }
    useEffect(() => {
        fetchCharacter();
    }, []);

    return (
         <motion.div initial={{x:-1000}} animate={{x:0}}  transition={{duration:0.5,type:'tween'}}>
            {
                character &&
                (<div className="Character">
                    <h1 className="title">{character.attributes.name}</h1>

                    <div className="top-section">
                        <div className="details">
                            <h4>Other Names :</h4>
                            {character.attributes.otherNames === [] ?
                                character.attributes.otherNames.map((name) => {
                                    return (<>
                                        <li>{name}</li>
                                    </>)
                                }) : "Not Avialable"
                            }
                            <h4>Name in Japanese : {character.attributes.names.ja_jp ? character.attributes.names.ja_jp : "Not Avialable"}</h4>
                        </div>
                        {character.attributes.image
                            ? <img src={character.attributes.image.original} width="198px" height="198px" alt="Character pic" />
                            : <img src="https://pngimage.net/wp-content/uploads/2018/06/no-image-available-png-3.png" width="198px" height="198px" alt="Character pic" />
                        }
                    </div>
                    <div className="summary">
                        <h4>Summary :</h4>
                        <p dangerouslySetInnerHTML={{ __html: character.attributes.description }}></p>
                    </div>
                </div>
                )
            }
        </motion.div>
    )
}

export default Character
