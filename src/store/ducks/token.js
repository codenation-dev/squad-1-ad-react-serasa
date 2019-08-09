import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  getTokenRequest: ['credentials'],
  getTokenSuccess: ['user', 'token', 'isToken'],
  getTokenClear: ['clear', 'isToken'],
  getTokenFailure: ['isToken'],
});

export const TokenTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  user: '',
  token: '',
  isToken: false,
});

export const tokenSuccess = (state, { user, token, isToken }) => state.merge({ user, token, isToken });

export const tokenClear = (state, { clear, isToken }) => state.merge({ user: clear, token: clear, isToken });

export const tokenFailure = (state, { isToken }) => state.merge({ isToken });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TOKEN_SUCCESS]: tokenSuccess,
  [Types.GET_TOKEN_CLEAR]: tokenClear,
  [Types.GET_TOKEN_FAILURE]: tokenFailure,
});
