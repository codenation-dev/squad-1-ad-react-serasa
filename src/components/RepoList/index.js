import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Info, Container } from './styles';

function RepoList({ repos }) {
  return (
    <Container>
      {repos.map(repo => (
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
    </Container>
  );
}

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      html_url: PropTypes.string,
      stargazers_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      forks_count: PropTypes.number,
      created_at: PropTypes.string,
    }),
  ).isRequired,
};

export default RepoList;
