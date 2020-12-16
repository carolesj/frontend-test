import './App.scss';
import PageHeader from 'Molecules/PageHeader'
import Card from 'Molecules/Card';
import SearchResults from 'Templates/SearchResults'

function App() {
  return (
    <div className="App">
        <PageHeader />
        <PageHeader isHeroPage/>
        <SearchResults />
        <Card isHero={false} comicName={'Quadrinho'} />

    </div>
  );
}

export default App;
