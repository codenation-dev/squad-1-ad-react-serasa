import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Card from '../../components/Cards';
import Loading from '../../components/Loading';

import UserActions from '../../store/ducks/users';

import { Container } from './styles';

export default function Main() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const [gitUser, setGitUser] = useState([]);

  useEffect(() => {
    const usersStorage = JSON.parse(localStorage.getItem('@UserGit'));
    async function fetchGit() {
      await dispatch(UserActions.getUserRequest(null, usersStorage));
    }
    if (usersStorage) {
      fetchGit();
    }
  }, [dispatch]);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem('@UserGit'));
    if (response) {
      setGitUser(response);
    } else {
      setGitUser(users.data);
    }
  }, [users]);

  if (users.isLoading) {
    return <Loading />;
  }

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
