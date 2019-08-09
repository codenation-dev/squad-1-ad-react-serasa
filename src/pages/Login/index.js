import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

import TokenActions from '../../store/ducks/token';

import { Container, Header, Form } from './styles';

export default function Login(props) {
  const dispatch = useDispatch();

  const tokenUser = useSelector(state => state.token);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const { history } = props;
    if (tokenUser.isToken) {
      history.push('/');
    }
  }, [props, tokenUser.isToken]);

  async function handleLogin(e) {
    e.preventDefault();
    const credentials = [username, password];
    await dispatch(TokenActions.getTokenRequest(credentials));
  }

  return (
    <Container>
      <Header>
        <FaGithub size={100} />
        <h1>Bem Vindo a squad 1</h1>
      </Header>
      <Form onSubmit={e => handleLogin(e)}>
        <input
          type="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">logar</button>
      </Form>
      <Link to="/">Voltar</Link>
    </Container>
  );
}
