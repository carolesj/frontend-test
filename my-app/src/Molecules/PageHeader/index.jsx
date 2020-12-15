import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AboutPage from 'Atoms/AboutPage';
import SearchBar from 'Atoms/SearchBar';
import './PageHeader.scss';

const PageHeader = ({isHeroPage}) => (
    <div
        className={classNames('PageHeader', {'PageHeader--hero-page': isHeroPage})}
    >
        <AboutPage isHeroPage={isHeroPage} />
        <SearchBar isHeroPage={isHeroPage} />
    </div>
);

export default PageHeader;

PageHeader.propTypes = {
    isHeroPage: PropTypes.bool
};

PageHeader.defaultProps = {
    isHeroPage: false
};