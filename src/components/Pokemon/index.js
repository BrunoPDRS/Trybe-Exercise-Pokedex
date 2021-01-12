import React from 'react';

const Pokemon = (props) => {
  const { id, name, type, image, averageWeight } = props.pokeInfo;

  return (
    <>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <h3>{type}</h3>
    </>
  );
};

export default Pokemon;