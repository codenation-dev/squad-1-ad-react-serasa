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
    toast.error('Usuario invalido');
    yield put(UserActions.getUserFailure());
  }
}
