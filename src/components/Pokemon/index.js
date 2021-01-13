import React from 'react';
import propTypes from 'prop-types';

import { Container } from './styles';

const Pokemon = (props) => {
  const { id, name, type, image, averageWeight } = props.pokeInfo;

  return (
    <Container>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <h3>{type}</h3>
      <h4>{averageWeight.value} {averageWeight.measurementUnit}</h4>
    </Container>
  );
};

Pokemon.propTypes = {
  pokeInfo: propTypes.object
}

export default Pokemon;