import React from "react";
import "./Header.css"

export default ({ black }) => {
    return (
        <header className={black ? 'black--container' : ''}>
            <div className="header--logo">
                <a href="/clone_Netflix-React/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/clone_Netflix-React/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário Logo" />
                </a>
            </div>
        </header>
    )
}