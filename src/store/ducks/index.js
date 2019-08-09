import { combineReducers } from 'redux';

import { reducer as users } from './users';
import { reducer as language } from './language';
import { reducer as token } from './token';

export default combineReducers({
  users,
  language,
  token,
});
