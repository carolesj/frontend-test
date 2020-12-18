import React from 'react';
import PropTypes from 'prop-types';
import Header from 'Molecules/PageHeader';
import SearchResults from 'Templates/SearchResults';
import Footer from 'Atoms/PageFooter';

const LandingPage = ({isHeroPage, count, content}) => (
  <div>
    <Header isHeroPage={isHeroPage}/>
    <SearchResults isHeroPage={isHeroPage} count={count} content={content}/>
    <Footer />
  </div>
);

export default LandingPage;

SearchResults.propTypes = {
  isHeroPage: PropTypes.bool,
  count: PropTypes.number,
  content: PropTypes.string
};

SearchResults.defaultProps = {
  isHeroPage: false,
  count: 0,
  content: ''
};