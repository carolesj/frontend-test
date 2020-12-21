import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as HeartIcon} from 'Assets/Icons/Heart.svg';
import HeroStats from 'Molecules/HeroStats';
import './CompleteHeroInfo.scss';

const CompleteHeroInfo = ({
  hero
}) => (
  
  <div className='CompleteHeroInfo'>
    <div className='CompleteHeroInfo__information'>
      <div className='CompleteHeroInfo__title'>
        <h2>{hero.name}</h2>
        <div
          className='CompleteHeroInfo__heart-icon'
          onClick={() => {}}
          role='button'
          tabIndex={0}
        >
          <HeartIcon />
        </div>
      </div>
      <span>{hero.description}</span>
      <HeroStats />
    </div>
    <img src={hero.thumbnail} alt={hero.name} />
  </div>
);

export default CompleteHeroInfo;

HeroStats.propTypes = {
  hero: PropTypes.object
};

HeroStats.defaultProps = {
  hero: {}
};