import React, { useState, useEffect } from 'react'
import Axios from "axios";

//Importing Styles
import "./Character.css"

const Character = (props) => {

    const characterId = props.location.state.characterId || 17;
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
        <div>
            {
                character &&
                (<div className="Character">
                    <h1>{character.attributes.name}</h1>
                    <img src={character.attributes.image.original} alt={character.attributes.title} />
                    <h4>No of Episodes :</h4>
                    <div className="summary">
                        <h4>Summary :</h4>
                        <p>{character.attributes.description}</p>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Character
