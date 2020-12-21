import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as Star} from 'Assets/Icons/Star.svg';
import './Ratings.scss'

const Ratings = ({rating}) => {
  const filledStars = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      filledStars.push(true);
    } else {
      filledStars.push(false);
    }
  }

  return (
    <div className='Ratings'>
      {
        filledStars.map(filledStar => (
          <div className={
            classNames('Ratings__star', {'Ratings__star--filled': filledStar})
          }>
            <Star />
          </div>
        ))
      }
    </div>
  );
}

export default Ratings;

Ratings.propTypes = {
  rating: PropTypes.number,
};

Ratings.defaultProps = {
  rating: (Math.floor(Math.random() * 6)),
};  