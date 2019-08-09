import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

import ContainerStyle from '../ContainerStyle';

import { Info, Content, Header } from './styles';

function LanguageList() {
  const languageRepo = useSelector(state => state.language.repos.items);

  if (languageRepo) {
    return (
      <ContainerStyle>
        {languageRepo.map(item => (
          <li key={item.id}>
            <Content>
              <Header>
                <img src={item.owner.avatar_url} alt={item.owner.login} />
                <h1>{item.owner.login}</h1>
                <h2>
                  <a href={item.html_url}>{item.name}</a>
                </h2>
              </Header>
              <div>
                <Info>
                  <strong>{item.forks_count}</strong>
                  <p>Forks </p>
                </Info>

                <Info>
                  <strong>{item.stargazers_count}</strong>
                  <p>Stars </p>
                </Info>

                <Info>
                  <strong>{item.open_issues_count}</strong>
                  <p>Issues </p>
                </Info>

                <Info>
                  <strong>{moment(item.created_at).format('L')}</strong>
                  <p>Created </p>
                </Info>
              </div>
            </Content>
          </li>
        ))}
      </ContainerStyle>
    );
  }
  return (
    <ContainerStyle>
      <div>
        <h1>Not Result</h1>
      </div>
    </ContainerStyle>
  );
}

export default LanguageList;
