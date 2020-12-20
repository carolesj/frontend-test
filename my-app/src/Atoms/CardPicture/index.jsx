import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './CardPicture.scss';

const CardPicture = ({imgUrl, isHero, heroName}) => {
    const pictureAlt = useMemo(()=> isHero ? 'Comic cover' : heroName, [isHero, heroName]);
    return (
        <div className={classNames('CardPicture', {'CardPicture--hero': isHero})}>
            <img src={imgUrl} alt={pictureAlt} />
        </div>
    );
}

CardPicture.propTypes = {
    imgUrl: PropTypes.string,
    isHero: PropTypes.bool,
    heroName: PropTypes.string
}

CardPicture.defaultProps = {
    imgUrl: null,
    isHero: true,
    heroName: ''
}

export default CardPicture;