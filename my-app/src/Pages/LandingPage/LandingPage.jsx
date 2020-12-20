import React from 'react';
import PropTypes from 'prop-types';
import Header from 'Molecules/PageHeader';
import CompleteHeroInfo from 'Organisms/CompleteHeroInfo';
import SearchResults from 'Templates/SearchResults';
import Footer from 'Atoms/PageFooter';

const LandingPage = ({isHeroPage, count, content, heroName, isFavorite, heroDescription, comicsCount, moviesCount, rating, lastComic}) => (
  <div>
    <Header isHeroPage={isHeroPage}/>
    {isHeroPage ? <CompleteHeroInfo heroName={heroName} isFavorite={isFavorite} heroDescription={heroDescription} comicsCount={comicsCount} moviesCount={moviesCount} rating={rating} lastComic={lastComic}/> : <></>}
    <SearchResults isHeroPage={isHeroPage} count={count} content={content}/>
    <Footer />
  </div>
);

export default LandingPage;

SearchResults.propTypes = {
  isHeroPage: PropTypes.bool,
  count: PropTypes.number,
  content: PropTypes.string,
  heroName: PropTypes.string,
  isFavorite: PropTypes.bool,
  heroDescription: PropTypes.string,
  comicsCount: PropTypes.number,
  moviesCount: PropTypes.number,
  rating: PropTypes.number,
  lastComic: PropTypes.string
};

SearchResults.defaultProps = {
  isHeroPage: false,
  count: 0,
  content: '',
  heroName: '',
  isFavorite: false,
  heroDescription: '',
  comicsCount: 0,
  moviesCount: 0,
  rating: 0,
  lastComic: ''
};