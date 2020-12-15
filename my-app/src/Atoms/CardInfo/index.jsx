import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as HeartIcon} from 'Assets/Icons/Heart.svg'
import './CardInfo.scss'

const CardInfo = ({isHero, comicName, heroName, isFavorite, onHeartClick, onHeroNameClick}) => (
    <div className='CardInfo'>
        {isHero ? 
            <>
                <span
                    className='CardInfo__name'
                    onClick={onHeroNameClick}
                    role='link'
                    tabIndex={0}
                >
                    {heroName}
                </span>
                <div 
                    className={classNames('CardInfo__heart-icon', {
                        'CardInfo__heart-icon--filled': isFavorite
                    })}
                    onClick={onHeartClick}
                    role='button'
                    tabIndex={0}
                >
                    <HeartIcon />
                </div>
            </>
        :
            <>
                <span
                    className='CardInfo__name'
                >
                    {comicName}
                </span>
            </>
        }
        
    </div>
);

CardInfo.propTypes = {
    isHero: PropTypes.bool,
    heroName: PropTypes.string,
    isFavorite: PropTypes.bool,
    onHeartClick: PropTypes.func.isRequired,
    onHeroNameClick: PropTypes.func.isRequired
};

CardInfo.defaultProps = {
    isHero: true,
    heroName: '',
    isFavorite: false
};

export default CardInfo;