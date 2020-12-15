import React from 'react';
import AboutPage from 'Atoms/AboutPage';
import SearchBar from 'Atoms/SearchBar';
import './PageHeader.scss';

const PageHeader = () => (
    <div className='PageHeader'>
        <AboutPage />
        <SearchBar />
    </div>
);

export default PageHeader;