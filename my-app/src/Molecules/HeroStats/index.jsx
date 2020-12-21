import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as Comic} from 'Assets/Icons/Comic.svg';
import {ReactComponent as Video} from 'Assets/Icons/Video.svg';
import Rating from 'Atoms/Ratings';
import './HeroStats.scss';

const HeroStats = ({count, comic}) => {

  return (
    <div>
      <div className='HeroStats HeroStats--stat-with-icon'>
        <div>
          <p className='HeroStats__stat-with-icon-name'>Quadrinhos</p>
          <div className='HeroStats'>
            <Comic />
            <span className='HeroStats__stat-value'>{count}</span>
          </div>
        </div>
        <div>
          <p className='HeroStats__stat-with-icon-name'>Filmes</p>
          <div className='HeroStats'>
            <Video />
            <span className='HeroStats__stat-value'>Nani</span>
          </div>
        </div>
      </div>
      <div className='HeroStats HeroStats--stat-with-content'>
        <p className='HeroStats__stat-name'>Rating:</p>
        <Rating />
      </div>
      <div className='HeroStats HeroStats--stat-with-content'>
        <p className='HeroStats__stat-name'>Último quadrinho: </p>
        <span>{comic.date}</span>
      </div>
    </div>
  );
}

export default HeroStats;

HeroStats.propTypes = {
  count: PropTypes.number,
  comic: PropTypes.object
};

HeroStats.defaultProps = {
  count: 0,
  comic: {}
};