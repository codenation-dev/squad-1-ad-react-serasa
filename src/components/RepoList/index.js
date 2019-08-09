import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ContainerStyle from '../ContainerStyle';

import { Info } from './styles';

export default function RepoList({ repos }) {
  return (
    <>
      {repos.map((reposByYear, year) => (
        <ContainerStyle key={year}>
          <h1>{year}</h1>
          {reposByYear.map(repo => (
            <li key={repo.id}>
              <div>
                <h2>
                  <a href={repo.html_url}>{repo.name}</a>
                </h2>
                <Info>
                  <strong>{repo.forks_count}</strong>
                  <p>Forks </p>
                </Info>
                <Info>
                  <strong>{repo.stargazers_count}</strong>
                  <p>Stars </p>
                </Info>
                <Info>
                  <strong>{repo.open_issues_count}</strong>
                  <p>Issues </p>
                </Info>
                <Info>
                  <strong>{moment(repo.created_at).format('L')}</strong>
                  <p>Created </p>
                </Info>
              </div>
            </li>
          ))}
        </ContainerStyle>
      ))}
    </>
  );
}

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape(PropTypes.number)).isRequired,
};
