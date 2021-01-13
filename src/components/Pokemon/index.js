import React from 'react';
import propTypes from 'prop-types';

import { Container } from './styles';

const Pokemon = (props) => {
  const { id, name, type, image, averageWeight } = props.pokeInfo;

  return (
    <Container>
      <h1># {id}</h1>
      <div>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <h4>{averageWeight.value} {averageWeight.measurementUnit}</h4>
      </div>
      <img src={image} alt={name}/>
    </Container>
  );
};

Pokemon.propTypes = {
  pokeInfo: propTypes.object
}

export default Pokemon;