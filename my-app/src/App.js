import React, {useState, useEffect, useCallback} from 'react';
import Axios from 'axios';
import './App.scss';
import LandingPage from 'Pages/LandingPage/LandingPage.jsx';
import PageHeader from 'Molecules/PageHeader'
import Card from 'Molecules/Card';
import CompleteHeroInfo from 'Organisms/CompleteHeroInfo';
import {parseHeroes, parseComics} from 'Common/Utils';

function App() {
  const [heroes, setHeroes] = useState();
  useEffect(() => {
    Axios.get('https://gateway.marvel.com/v1/public/characters', {params:{
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
      orderBy: 'modified'
    }}).then((response) => {
      setHeroes(parseHeroes(response.data.data.results));
    }).catch(() => {
      console.log('Hero error');
    });
  }, []);

  const [favorites, setFavorites] = useState([]);

  const onSetFavorite = useCallback(heroId => {
    if ((favorites.length < 5) && !favorites.includes(heroId)) {
      setFavorites([...favorites, heroId]);
    }
    if (favorites.includes(heroId)) {
      setFavorites(favorites.filter(id => id !== heroId));
    }
  }, [favorites, setFavorites]);

  const [selectedHeroId, setSelectedHeroId] = useState();

  const [comics, setComics] = useState();
  useEffect(() => {
    if (selectedHeroId) {
      Axios.get(`https://gateway.marvel.com/v1/public/characters/${selectedHeroId}/comics`, {params:{
        apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
        orderBy: '-onsaleDate',
        limit: 10
      }}).then((response) => {
        setComics(parseComics(response.data.data.results));
        console.log('Comics set');
      }).catch(() => {
        console.log('comics error');
      });
    }
  }, [selectedHeroId]);

  const [favoriteHeroes, setFavoriteHeroes] = useState();
  const [shouldShowFavoriteHeroes, setShouldShowFavoriteHeroes] = useState(false);


  useEffect(() => {
    if (favoriteHeroes && !shouldShowFavoriteHeroes) {
      setFavoriteHeroes(undefined);
    } else if (!favoriteHeroes && heroes && shouldShowFavoriteHeroes) {
      setFavoriteHeroes(Object.keys(heroes).reduce((acc, id) => {
        if (favorites.includes(parseInt(id, 10))) {
          return ({
            ...acc,
            [id]: heroes[id]
          });
        }
        return acc;
      }, {}));
    }
  }, [heroes, favoriteHeroes, favorites, shouldShowFavoriteHeroes]);

  const onChange = shouldSortByName => {
    const sortBy = shouldSortByName ? {} : {orderBy: 'modified'};
    Axios.get('https://gateway.marvel.com/v1/public/characters', {params:{
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
      ...sortBy
    }}).then((response) => {
      setHeroes(parseHeroes(response.data.data.results));
    }).catch(() => {
      console.log('Hero error');
    })
  };

  return (
    <LandingPage
      selectedHeroId={selectedHeroId}
      heroResults={favoriteHeroes || heroes}
      comicResults={comics}
      favorites={favorites}
      onSetFavorite={onSetFavorite}
      setSelectedHeroId={setSelectedHeroId}
      setShouldShowFavoriteHeroes={() => (
        setShouldShowFavoriteHeroes(!shouldShowFavoriteHeroes)
      )}
      onChange={onChange}
      setComics={setComics}
    />
  );

}

export default App;
