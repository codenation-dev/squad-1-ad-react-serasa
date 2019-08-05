import React from 'react';
import PropTypes from 'prop-types';
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
          <Card key={user.id} gitUser={user} />
        ))}
      </Container>
    </>
  );
}

Main.propTypes = {
  users: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Main);
