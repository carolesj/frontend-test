import React from 'react';
import PropTypes from 'prop-types';
import Header from 'Molecules/PageHeader';
import SearchResults from 'Templates/SearchResults';
import Footer from 'Atoms/PageFooter';

const LandingPage = ({isHeroPage}) => (
  <div>
    <Header isHeroPage={isHeroPage}/>
    <SearchResults />
    <Footer />
  </div>
);

export default LandingPage;

LandingPage.propTypes = {
  isHeroPage: PropTypes.bool
};

LandingPage.defaultProps = {
  isHeroPage: false
};