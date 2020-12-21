import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AboutPage from 'Atoms/AboutPage';
import SearchBar from 'Atoms/SearchBar';
import './PageHeader.scss';

const PageHeader = ({
  selectedHeroId,
  setSelectedHeroId,
  setComics,
  searchByName
}) => (
  <div
    className={
      classNames('PageHeader', {'PageHeader--hero-page': !!selectedHeroId})
    }
  >
    <AboutPage
      selectedHeroId={selectedHeroId}
      setSelectedHeroId={setSelectedHeroId}
      setComics={setComics}
    />
    <SearchBar
      selectedHeroId={selectedHeroId}
      searchByName={searchByName}
    />
  </div>
);

export default PageHeader;

PageHeader.propTypes = {
  selectedHeroId: PropTypes.string,
  setSelectedHeroId:PropTypes.func.isRequired,
  setComics: PropTypes.func.isRequired,
  searchByName: PropTypes.func.isRequired
};

PageHeader.defaultProps = {
  selectedHeroId: null
};