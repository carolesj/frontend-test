import React from 'react';
//import PropTypes from 'prop-types';
import {ReactComponent as SearchIcon} from 'Assets/Icons/SearchIcon.svg';
import './SearchBar.scss'

const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <div className='SearchIcon'>
                <SearchIcon />
            </div>
            <input className='InputFied' type='string' id='heroName' name='heroName' placeholder='Procure por heróis'/>
        </div>
    );
}

export default SearchBar;

/*SearchBar.propTypes = {
    searchTerm: PropTypes.string,
    onEnter: PropTypes.func.isRequired
}

SearchBar.defaultProps = {
    searchTerm: ''
}*/