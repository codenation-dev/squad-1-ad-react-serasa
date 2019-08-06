import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  getUserRequest: ['user'],
  getUserSuccess: ['data'],
  getUserRemove: ['id'],
  getUserFailure: ['error'],
});

export const UserTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  repos: [],
  error: false,
  isLoading: false,
});

export const userRequest = state => state.merge({ isLoading: true });

export const userSuccess = (state, { data }) => (
  state.merge({ data: [...state.data, data], isLoading: false })
);

export const userRemove = (state, { id }) => {
  const items = JSON.parse(localStorage.getItem('@UserGit'));
  const newItems = items.filter(user => user.id !== id);
  localStorage.setItem('@UserGit', JSON.stringify(newItems));
  return state.merge({ data: [...state.data.filter(user => user.id !== id)] });
};

export const userFailure = (state, { error }) => state.merge({ isLoading: false, error });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_USER_REQUEST]: userRequest,
  [Types.GET_USER_SUCCESS]: userSuccess,
  [Types.GET_USER_REMOVE]: userRemove,
  [Types.GET_USER_FAILURE]: userFailure,
});
