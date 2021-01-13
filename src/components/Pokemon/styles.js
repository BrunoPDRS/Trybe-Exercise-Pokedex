import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(255,255,255,0.8);
  border-radius: 6px;
  display: flex;
  margin: 0 auto;
  max-width: 760px;
  padding: 8px;
  width: 90%;

  & + div {
    margin-top: 12px;
  }
`;