import { combineReducers } from 'redux';

import { reducer as users } from './users';
import { reducer as language } from './language';

export default combineReducers({
  users,
  language,
});
