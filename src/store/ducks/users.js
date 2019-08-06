import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  getUserRequest: ['user', 'usersStorage'],
  getUserSuccess: ['data'],
  getUserRemove: ['id'],
  getUserFailure: ['error'],
});

export const UserTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  repos: [],
  isLoading: false,
});

export const userRequest = state => state.merge({ isLoading: true });

export const userSuccess = (state, { data }) => {
  if (data.length) return state.merge({ data: [...state.data, ...data], isLoading: false });
  return state.merge({ data: [...state.data, data], isLoading: false });
};

export const userRemove = (state, { id }) => {
<<<<<<< HEAD
  localStorage.setItem('@UserGit', JSON.stringify([...state.data.filter(user => user.id !== id)]));
=======
  const items = JSON.parse(localStorage.getItem('@UserGit'));
  const newItems = items.filter(user => user.id !== id);
  localStorage.setItem('@UserGit', JSON.stringify(newItems));
>>>>>>> acf2d015562de569946c0dd0107db642fc0251b8
  return state.merge({ data: [...state.data.filter(user => user.id !== id)] });
};

export const userFailure = state => state.merge({ isLoading: false });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_USER_REQUEST]: userRequest,
  [Types.GET_USER_SUCCESS]: userSuccess,
  [Types.GET_USER_REMOVE]: userRemove,
  [Types.GET_USER_FAILURE]: userFailure,
});
