import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as HeartIcon} from 'Assets/Icons/Heart.svg'
import './CardInfo.scss'

const CardInfo = ({isHero, name, heroId, onSetFavorite, favorites, setSelectedHeroId}) => (
  <div className='CardInfo'>
    {isHero ? 
      <>
        <span
          className='CardInfo__hero-name'
          onClick={() => setSelectedHeroId(heroId)}
          role='link'
          tabIndex={0}
        >
          {name}
        </span>
        <div 
          className={classNames('CardInfo__heart-icon', {
            'CardInfo__heart-icon--filled': favorites.includes(heroId),
            'CardInfo__heart-icon--disabled': favorites.length === 5 
              && !favorites.includes(heroId)
          })}
          onClick={() => onSetFavorite(heroId)}
          role='button'
          tabIndex={0}
        >
          <HeartIcon />
        </div>
      </>
    :
      <>
        <span
          className='CardInfo__name'
        >
          {name}
        </span>
      </>
    }

  </div>
);

CardInfo.propTypes = {
  isHero: PropTypes.bool,
  name: PropTypes.string,
  heroId: PropTypes.string,
  onSetFavorite: PropTypes.func.isRequired,
  setSelectedHeroId: PropTypes.func.isRequired
};

CardInfo.defaultProps = {
  isHero: false,
  name: '',
  heroId: ''
};

export default CardInfo;