import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as Logo} from 'Assets/Logo/Logo.svg';
import LogoPng from 'Assets/Logo/Group.png';
import './AboutPage.scss';

const AboutPage = ({isHeroPage}) => (
    <div className={classNames('AboutPage', {'AboutPage--hero-page': isHeroPage})}>
        {isHeroPage ? <img src={LogoPng} alt='Logo Pequena' style={{width: '50%'}} />: <Logo />}
        {!isHeroPage && (
            <>
                <h3>EXPLORE O UNIVERSO</h3>
                <span>
                    Mergulhe no domínio de todos os personagens clássicos que você ama - 
                    e aqueles que você descobrirá em breve!
                </span>
            </>
        )}
    </div>
);

export default AboutPage;

AboutPage.propTypes = {
    isHeroPage: PropTypes.bool
};

AboutPage.defaultProps = {
    isHeroPage: false
};