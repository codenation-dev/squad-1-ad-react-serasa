import React from 'react';

import { Container, Navbar } from './styles';

function Header() {
  return (
    <Container>
      <Navbar>
        <h1>Logo</h1>
        <input type="text" placeholder="Adicionar" />
        <h1>menu</h1>
      </Navbar>
    </Container>
  );
}

export default Header;
