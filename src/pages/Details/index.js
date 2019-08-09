import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import apiAxios from '../../services/apiAxios';

import RepoList from '../../components/RepoList';
import Loading from '../../components/Loading';

import UserActions from '../../store/ducks/users';

import { Container, Owner } from './styles';

export default function Details({ match }) {
  const dispatch = useDispatch();

  const users = useSelector(state => state.users);
  const tokenUser = useSelector(state => state.token);

  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [repoName, setRepoName] = useState('');
  const [repoDesc, setRepoDesc] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { login } = match.params;
    const result = users.data.filter(i => i.login === login);
    async function fetchGit() {
      const { data } = await apiAxios.get(`/users/${login}/repos`);
      setUser(result[0]);
      setRepos(data);
      setIsLoading(false);
    }
    fetchGit();
  }, [match.params, users.data]);

  async function addRepository(e) {
    e.preventDefault();
    const repoAdd = [repoName, repoDesc];
    if (tokenUser.isToken) {
      await dispatch(UserActions.repoAddRequest(repoAdd, tokenUser.token));
    }
  }

  if (isLoading) {
    return <Loading />;
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
          <div>
            <h1>Adicionar repositorio</h1>
            <form onSubmit={e => addRepository(e)}>
              <input
                placeholder="name"
                value={repoName}
                onChange={e => setRepoName(e.target.value)}
              />
              <input
                placeholder="description"
                value={repoDesc}
                onChange={e => setRepoDesc(e.target.value)}
              />
              <button type="submit">Adicionar</button>
            </form>
          </div>
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
