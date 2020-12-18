import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as HeartIcon} from 'Assets/Icons/Heart.svg';
import HeroStats from 'Molecules/HeroStats';
import './CompleteHeroInfo.scss';

const CompleteHeroInfo = ({heroName, isFavorite, heroDescription, comicsCount, moviesCount, rating, lastComic, onHeartClick}) => (
    <div className='CompleteHeroInfo'>
        <div className='CompleteHeroInfo__title'>
            <h2>{heroName}</h2>
            <div
                className={classNames('CompleteHeroInfo__heart-icon', {
                    'CompleteHeroInfo__heart-icon--filled': isFavorite
                })}
                onClick={onHeartClick}
                role='button'
                tabIndex={0}
            >
                <HeartIcon />
            </div>
        </div>
        <span>{heroDescription}</span>
        <HeroStats comicsCount={comicsCount} moviesCount={moviesCount} rating={rating} lastComic={lastComic} />
    </div>
);

export default CompleteHeroInfo;

HeroStats.propTypes = {
    heroName: PropTypes.string,
    isFavorited: PropTypes.bool,
    heroDescription: PropTypes.string,
    comicsCount: PropTypes.number,
    moviesCount: PropTypes.number,
    rating: PropTypes.number,
    lastComic: PropTypes.string,
    onHeartClick: PropTypes.func.isRequired,
};

HeroStats.defaultProps = {
    heroName: "",
    isFavorited: false,
    heroDescription: "",
    comicsCount: 0,
    moviesCount: 0,
    rating: 0,
    lastComic: "",
};