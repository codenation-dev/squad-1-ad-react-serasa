import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import apiAxios from '../../services/apiAxios';

import RepoList from '../../components/RepoList';

import { Container, Owner } from './styles';

class Details extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        login: PropTypes.string,
      }),
    }).isRequired,
    users: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape()),
    }).isRequired,
  };

  state = {
    user: {},
    repos: [],
  };

  async componentDidMount() {
    const { match, users } = this.props;
    const { login } = match.params;
    const result = users.data.filter(user => user.login === login);
    const { data } = await apiAxios.get(`/users/${login}/repos`);
    this.setState({ user: result[0], repos: data });
  }

  render() {
    const { user, repos } = this.state;
    return (
      <div>
        {user ? (
          <Container>
            <Owner>
              <Link to="/">Voltar aos repositorios</Link>
              <img src={user.avatar_url} alt={user.login} />
              <h1>{user.name}</h1>
              <p>{user.bio}</p>
            </Owner>
            <RepoList repos={repos} />
          </Container>
        ) : (
          <Container>
            <h1>No show usuario</h1>
            <Link to="/">Voltar aos repositorios</Link>
          </Container>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Details);
