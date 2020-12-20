import React from 'react';
import PropTypes from 'prop-types';
import Options from 'Molecules/Options';
import './OptionsBar.scss';

const OptionsBar = ({heroResults, favorites, setFavoriteResults}) => {
  let results = (Object.values(heroResults)).length;
  return (
    <div className='OptionsBar'>
      <span>{`Encontrados ${results} heróis`}</span>
      <Options favorites={favorites} setFavoriteResults={setFavoriteResults} />
    </div>
  );
};

export default OptionsBar;

OptionsBar.propTypes = {
  heroResults: PropTypes.object,
  favorites: PropTypes.array,
  setFavoriteResults: PropTypes.func.isRequired
}

OptionsBar.defaultProps = {
  heroResults: {},
  favorites: []
}