import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import TokenActions from '../../store/ducks/token';

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
    <div>
      <h1>Logado</h1>
      <form onSubmit={e => handleLogin(e)}>
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
      </form>
      <Link to="/">Voltar</Link>
    </div>
  );
}
