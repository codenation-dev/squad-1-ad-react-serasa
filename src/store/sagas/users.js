import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import apiAxios from '../../services/apiAxios';

import UserActions from '../ducks/users';

export function* addUser(action) {
  try {
    const response = yield call(apiAxios.get, action.user);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === response.data.id));
    if (isDuplicated) {
      throw toast.error('Usuario ja adicionado');
    }

    yield put(UserActions.getUserSuccess(response.data));
  } catch (error) {
    toast.error('Usuario invalido');
  }
}
