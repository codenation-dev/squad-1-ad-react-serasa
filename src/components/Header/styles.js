import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  background: ${colors.primary};
  margin-bottom: 20px;
`;

export const Navbar = styled.nav`
  display: flex;
  width: 960px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-size: 30px;
    color: ${colors.white};
    margin-left: 10px;
    font-family: Helvetica, sans-serif;
  }
`;

export const Form = styled.form`
  display: flex;

  input {
    height: 40px;
    margin: 0 5px;
    padding: 0 5px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.8);
    color: #000;

    &:focus {
      background: ${colors.white};
    }
  }

  button {
    cursor: pointer;
    height: 40px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.8);
    color: #000;

    &:hover {
      background: ${colors.white};
    }
  }
`;

export const Token = styled.div`
  display: flex;
  align-items: center;

  input {
    height: 24px;
    margin: 0 5px;
    padding: 0 5px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: ${colors.lighter};
    color: #000;

    &:focus {
      background: ${colors.white};
    }
  }

  strong {
    font-size: 18px;
    color: ${colors.white};
    margin-right: 5px;
  }

  svg {
    cursor: pointer;
  }
`;
