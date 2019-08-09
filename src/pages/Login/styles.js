import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: ${colors.primary};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    color: ${colors.primary};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input {
    padding: 5px 10px;
    height: 30px;
    margin-bottom: 10px;
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
`;
