import React from 'react';

import Header from '../../components/Header';
import Card from '../../components/Cards';

import { Container } from './styles';

function Main() {
  return (
    <>
      <Header />
      <Container>
        <Card />
      </Container>
    </>
  );
}

export default Main;
