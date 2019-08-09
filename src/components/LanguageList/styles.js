import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 64px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  p {
    font-style: italic;
    margin-left: 5px;
    font-size: 18px;
  }
`;
