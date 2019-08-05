import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaGitAlt, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

// import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import UserActions from '../../store/ducks/users';

import {
  Container, Navbar, Form, Logo, Token,
} from './styles';

function Header({ getUserRequest }) {
  const [token, setToken] = useState('');
  const [newToken, setNewToken] = useState('');
  const [newInput, setNewInput] = useState('');

  useEffect(() => {
    const tokenResult = localStorage.getItem('@gitToken');
    if (tokenResult) {
      setToken(JSON.parse(tokenResult));
    }
  }, []);

  async function handleAddUser(e) {
    e.preventDefault();
    await getUserRequest(`/users/${newInput}`);
    setNewInput('');
  }

  function handleChangeToken(e) {
    setNewToken(e.target.value);
  }

  function handleChangeInput(e) {
    setNewInput(e.target.value);
  }

  function handleAddToken() {
    setToken(newToken);
    localStorage.setItem('@gitToken', JSON.stringify(newToken));
  }

  function handleRemoveToken() {
    localStorage.clear();
    setToken('');
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
        {token ? (
          <Token>
            <strong>Token</strong>
            <FaCheckCircle color="#fff" onClick={handleRemoveToken} />
          </Token>
        ) : (
          <Token>
            <input
              value={newToken}
              onChange={e => handleChangeToken(e)}
              placeholder="Adicionar Token"
            />
            <FaPlusCircle size={18} color="#fff" onClick={handleAddToken} />
          </Token>
        )}
      </Navbar>
    </Container>
  );
}

Header.propTypes = {
  getUserRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Header);
