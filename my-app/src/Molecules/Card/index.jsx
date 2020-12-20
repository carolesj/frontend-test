import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import CardInfo from 'Atoms/CardInfo';
import CardPicture from 'Atoms/CardPicture';
import './Card.scss';

const Card = ({isHero, comicName, heroName, imgUrl, isFavorite, onHeartClick, onHeroNameClick}) => (
    <div className={classNames('Card', {'Card--thiner-card': !isHero})}>
        <CardPicture isHero={isHero} imgUrl={imgUrl} heroName={heroName}/>
        <CardInfo isHero={isHero} comicName={comicName} heroName={heroName} isFavorite={isFavorite} onHeartClick={()=>{}} onHeroNameClick={()=>{}}/>
    </div>
);

export default Card;

CardInfo.propTypes = {
    isHero: PropTypes.bool,
    heroName: PropTypes.string,
    imgUrl: PropTypes.string,
    isFavorite: PropTypes.bool,
    onHeartClick: PropTypes.func.isRequired,
    onHeroNameClick: PropTypes.func.isRequired
};

CardInfo.defaultProps = {
    isHero: true,
    heroName: '',
    imgUrl: '',
    isFavorite: false
};