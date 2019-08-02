import { createActions, createReducer } from 'reduxsauce';

/**
 * Types & creators
 */
export const { Types, Creators } = createActions({
  searchRepositoryByUser: ['user'],
  searchRepositoryByLanguage: ['language'],
  searchRepositoryByYear: ['year'],
  createRepository: ['repository'],
});

/**
 * Handlers
 */
const INITIAL_STATE = [];

const searchRepositoryByUser = (state = INITIAL_STATE, action) => {
  console.log('searchRepositoryByUser');
  console.log(action);
  return state;
};

const searchRepositoryByLanguage = (state = INITIAL_STATE, action) => {
  console.log('searchRepositoryByLanguage');
  console.log(action);
  return state;
};

const searchRepositoryByYear = (state = INITIAL_STATE, action) => {
  console.log('searchRepositoryByYear');
  console.log(action);
  return state;
};

const createRepository = (state = INITIAL_STATE, action) => {
  console.log('createRepository');
  console.log(action);
  return state;
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.SEARCH_REPOSITORY_BY_USER]: searchRepositoryByUser,
  [Types.SEARCH_REPOSITORY_BY_LANGUAGE]: searchRepositoryByLanguage,
  [Types.SEARCH_REPOSITORY_BY_YEAR]: searchRepositoryByYear,
  [Types.CREATE_REPOSITORY]: createRepository,
});
