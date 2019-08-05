import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Card from '../../components/Cards';

import { Container } from './styles';

function Main({ users }) {
  return (
    <>
      <Header />
      <Container>
        {users.data.map(user => (
          <Card gitUser={user} />
        ))}
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Main);
