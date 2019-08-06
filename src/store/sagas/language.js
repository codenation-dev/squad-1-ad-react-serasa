import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import apiAxios from '../../services/apiAxios';

import LanguageActions from '../ducks/language';

export function* addLanguage(action) {
  try {
    const response = yield call(apiAxios.get, action.link);
    const result = { language: action.language[1], repository: action.language[0] };

    yield put(LanguageActions.getLanguageSuccess(response.data, result));
  } catch (error) {
    toast.error('Language ou Repositorio invalido');
  }
}
