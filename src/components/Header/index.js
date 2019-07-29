import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as RepositoriesActions } from '../../store/ducks/repositories';

import { Container, Navbar } from './styles';

function Header({ searchRepositoryByUser }) {
  const handleSearchClick = (e, searchAction) => {
    e.preventDefault();
    searchAction();
  };

  return (
    <Container>
      <Navbar>
        <h1>Logo</h1>
        <form>
          <input type="text" placeholder="Adicionar" />
          <button type="submit" onClick={e => handleSearchClick(e, searchRepositoryByUser)}>Pesquisar</button>
        </form>
        <h1>menu</h1>
      </Navbar>
    </Container>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch);

export default connect(null, mapDispatchToProps)(Header);
