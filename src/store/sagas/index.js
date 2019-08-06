import { all, takeLatest } from 'redux-saga/effects';

import { addUser } from './users';
import { UserTypes } from '../ducks/users';

import { addLanguage } from './language';
import { LanguageTypes } from '../ducks/language';

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.GET_USER_REQUEST, addUser),
    takeLatest(LanguageTypes.GET_LANGUAGE_REQUEST, addLanguage),
  ]);
}
