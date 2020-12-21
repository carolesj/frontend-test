import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from 'Molecules/PageHeader';
import CompleteHeroInfo from 'Organisms/CompleteHeroInfo';
import SearchResults from 'Templates/SearchResults';
import Footer from 'Atoms/PageFooter';
import './LandingPage.scss';

const LandingPage = ({selectedHeroId, heroResults, comicResults, favorites, onSetFavorite, setSelectedHeroId, setFavoriteResults, setComics}) => (
  <div className={classNames({'LandingPage': !! selectedHeroId})}>
    <Header selectedHeroId={selectedHeroId} setSelectedHeroId={setSelectedHeroId} setComics={setComics}/>
    {selectedHeroId && <CompleteHeroInfo hero={heroResults[selectedHeroId]} />} 
    <SearchResults
      selectedHeroId={selectedHeroId}
      heroResults={heroResults}
      comicResults={comicResults}
      favorites={favorites}
      onSetFavorite={onSetFavorite}
      setSelectedHeroId={setSelectedHeroId}
      setFavoriteResults={setFavoriteResults} />
    <Footer />
  </div>
);

export default LandingPage;

SearchResults.propTypes = {
  selectedHeroId: PropTypes.string,
  heroResults: PropTypes.object,
  comicResults: PropTypes.object,
  favorites: PropTypes.array,
  onSetFavorite: PropTypes.func.isRequired,
  setSelectedHeroId: PropTypes.func.isRequired,
  setFavoriteResults: PropTypes.func.isRequired,
  setComics: PropTypes.func.isRequired
};

SearchResults.defaultProps = {
  selectedHeroId: null,
  heroResults: {},
  comicResults: {},
  favorites: []
};