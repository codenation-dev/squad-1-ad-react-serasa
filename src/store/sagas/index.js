import { all, takeLatest } from 'redux-saga/effects';

import { addUser } from './users';
import { UserTypes } from '../ducks/users';

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.GET_USER_REQUEST, addUser)]);
}
