import { all, takeLatest } from 'redux-saga/effects';

import { addUser, addRepo } from './users';
import { UserTypes } from '../ducks/users';

import { addLanguage } from './language';
import { LanguageTypes } from '../ducks/language';

import { addToken } from './token';
import { TokenTypes } from '../ducks/token';

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.GET_USER_REQUEST, addUser),
    takeLatest(UserTypes.REPO_ADD_REQUEST, addRepo),
    takeLatest(LanguageTypes.GET_LANGUAGE_REQUEST, addLanguage),
    takeLatest(TokenTypes.GET_TOKEN_REQUEST, addToken),
  ]);
}
