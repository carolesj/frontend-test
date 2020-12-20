import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'Atoms/Toggle';
import {ReactComponent as HeroIcon} from 'Assets/Icons/Superhero.svg';
import {ReactComponent as Liked} from 'Assets/Icons/Heart.svg';
import './Options.scss';

const Options = ({favorites, setFavoriteResults}) => (
  <div className='Options'>
    <div className='Options__clickables'>
      <HeroIcon />
      <span className='Options__text-hero'> Ordenar por nome - A/Z </span>
      <Toggle />
    </div>
    <div className='Options__clickables'>
      <div className='Options__heart'>
        <Liked />
      </div>
      <span 
        className='Options__text-liked'
        onClick={() => setFavoriteResults(favorites)}
        role='link'
        tabIndex={0}
      > 
          Somente favoritos 
        </span>
    </div>
  </div>
);

export default Options;

Options.propTypes = {
  favorites: PropTypes.array,
  setFavoriteResults: PropTypes.func.isRequired
}

Options.defaultProps = {
  favorites: []
}