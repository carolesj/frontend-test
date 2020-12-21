import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import CardInfo from 'Atoms/CardInfo';
import CardPicture from 'Atoms/CardPicture';
import './Card.scss';

const Card = ({comic, hero, favorites, onSetFavorite, setSelectedHeroId}) => {
  if (hero) {
    return (
      <div className='Card'>
        <CardPicture isHero name={hero.name} imgUrl={hero.thumbnail} />
        <CardInfo isHero name={hero.name} heroId={hero.id} onSetFavorite={onSetFavorite} setSelectedHeroId={setSelectedHeroId} favorites={favorites}/>
      </div>
    );
  } else {
    return (
      <div className='Card Card--thiner-card'>
        <CardPicture name={comic.name} imgUrl={comic.thumbnail}/>
        <CardInfo name={comic.title} />
      </div>
    );
  }
}

export default Card;

CardInfo.propTypes = {
  hero: PropTypes.object,
  comic: PropTypes.object,
  favorites: PropTypes.array,
  onSetFavorite: PropTypes.func.isRequired,
  onHeroNameClick: PropTypes.func.isRequired
};

CardInfo.defaultProps = {
  hero: {},
  comic: {},
  favorites: []
};