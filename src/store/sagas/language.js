import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import apiAxios from '../../services/apiAxios';

import LanguageActions from '../ducks/language';

export function* addLanguage(action) {
  try {
    const response = yield call(apiAxios.get, action.link);

    const result = { language: action.language };

    yield put(LanguageActions.getLanguageSuccess(response.data, result));
  } catch (error) {
    yield put(LanguageActions.getLanguageFailure());
    toast.error('Language ou Repositorio invalido');
  }
}
