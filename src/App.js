import Pokedex from './components/Pokedex';

import pokeData from './data';

import './App.css';

function App() {
  return (
    <Pokedex pokemons={pokeData} />
  );
}

export default App;
