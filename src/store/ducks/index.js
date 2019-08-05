import { combineReducers } from 'redux';

import repositories from './repositories';
import { reducer as users } from './users';

export default combineReducers({
  users,
  repositories,
});
