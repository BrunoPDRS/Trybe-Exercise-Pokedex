import styled from 'styled-components';

export const Header = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  font-size: 24px;
  font-weight: 500;
  justify-content: center;
  height: 48px;
  margin-bottom: 10px;
`;

export const Container = styled.div`
/* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.2);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(140, 140, 140, 0.6);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(140, 140, 140, 0.8);
  }

  align-items: center;
  display: flex;
  flex-direction: column;
  height: 88%;
  overflow-y: scroll;
  padding: 0 16px;

  @media (min-width: 770px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
