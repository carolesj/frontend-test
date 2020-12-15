import React from 'react';
import PropTypes from 'prop-types';
import HeroInfo from 'Atoms/HeroInfo';
import ProfilePic from 'Atoms/ProfilePic';
import './HeroCard.scss';

const HeroCard = () => (
    <div className='HeroCard'>
        <ProfilePic />
        <HeroInfo heroName='Glaydsaaaaaaaaan' isFavorite onHeartClick={()=>{}}/>
    </div>
);

export default HeroCard;