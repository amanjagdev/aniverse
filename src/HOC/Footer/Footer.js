import React from 'react';

//CSS
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <h4>
                <div className="main-text">
                    Made with <i class="fas fa-heart"></i> by </div>
                <div className="green">
                    <a href="https://amankrjagdev.web.app">Aman Kumar Jagdev</a>
                </div>
            </h4>
            <a href="https://github.com/amanjagdev/aniverse" ><button>Fork me on <i class="fab fa-github"></i></button></a>
        </div>
    )
}

export default Footer
