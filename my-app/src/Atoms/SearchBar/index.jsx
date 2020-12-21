import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as SearchIcon} from 'Assets/Icons/SearchIcon.svg';
import './SearchBar.scss'

const SearchBar = ({selectedHeroId, searchByName}) => {
  return (
    <div 
      className={
        classNames('SearchBar', {'SearchBar__hero-page': !!selectedHeroId})
      }
    >
      <div
        className={
          classNames(
            'SearchBar__search-icon',
              {'SearchBar__search-icon--hero-page': !!selectedHeroId}
          )
        }
      >
          <SearchIcon />
      </div>
      <input 
        className={
          classNames(
            'SearchBar__input-field',
            {'SearchBar__input-field--hero-page': !!selectedHeroId}
          )
        }
        type='string'
        id='heroName'
        name='heroName'
        placeholder='Procure por heróis'
        maxLength='256'
        onChange={e => searchByName(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  selectedHeroId: PropTypes.string,
  searchByName: PropTypes.func.isRequired
}

SearchBar.defaultProps = {
  selectedHeroId: null
}