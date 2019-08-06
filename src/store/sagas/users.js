import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import apiAxios from '../../services/apiAxios';

import UserActions from '../ducks/users';

export function* addUser(action) {
  const usersGit = JSON.parse(localStorage.getItem('@UserGit'));
  try {
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
  } catch (error) {
    yield put(UserActions.getUserFailure('Usuario invalido'));
    toast.error('Usuario invalido');
  }
}
