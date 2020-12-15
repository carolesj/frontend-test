import React from 'react';
import OptionsBar from 'Organisms/OptionsBar';
import Card from 'Molecules/Card'
import './SearchResults.scss';

const SearchResults = () => (
    <div className='SearchResults__container'>
        <OptionsBar />
        <div className='SearchResults'>
            <Card isHero={true} heroName={'Heroi'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 2'} isFavorite={true}/>
            <Card isHero={true} heroName={'Heroi 3'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 4'} isFavorite={true}/>
        </div>
        <div className='SearchResults'>
            <Card isHero={true} heroName={'Heroioioioioioioioioioioioioioioi 5'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 6'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 7'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 8'} isFavorite={false}/>
        </div>
        <div className='SearchResults'>
            <Card isHero={true} heroName={'Heroi 9'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 10'} isFavorite={true}/>
            <Card isHero={true} heroName={'Heroi 11'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 12'} isFavorite={false}/>
        </div>
        <div className='SearchResults'>
            <Card isHero={true} heroName={'Heroi 13'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 14'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 15'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 16'} isFavorite={false}/>
        </div>
        <div className='SearchResults'>
            <Card isHero={true} heroName={'Heroi 17'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 18'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 19'} isFavorite={false}/>
            <Card isHero={true} heroName={'Heroi 20'} isFavorite={true}/>
        </div>
    </div>
);

export default SearchResults;