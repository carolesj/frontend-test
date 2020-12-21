import React from 'react';
import PropTypes from 'prop-types';
import Options from 'Molecules/Options';
import './OptionsBar.scss';

const OptionsBar = ({heroResults, favorites, setShouldShowFavoriteHeroes, onChange}) => {
  let results = (Object.values(heroResults)).length;
  return (
    <div className='OptionsBar'>
      <span>{`Encontrados ${results} heróis`}</span>
      <Options favorites={favorites} setShouldShowFavoriteHeroes={setShouldShowFavoriteHeroes} onChange={onChange} />
    </div>
  );
};

export default OptionsBar;

OptionsBar.propTypes = {
  heroResults: PropTypes.object,
  favorites: PropTypes.array,
  setShouldShowFavoriteHeroes: PropTypes.func.isRequired
}

OptionsBar.defaultProps = {
  heroResults: {},
  favorites: []
}