import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  getLanguageRequest: ['link', 'language'],
  getLanguageSuccess: ['data', 'repoLanguage'],
});

export const LanguageTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  repos: [],
  repoLanguage: {},
  isLoading: false,
});

export const languageRequest = state => state.merge({ isLoading: true });

export const languageSuccess = (state, { data, repoLanguage }) => state.merge({ repos: data, repoLanguage, isLoading: false });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LANGUAGE_REQUEST]: languageRequest,
  [Types.GET_LANGUAGE_SUCCESS]: languageSuccess,
});
