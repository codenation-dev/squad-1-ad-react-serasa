import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import apiAxios from '../../services/apiAxios';

import RepoList from '../../components/RepoList';
import Loading from '../../components/Loading';

import UserActions from '../../store/ducks/users';

import { Container, Owner, RepoAdd } from './styles';

export default function Details({ match }) {
  const dispatch = useDispatch();

  const users = useSelector(state => state.users);
  const tokenUser = useSelector(state => state.token);

  // States para adicionar repositorio no github
  const [repoName, setRepoName] = useState('');
  const [repoDesc, setRepoDesc] = useState('');

  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [yeaRepo, setYearRepo] = useState([]);
  const [years, setYears] = useState('');

  // Verifica se usuario esta logado
  const [tokenBelong, setTokenBelong] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { login } = match.params;
    if (!users.data) {
      setUser({});
      setIsLoading(false);
      return;
    }

    const result = users.data.filter(i => i.login === login);

    if (tokenUser.user.login && tokenUser.user.login === result[0].login) {
      const isUserToken = true;
      setTokenBelong(isUserToken);
    }

    setUser(result[0]);

    async function fetchGit() {
      try {
        const { data } = await apiAxios.get(`/users/${login}/repos`);
        const byYear = [];

        data.map((i) => {
          byYear.push(i.created_at.split('-')[0]);
        });

        setYears([...new Set(byYear)]);
        setRepos(data);
        setIsLoading(false);
      } catch (error) {
        toast.error('Error na chamada de repositorios');
        setIsLoading(false);
      }
    }
    fetchGit();
  }, [match.params, tokenUser.user.login, users]);

  function handleYear(e) {
    const result = repos.filter(i => i.created_at.split('-')[0] === e.target.value);
    setYearRepo(result);
  }

  async function addRepository(e) {
    e.preventDefault();
    const repoAdd = [repoName, repoDesc];
    if (tokenBelong) {
      await dispatch(UserActions.repoAddRequest(repoAdd, tokenUser.token));
    }
    setRepoName('');
    setRepoDesc('');
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

          {tokenBelong && (
            <RepoAdd>
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
            </RepoAdd>
          )}

          <select value={years} onChange={e => handleYear(e)}>
            <option>Select</option>
            {years.map(year => (
              <option key={year} value={year} selected>
                {year}
              </option>
            ))}
          </select>

          {yeaRepo ? <RepoList repos={yeaRepo} /> : <RepoList repos={repos} />}
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
