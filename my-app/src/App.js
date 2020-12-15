import './App.scss';
import PageHeader from 'Molecules/PageHeader'
import Card from 'Molecules/Card';

function App() {
  return (
    <div className="App">
        <PageHeader />
        <PageHeader isHeroPage/>
        <Card isHero={true} heroName={'Heroi'} isFavorite={true} />
        <Card isHero={false} comicName={'Quadrinho'} />
    </div>
  );
}

export default App;
