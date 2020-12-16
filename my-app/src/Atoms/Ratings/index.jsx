import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as Star} from 'Assets/Icons/Star.svg';
import './Ratings.scss'

const Ratings = ({rating}) => {
    const filledStars = []
    var i;

    for (i = 0; i < 5; i++) {
        if (rating >= i + 1) {
            filledStars.push(true);
        } else {
            filledStars.push(false);
        }
    }

    return (
        <div className='Ratings'>
            <div className={classNames('Ratings__star', {'Ratings__star--filled': filledStars[0]})}>
                    <Star />
                </div>
                <div className={classNames('Ratings__star', {'Ratings__star--filled': filledStars[1]})}>
                    <Star />
                </div>
                <div className={classNames('Ratings__star', {'Ratings__star--filled': filledStars[2]})}>
                    <Star />
                </div>
                <div className={classNames('Ratings__star', {'Ratings__star--filled': filledStars[3]})}>
                    <Star />
                </div>
                <div className={classNames('Ratings__star', {'Ratings__star--filled': filledStars[4]})}>
                    <Star />
                </div>
        </div>
    );
}

export default Ratings;

Ratings.propTypes = {
    rating: PropTypes.number,
};

Ratings.defaultProps = {
    rating: 0,
};