import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import apiAxios from '../../services/apiAxios';

import TokenActions from '../ducks/token';

export function* addToken(action) {
  try {
    const token = btoa(`${action.credentials[0]}:${action.credentials[1]}`);
    const headerParams = {
      Authorization: `Basic ${token}`,
    };

    const result = yield call(apiAxios.get, '/user', { headers: headerParams });

    yield put(TokenActions.getTokenSuccess(result.data, token, true));
  } catch (error) {
    toast.error('Login ou senha invalida');
    yield put(TokenActions.getTokenFailure(false));
  }
}
