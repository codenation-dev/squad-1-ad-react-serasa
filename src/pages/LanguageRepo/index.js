import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import LanguageList from '../../components/LanguageList';
import Loading from '../../components/Loading';

import { Container, Owner } from './styles';

export default function LanguageRepo() {
  const languageRepo = useSelector(state => state.language);

  if (languageRepo.isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <Container>
          <Owner>
            <Link to="/">Voltar aos repositorios</Link>
            <h1>{languageRepo.repoLanguage.language}</h1>
            <p>{languageRepo.repoLanguage.repository}</p>
          </Owner>
          <LanguageList />
        </Container>
      </div>
    </div>
  );
}
