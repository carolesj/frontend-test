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
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY_XOFANNA
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

  //OnSetFavorite
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
  }, [selectedHeroId])

  const setFavoriteResults = useCallback(favorites => {
    setHeroes(heroes.filter(hero => favorites.includes(hero.id)));
  }, [heroes]);


  /*const [heroId, setHeroId] = useState();
  useEffect (() => {
    Axios.get('https://gateway.marvel.com/v1/public/characters/1009368/comics', {params: {
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY
    }}).then((response) => {
      console.log('Comics: ', response);
    })
  }, [heroId])*/

  return (
    <LandingPage
      selectedHeroId={selectedHeroId}
      heroResults={heroes}
      comicResults={comics}
      favorites={favorites}
      onSetFavorite={onSetFavorite}
      setSelectedHeroId={setSelectedHeroId}
      setFavoriteResults={setFavoriteResults}
      setComics={setComics}
    />
  );

  /*return (
    <div className="App">
        <LandingPage isHeroPage={false} count={20} content={''}/>
        <LandingPage isHeroPage={true} count={20} content={''} heroName={'Clovis Cleivison'} isFavorite={true} heroDescription='IAUHDIAHSIDHASIODHA ISOU DHIAUSH DUISHDIU AHOSIUDASHU IDHSAI UDHOAS IHDOI ASHDOIA SHDOIASH DIOUASH DUIASHDSHUDSA IAUHDIAHSIDHASIODHA ISOU DHIAUSH DUISHDIU AHOSIUDASHU IDHSAI UDHOAS IHDOI ASHDOIA SHDOIASH DIOUASH DUIASHDSHUDSA IAUHDIAHSIDHASIODHA ISOU DHIAUSH DUISHDIU AHOSIUDASHU IDHSAI UDHOAS IHDOI ASHDOIA SHDOIASH DIOUASH DUIASHDSHUDSA IAUHDIAHSIDHASIODHA ISOU DHIAUSH DUISHDIU AHOSIUDASHU IDHSAI UDHOAS IHDOI ASHDOIA SHDOIASH DIOUASH DUIASHDSHUDSA' comicsCount={666} moviesCount={13} rating={4.2} lastComic={'1 abr 1914'}/>
        <PageHeader isHeroPage/>
        <Card isHero={false} comicName={'Quadrinho'} />
        <CompleteHeroInfo heroName='Murasakibara' isFavorite heroDescription='IAUHDIAHSIDHASIODHA ISOU DHIAUSH DUISHDIU AHOSIUDASHU IDHSAI UDHOAS IHDOI ASHDOIA SHDOIASH DIOUASH DUIASHDSHUDSA' comicsCount={10} moviesCount={5} rating={3.75} lastComic='4 jan 2020' onHeartClick={()=> {}} />

    </div>
  );*/
}

export default App;
