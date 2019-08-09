import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FaGitAlt, FaSearch } from 'react-icons/fa';
import { withRouter, Link } from 'react-router-dom';

import UserActions from '../../store/ducks/users';
import LanguageActions from '../../store/ducks/language';
import TokenActions from '../../store/ducks/token';

import {
  Container, Navbar, Form, Logo, LoginContainer,
} from './styles';

function Header({ history }) {
  const dispatch = useDispatch();

  const userToken = useSelector(state => state.token);

  const [newInput, setNewInput] = useState('');
  const [search, setSearch] = useState('');

  async function handleAddUser(e) {
    e.preventDefault();
    await dispatch(UserActions.getUserRequest(`/users/${newInput}`));
    setNewInput('');
  }

  async function handleAddSearch(e) {
    e.preventDefault();
    await dispatch(
      LanguageActions.getLanguageRequest(`/search/repositories?q=+language:${search}`, search),
    );
    setSearch('');
    return history.push('/languageRepo');
  }

  function handleLogout() {
    dispatch(TokenActions.getTokenClear('', false));
  }

  return (
    <Container>
      <Navbar>
        <Logo>
          <FaGitAlt size={60} color="#fff" />
          <h1>Github</h1>
        </Logo>
        <Form onSubmit={e => handleAddUser(e)}>
          <input
            type="text"
            placeholder="Adicionar"
            value={newInput}
            onChange={e => setNewInput(e.target.value)}
          />
          <button type="submit">Adicionar</button>
        </Form>

        <Form onSubmit={e => handleAddSearch(e)}>
          <input
            type="text"
            placeholder="JavaScript"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </Form>
        {userToken.isToken ? (
          <LoginContainer>
            <h1>Bem Vindo</h1>
            <div>
              <strong>{userToken.user.login}</strong>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </LoginContainer>
        ) : (
          <LoginContainer>
            <Link to="/login">Login</Link>
          </LoginContainer>
        )}
      </Navbar>
    </Container>
  );
}

Header.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(Header);
