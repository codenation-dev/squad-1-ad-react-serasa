import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import apiAxios from '../../services/apiAxios';

import RepoList from '../../components/RepoList';
import Loading from '../../components/Loading';

import { Container, Owner } from './styles';

export default function Details({ match }) {
  const users = useSelector(state => state.users);

  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { login } = match.params;
    const result = users.data.filter(i => i.login === login);
    async function fetchGit() {
      const { data } = await apiAxios.get(`/users/${login}/repos`);
      setUser(result[0]);

      const reposByYear = [];
      data.map((elem) => {
        const year = (new Date(elem.created_at)).getFullYear();
        if (reposByYear[year] === undefined) {
          reposByYear[year] = [];
        }
        reposByYear[year].push(elem);
      });

      setRepos(reposByYear);
      setIsLoading(false);
    }
    fetchGit();
  }, [match.params, users.data]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

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
};
