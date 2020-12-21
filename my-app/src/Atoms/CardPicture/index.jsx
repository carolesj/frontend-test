import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './CardPicture.scss';

const CardPicture = ({isHero, imgUrl, name}) => (
  <div className={
    classNames('CardPicture', {'CardPicture--hero': isHero})
  }>
    <img src={imgUrl} alt={name} />
  </div>
);

CardPicture.propTypes = {
  imgUrl: PropTypes.string,
  isHero: PropTypes.bool,
  name: PropTypes.string
}

CardPicture.defaultProps = {
  imgUrl: null,
  isHero: false,
  name: ''
}

export default CardPicture;