import qs from 'querystring';
import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import apiAxios from '../../services/apiAxios';

import UserActions from '../ducks/users';

export function* addUser(action) {
  const usersGit = JSON.parse(localStorage.getItem('@UserGit'));
  try {
    if (action.user) {
      const response = yield call(apiAxios.get, action.user);
      const isDuplicated = yield select(state => state.users.data.find(user => user.id === response.data.id));
      if (isDuplicated) {
        throw toast.error('Usuario ja adicionado');
      }

      if (usersGit) {
        localStorage.setItem('@UserGit', JSON.stringify([...usersGit, response.data]));
      } else {
        localStorage.setItem('@UserGit', JSON.stringify([response.data]));
      }

      yield put(UserActions.getUserSuccess(response.data));
    } else if (action.usersStorage) {
      yield put(UserActions.getUserSuccess(action.usersStorage));
    }
    return;
  } catch (error) {
    yield put(UserActions.getUserFailure());
    toast.error('Usuario invalido');
  }
}

export function* addRepo(action) {
  try {
    const { token } = action;
    const headerParams = {
      Authorization: `Basic ${token}`,
    };
    const repoName = action.repoAdd[0];
    const repoDesc = action.repoAdd[1];

    const data = { name: repoName, description: repoDesc };

    yield call(
      apiAxios.post,
      '/user/repos',
      {
        headers: headerParams,
      },
      { data: qs.stringify(data) },
    );
  } catch (error) {
    toast.error('`Problema ao adicionar repositorio`');
  }
}
