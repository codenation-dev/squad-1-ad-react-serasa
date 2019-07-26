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
