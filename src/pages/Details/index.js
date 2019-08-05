import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import apiAxios from '../../services/apiAxios';

import RepoList from '../../components/RepoList';

import { Container, Owner } from './styles';

function Details({ match, users }) {
  const [user, setUser] = useState({});

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const { login } = match.params;
    const result = users.data.filter(i => i.login === login);
    async function fetchGit() {
      const { data } = await apiAxios.get(`/users/${login}/repos`);
      setUser(result[0]);
      setRepos(data);
    }
    fetchGit();
  }, [match.params, users.data]);

  return (
    <div>
      {user ? (
        <Container>
          <Owner>
            <Link to="/">Voltar aos repositorios</Link>
            <img src={user.avatar_url} alt={user.login} />
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
          </Owner>
          <RepoList repos={repos} />
        </Container>
      ) : (
        <Container>
          <h1>No show usuario</h1>
          <Link to="/">Voltar aos repositorios</Link>
        </Container>
      )}
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      login: PropTypes.string,
    }),
  }).isRequired,
  users: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Details);
