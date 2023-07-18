import React from 'react';
import "./Header.css";
// import smileLogo from "../../img/free-icon-happy-face-10963591.png";
import smileLogo from "../../img/smile.png";
import SearchBar from '../SearchBar/SearchBar';
import signInLogo from "../../img/signin-logo.png"
import signUpLogo from "../../img/signup-logo.png"

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>Smile-Home</h1>
                <img src={smileLogo} />
            </div>
            <SearchBar />
            <div className='auth-buttons'>
                <button className='sign-in'>sign-in <img className='img-btn' src={signInLogo} /></button>
                <button className='sign-up'>sign-up <img className='img-btn' src={signUpLogo} /></button>
            </div>
        </header>
    );
}

export default Header;
