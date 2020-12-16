import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as Comic} from 'Assets/Icons/Comic.svg';
import {ReactComponent as Video} from 'Assets/Icons/Video.svg';
import Rating from 'Atoms/Ratings';
import './HeroStats.scss';

const HeroStats = ({comicsCount, moviesCount, rating, lastComic}) => {

    return (
        <div>
            <div className='HeroStats--stat-with-icon'>
                <div>
                    <span className='HeroStats__stat-with-icon-name'>Quadrinhos</span>
                    <div className='HeroStats'>
                        <Comic />
                        <span className='HeroStats__stat-value'>{comicsCount}</span>
                    </div>
                </div>
                <div>
                    <span className='HeroStats__stat-with-icon-name'>Filmes</span>
                    <div className='HeroStats'>
                        <Video />
                        <span className='HeroStats__stat-value'>{moviesCount}</span>
                    </div>
                </div>
            </div>
            <div className='HeroStats'>
                <span className='HeroStats__stat-name'>Rating:</span>
                <Rating rating={rating} />
            </div>
            <div className='HeroStats'>
                <span className='HeroStats__stat-name'>Último quadrinho: </span>
                <span>{lastComic}</span>
            </div>
        </div>
    );
}

export default HeroStats;

HeroStats.propTypes = {
    comicsCount: PropTypes.number,
    moviesCount: PropTypes.number,
    rating: PropTypes.number,
    lastComic: PropTypes.string,
};

HeroStats.defaultProps = {
    comicsCount: 0,
    moviesCount: 0,
    rating: 0,
    lastComic: "",
};