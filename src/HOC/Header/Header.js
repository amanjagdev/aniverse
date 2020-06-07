import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    const [sampleText, setSampleText] = useState("none");
    const handleSearch = (e) => {
        e.preventDefault()
        props.history.push({
            pathname: '/search',
            state: { sampleText: sampleText }
        })
    }

    return (
        <div>
            <form >
                <input type="text" value={sampleText} onChange={e => setSampleText(e.target.value)} />
                <button onClick={(e) => handleSearch(e)}>Search</button>
            </form>
        </div>
    )
}

export default withRouter(Header)
