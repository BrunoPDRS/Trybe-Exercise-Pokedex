import React from 'react';
import Pokedex from '../../components/Pokedex';

import pokeData from '../../services/data';

import { Container } from './styles';

const Landing = () => {
  return (
    <Container>
      <Pokedex pokemons={pokeData} />
    </Container>
  );
}

export default Landing;
