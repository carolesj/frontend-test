import React from 'react';
import PropTypes from 'prop-types';
import ProfilePic from 'Atoms/profilePic';
import './ComicCard.scss';

const ComicCard = ({comicName}) => (
    <div className='ComicCard'>
        <ProfilePic />
        <span className='ComicName'>{comicName}</span>
    </div>
);

export default ComicCard;

ComicCard.propTypes = {
    comicName: PropTypes.string
}

ComicCard.defaultProps = {
    comicName: ''
}