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
    border: 1px solid ${colors.darkTransparent};
    background: ${colors.light};
    color: ${colors.black};

    &:focus {
      background: ${colors.white};
    }
  }

  button {
    cursor: pointer;
    height: 40px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid ${colors.darkTransparent};
    background: ${colors.light};
    color: ${colors.black};

    svg {
      margin: 0 5px;
    }

    &:hover {
      background: ${colors.white};
    }
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};

  strong {
    color: ${colors.light};
    font-size: 16px;
    margin-right: 5px;
  }

  button {
    background: transparent;
    border: 1px solid ${colors.white};
    border-radius: 4px;
    padding: 3px 5px;
    cursor: pointer;
    color: ${colors.white};

    &:hover {
      color: ${colors.lighter};
      border: 1px solid ${colors.lighter};
    }
  }

  a {
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: ${colors.black};

    &:hover {
      color: ${colors.darker};
    }
  }
`;
