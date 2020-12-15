import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as SearchIcon} from 'Assets/Icons/SearchIcon.svg';
import './SearchBar.scss'

const SearchBar = ({isHeroPage, onEnter}) => {
    return (
        <div 
            className={
                classNames('SearchBar', {'SearchBar__hero-page': isHeroPage})
            }
        >
            <div
                className={
                    classNames(
                        'SearchBar__search-icon',
                        {'SearchBar__search-icon--hero-page': isHeroPage}
                    )
                }
            >
                <SearchIcon />
            </div>
            <input 
                className={
                    classNames(
                        'SearchBar__input-field',
                        {'SearchBar__input-field--hero-page': isHeroPage}
                    )
                }
                type='string'
                id='heroName'
                name='heroName'
                placeholder='Procure por heróis'
                maxLength='256'
                onKeyDown={onEnter}
            />
        </div>
    );
}

export default SearchBar;

SearchBar.propTypes = {
    isHeroPage: PropTypes.bool,
    onEnter: PropTypes.func.isRequired
}

SearchBar.defaultProps = {
    isHeroPage: false
}