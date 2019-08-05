import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaGitAlt, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

// import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import UserActions from '../../store/ducks/users';

import {
  Container, Navbar, Form, Logo, Token,
} from './styles';

class Header extends Component {
  state = {
    token: '',
    newToken: '',
    newInput: '',
  };

  async componentDidMount() {
    const tokenResult = localStorage.getItem('@gitToken');
    if (tokenResult) {
      this.setState({
        token: JSON.parse(tokenResult),
      });
    }
  }

  handleAddUser = async (e) => {
    e.preventDefault();
    const { getUserRequest } = this.props;
    const { newInput } = this.state;
    await getUserRequest(`/users/${newInput}`);
    this.setState({ newInput: '' });
  };

  handleChange = (e) => {
    this.setState({ newToken: e.target.value });
  };

  handleAddToken = () => {
    const { newToken } = this.state;
    this.setState({
      token: newToken,
      newToken: '',
    });
    localStorage.setItem('@gitToken', JSON.stringify(newToken));
  };

  handleRemoveToken = () => {
    localStorage.clear();
    this.setState({ token: '' });
  };

  render() {
    const { token, newToken, newInput } = this.state;
    return (
      <Container>
        <Navbar>
          <Logo>
            <FaGitAlt size={60} color="#fff" />
            <h1>Github</h1>
          </Logo>
          <Form onSubmit={e => this.handleAddUser(e)}>
            <input
              type="text"
              placeholder="Adicionar"
              value={newInput}
              onChange={e => this.setState({ newInput: e.target.value })}
            />
            <button type="submit">Pesquisar</button>
          </Form>
          {token ? (
            <Token>
              <strong>Token</strong>
              <FaCheckCircle color="#fff" onClick={this.handleRemoveToken} />
            </Token>
          ) : (
            <Token>
              <input
                value={newToken}
                onChange={e => this.handleChange(e)}
                placeholder="Adicionar Token"
              />
              <FaPlusCircle size={18} color="#fff" onClick={this.handleAddToken} />
            </Token>
          )}
        </Navbar>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Header);
