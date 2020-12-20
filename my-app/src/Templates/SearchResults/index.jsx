import React from 'react';
import PropTypes from 'prop-types';
import OptionsBar from 'Organisms/OptionsBar';
import Card from 'Molecules/Card'
import './SearchResults.scss';

const SearchResults = ({isHeroPage, count, content}) => {
  const heroes = Object.values(content);

  return (
    <div className='SearchResults'>
      {!isHeroPage ? <OptionsBar /> : <h2>Últimos lançamentos</h2>}
      <div className='SearchResults__container'>
        {count > 0 ? 
          <div className='SearchResults__list'>
            {
              heroes.map(hero => (
                <Card isHero={!isHeroPage} heroName={hero.name} imgUrl={hero.thumbnail} isFavorite={false}/>
              ))
            }
          </div> : <p>Não foram encontrados resultados para essa busca</p>
        }
      </div>
    </div>
  )
};

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