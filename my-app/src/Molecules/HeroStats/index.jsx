import React from 'react';
import {ReactComponent as Comic} from 'Assets/Icons/Comic.svg';
import {ReactComponent as Video} from 'Assets/Icons/Video.svg';
import Rating from 'Atoms/Ratings';
import './HeroStats.scss';

const HeroStats = () => {

  return (
    <div>
      <div className='HeroStats HeroStats--stat-with-icon'>
        <div>
          <p className='HeroStats__stat-with-icon-name'>Quadrinhos</p>
          <div className='HeroStats'>
            <Comic />
            <span className='HeroStats__stat-value'>{(Math.floor(Math.random() * 2000))}</span>
          </div>
        </div>
        <div>
          <p className='HeroStats__stat-with-icon-name'>Filmes</p>
          <div className='HeroStats'>
            <Video />
            <span className='HeroStats__stat-value'>{(Math.floor(Math.random() * 40))}</span>
          </div>
        </div>
      </div>
      <div className='HeroStats HeroStats--stat-with-content'>
        <p className='HeroStats__stat-name'>Rating:</p>
        <Rating />
      </div>
      <div className='HeroStats HeroStats--stat-with-content'>
        <p className='HeroStats__stat-name'>Último quadrinho: </p>
        <span>{'30 fev 2030'}</span>
      </div>
    </div>
  );
}

export default HeroStats;