import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaGitAlt, FaSearch } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

import UserActions from '../../store/ducks/users';
import LanguageActions from '../../store/ducks/language';

import {
  Container, Navbar, Form, Logo,
} from './styles';

function Header({ history }) {
  const dispatch = useDispatch();

  const [newInput, setNewInput] = useState('');
  const [search, setSearch] = useState('');

  async function handleAddUser(e) {
    e.preventDefault();
    await dispatch(UserActions.getUserRequest(`/users/${newInput}`));
    setNewInput('');
  }

  function handleChangeInput(e) {
    setNewInput(e.target.value);
  }

  async function handleAddSearch(e) {
    e.preventDefault();
    await dispatch(
      LanguageActions.getLanguageRequest(
        `/search/repositories?q=+language:${search}`,
        search,
      ),
    );
    setSearch('');
    return history.push('/languageRepo');
  }

  function handleChangeSearch(e) {
    setSearch(e.target.value);
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
            onChange={e => handleChangeInput(e)}
          />
          <button type="submit">Adicionar</button>
        </Form>

        <Form onSubmit={e => handleAddSearch(e)}>
          <input
            type="text"
            placeholder="JavaScript"
            value={search}
            onChange={e => handleChangeSearch(e)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </Form>
      </Navbar>
    </Container>
  );
}

Header.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(Header);
