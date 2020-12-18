import React from 'react';
import PropTypes from 'prop-types';
import OptionsBar from 'Organisms/OptionsBar';
import Card from 'Molecules/Card'
import './SearchResults.scss';

const SearchResults = ({isHeroPage, count, content}) => (
    <div className='SearchResults__container'>
        {!isHeroPage ? <OptionsBar /> : <h2>Últimos lançamentos</h2>}
        {count > 0 ? 
            <>
                <div className='SearchResults'>
                    <Card isHero={!isHeroPage} heroName={'Heroi'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 2'} isFavorite={true}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 3'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 4'} isFavorite={true}/>
                </div>
                <div className='SearchResults'>
                    <Card isHero={!isHeroPage} heroName={'Heroioioioioioioioioioioioioioioi 5'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 6'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 7'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 8'} isFavorite={false}/>
                </div>
                <div className='SearchResults'>
                    <Card isHero={!isHeroPage} heroName={'Heroi 9'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 10'} isFavorite={true}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 11'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 12'} isFavorite={false}/>
                </div>
                <div className='SearchResults'>
                    <Card isHero={!isHeroPage} heroName={'Heroi 13'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 14'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 15'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 16'} isFavorite={false}/>
                </div>
                <div className='SearchResults'>
                    <Card isHero={!isHeroPage} heroName={'Heroi 17'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 18'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 19'} isFavorite={false}/>
                    <Card isHero={!isHeroPage} heroName={'Heroi 20'} isFavorite={true}/>
                </div> 
            </> : <p>Não foram encontrados resultados para essa busca</p>
        }
    </div>
);

export default SearchResults;

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