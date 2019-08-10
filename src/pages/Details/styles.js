import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  max-width: 700px;
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 0 20px ${colors.darkTransparent};
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  select {
    padding: 5px 10px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid ${colors.primary};
    cursor: pointer;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${colors.primary};
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: ${colors.dark};
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const RepoAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  h1 {
    color: ${colors.primary};
    margin-bottom: 10px;
    font-size: 18px;
  }

  form {
    input {
      margin-right: 10px;
      padding: 5px 10px;
      height: 30px;
      border-radius: 4px;
      border: 1px solid ${colors.primary};
    }

    button {
      padding: 5px 10px;
      height: 30px;
      border-radius: 4px;
      border: 1px solid ${colors.primary};
      background: transparent;
      cursor: pointer;

      &:hover {
        background: ${colors.primary};
      }
    }
  }
`;
