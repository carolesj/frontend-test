import React from 'react';
import PropTypes from 'prop-types';
import OptionsBar from 'Organisms/OptionsBar';
import Card from 'Molecules/Card'
import './SearchResults.scss';

const SearchResults = ({heroResults, comicResults, favorites, onSetFavorite, setSelectedHeroId, setShouldShowFavoriteHeroes, onChange}) => {
  const comics = Object.values(comicResults);
  const heroes = Object.values(heroResults);

  if (!!comics?.length) {
    return (
      <div className='SearchResults'>
        <div className='SearchResults__container'>
          {comics?.length > 0 ? 
            <div className='SearchResults__list'>
              {
                comics.map(comic => (
                  <Card
                    comic={comic}
                    imgUrl={comic.thumbnail}
                    onSetFavorite={onSetFavorite}
                  />
                ))
              }
            </div> : <p>Não foram encontrados quadrinhos para esse herói</p>
          }
        </div>
      </div>
    )
  } else {
    return (
      <div className='SearchResults'>
        <OptionsBar
          heroResults={heroResults}
          setShouldShowFavoriteHeroes={setShouldShowFavoriteHeroes}
          onChange={onChange}
        />
        <div className='SearchResults__container'>
          {heroes?.length > 0 ? 
            <div className='SearchResults__list'>
              {
                heroes.map(hero => (
                  <Card
                    isHero
                    hero={hero}
                    imgUrl={hero.thumbnail}
                    onSetFavorite={onSetFavorite}
                    favorites={favorites}
                    setSelectedHeroId={setSelectedHeroId}
                />
                ))
              }
            </div> : <p>Não foram encontrados resultados para essa busca</p>
          }
        </div>
      </div>
    )
  }
  
};

export default SearchResults;

SearchResults.propTypes = {
  heroResults: PropTypes.object,
  comicResults: PropTypes.object,
  favorites: PropTypes.array, 
  onSetFavorite: PropTypes.func.isRequired,
  setSelectedHeroId: PropTypes.func.isRequired,
  setShouldShowFavoriteHeroes: PropTypes.func.isRequired
};

SearchResults.defaultProps = {
  heroResults: {},
  comicResults: {},
  favorites: [] 
};