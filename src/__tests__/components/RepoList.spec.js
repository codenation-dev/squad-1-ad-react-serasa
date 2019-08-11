import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';

import RepoList from '../../components/RepoList';

it('should render multiple repositories in RepoList component', () => {
  const repos = [
    {
      id: 1,
      name: 'Repo',
      html_url: 'urlRepo',
      stargazers_count: 1,
      open_issues_count: 1,
      forks_count: 1,
      created_at: '2019-08-11',
    },
    {
      id: 2,
      name: 'Repo2',
      html_url: 'urlRepo2',
      stargazers_count: 1,
      open_issues_count: 1,
      forks_count: 1,
      created_at: '2019-08-11',
    },
  ];

  const wrapper = mount(<RepoList repos={repos} />);

  repos.forEach((repo) => {
    expect(wrapper.contains(<a href={repo.html_url}>{repo.name}</a>)).toBe(true);
    expect(wrapper.contains(<strong>{repo.forks_count}</strong>)).toBe(true);
    expect(wrapper.contains(<strong>{repo.stargazers_count}</strong>)).toBe(true);
    expect(wrapper.contains(<strong>{repo.open_issues_count}</strong>)).toBe(true);
    expect(wrapper.contains(<strong>{moment(repo.created_at).format('L')}</strong>)).toBe(true);
  });
});
