import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: rgba(255,255,255,0.8);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  min-width: 450px;
  padding: 8px;
  width: 48%;

  & + div {
    margin-top: 12px;
  }
`;