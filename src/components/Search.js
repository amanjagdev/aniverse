import React from 'react'

const Search = (props) => {
    const sampleText = props.location.state.sampleText;

    return (
        <div>
            <h1>Search</h1>
            <h1>{sampleText}</h1>
        </div>
    )
}

export default Search
