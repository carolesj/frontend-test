import './App.scss';
import PageHeader from 'Molecules/PageHeader'
import Card from 'Molecules/Card';
import SearchResults from 'Templates/SearchResults';
import CompleteHeroInfo from 'Organisms/CompleteHeroInfo';

function App() {
  return (
    <div className="App">
        <PageHeader />
        <PageHeader isHeroPage/>
        <SearchResults />
        <Card isHero={false} comicName={'Quadrinho'} />
        <CompleteHeroInfo heroName='Murasakibara' isFavorite heroDescription='IAUHDIAHSIDHASIODHA ISOU DHIAUSH DUISHDIU AHOSIUDASHU IDHSAI UDHOAS IHDOI ASHDOIA SHDOIASH DIOUASH DUIASHDSHUDSA' comicsCount={10} moviesCount={5} rating={3.75} lastComic='4 jan 2020' onHeartClick={()=> {}} />

    </div>
  );
}

export default App;
