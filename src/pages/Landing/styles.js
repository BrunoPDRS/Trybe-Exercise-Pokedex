import styled from 'styled-components';
import backgroundImage from '../../assets/pokemonBackground.png';

export const Container = styled.div`
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;