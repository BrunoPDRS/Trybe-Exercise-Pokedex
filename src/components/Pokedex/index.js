import React from 'react';

import Pokemon from '../Pokemon';

const Pokedex = (props) => (
  <>
    <h1>Pokedex Data</h1>
    {props.pokemons.map(pokemon => <Pokemon pokeInfo={pokemon}/>)};
  </>
);

export default Pokedex;