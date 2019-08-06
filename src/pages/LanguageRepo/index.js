import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Owner } from './styles';

import LanguageList from '../../components/LanguageList';

function LanguageRepo({ languageRepo }) {
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

LanguageRepo.propTypes = {
  languageRepo: PropTypes.shape({
    repoLanguage: PropTypes.shape({
      language: PropTypes.string,
      repository: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  languageRepo: state.language,
});

export default connect(mapStateToProps)(LanguageRepo);
