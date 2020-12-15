import './App.scss';
import PageHeader from 'Molecules/PageHeader'
import HeroCard from 'Molecules/HeroCard';

function App() {
  return (
    <div className="App">
        <PageHeader />
        <PageHeader isHeroPage/>
        <HeroCard />
    </div>
  );
}

export default App;
