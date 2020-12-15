import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './CardPicture.scss';
import placeHolder from 'Assets/Icons/blacksquare.png';

const CardPicture = ({imgUrl, isHero}) => {
    const [hasError, setHasError] = useState(true);

    useEffect(() => {
        if (imgUrl) setHasError(false);
    }, [imgUrl]);

    return (
        <div className={classNames('CardPicture', {'CardPicture--hero': isHero})}>
            {hasError ? <img src={placeHolder} alt="Card Picture"/> : "Loaded"}
        </div>
    );
}

CardPicture.propTypes = {
    imgUrl: PropTypes.string,
    isHero: PropTypes.bool
}

CardPicture.defaultProps = {
    imgUrl: null,
    isHero: true
}

export default CardPicture;