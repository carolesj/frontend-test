import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as HeartIcon} from 'Assets/Icons/Heart.svg';
import HeroStats from 'Molecules/HeroStats';
import './CompleteHeroInfo.scss';

const CompleteHeroInfo = ({
  hero,
  comic,
  count,
  favorites,
  onSetFavorite
}) => (
  
  <div className='CompleteHeroInfo'>
    <div className='CompleteHeroInfo__information'>
      <div className='CompleteHeroInfo__title'>
        <h2>{hero.name}</h2>
        <div
          className={classNames('CompleteHeroInfo__heart-icon', {
            'CompleteHeroInfo__heart-icon--filled': favorites?.includes(hero.heroId)
          })}
          onClick={() => onSetFavorite(hero.Id)}
          role='button'
          tabIndex={0}
        >
          <HeartIcon />
        </div>
      </div>
      <span>{hero.description}</span>
      <HeroStats count={count} comic={comic} />
    </div>
    <img src={hero.thumbnail} alt={hero.name} />
  </div>
);

export default CompleteHeroInfo;

HeroStats.propTypes = {
  hero: PropTypes.object,
  comic: PropTypes.object,
  count: PropTypes.number,
  favorites: PropTypes.array,
  onSetFavorite: PropTypes.func.isRequired
};

HeroStats.defaultProps = {
  hero: {},
  comic: {},
  count: 0,
  favorites: []
};