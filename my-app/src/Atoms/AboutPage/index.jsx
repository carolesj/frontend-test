import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as Logo} from 'Assets/Logo/Logo.svg';
import './AboutPage.scss';

const AboutPage = ({
    selectedHeroId,
    setSelectedHeroId,
    setComics
}) => (
  <div className={classNames('AboutPage', {'AboutPage--hero-page': !!selectedHeroId})}>
    {!!selectedHeroId ? 
      <Logo
        className='AboutPage__small-logo' 
        onClick={() => {setSelectedHeroId(undefined); setComics(undefined)}}
      />
      : <Logo className='AboutPage__big-logo' />
    }
    {!selectedHeroId && (
      <>
        <h2>EXPLORE O UNIVERSO</h2>
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
  selectedHeroId: PropTypes.string,
  setSelectedHeroId: PropTypes.func.isRequired,
  setComics: PropTypes.func.isRequired
};

AboutPage.defaultProps = {
  selectedHeroId: null,
};