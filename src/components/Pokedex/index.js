import React from 'react';
import propTypes from 'prop-types';

import Pokemon from '../Pokemon';

const Pokedex = (props) => (
  <>
    <h1>Pokedex Data</h1>
    {props.pokemons.map(pokemon => <Pokemon pokeInfo={pokemon}/>)};
  </>
);

Pokedex.propTypes = {
  pokemons: propTypes.object
}

export default Pokedex;