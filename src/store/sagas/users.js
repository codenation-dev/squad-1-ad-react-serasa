import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import apiAxios from '../../services/apiAxios';

import UserActions from '../ducks/users';

export function* addUser(action) {
  try {
    const response = yield call(apiAxios.get, action.user);

    yield put(UserActions.getUserSuccess(response.data));
  } catch (error) {
    toast.error('Usuario invalido');
  }
}
