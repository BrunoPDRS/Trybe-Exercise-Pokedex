import React from 'react';
import propTypes from 'prop-types';

import Pokemon from '../Pokemon';

import { Container, Header } from './styles';

const Pokedex = (props) => (
  <>
    <Header>Pokedex Data</Header>
    <Container>
      {props.pokemons
        .map(pokemon => <Pokemon pokeInfo={pokemon}/>) 
      };
    </Container>
  </>
);

Pokedex.propTypes = {
  pokemons: propTypes.object
}

export default Pokedex;