import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Card from '../../components/Cards';

import { Container } from './styles';

function Main({ users }) {
  const [gitUser, setGitUser] = useState([]);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem('@UserGit'));
    if (response) {
      setGitUser(response);
    } else {
      setGitUser(users.data);
    }
  }, [users]);

  return (
    <>
      <Header />
      <Container>
        {gitUser.map(user => (
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
