import React from 'react';
import "./SearchBar.css";

const SearchBar = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ok');
    };

    return (
        <div className='SearchBar'>
            <form onSubmit={event => handleSubmit(event)}>
                <input className='search-input' type='text' placeholder='Enter the smiley you want to find' />
                <button className='search-btn'>Search</button>
            </form>
        </div>
    );                                                                                                                                                                                                                                                                                                                                              
}

export default SearchBar;
