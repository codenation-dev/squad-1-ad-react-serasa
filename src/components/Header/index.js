import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaGitAlt, FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

// import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import UserActions from '../../store/ducks/users';
import LanguageActions from '../../store/ducks/language';

import {
  Container, Navbar, Form, Logo,
} from './styles';

function Header({ getUserRequest, getLanguageRequest, history }) {
  const [newInput, setNewInput] = useState('');
  const [search, setSearch] = useState('');

  async function handleAddUser(e) {
    e.preventDefault();
    await getUserRequest(`/users/${newInput}`);
    setNewInput('');
  }

  function handleChangeInput(e) {
    setNewInput(e.target.value);
  }

  async function handleAddSearch(e) {
    e.preventDefault();
    if (search.split('/').length === 2) {
      const result = search.split('/');
      await getLanguageRequest(`/search/repositories?q=${result[0]}+language:${result[1]}`, result);
    } else {
      toast.warn('Exemplo facebook/python');
    }
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
            placeholder="facebook/python"
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
  getUserRequest: PropTypes.func.isRequired,
  getLanguageRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, ...LanguageActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Header));
