import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import apiAxios from '../../services/apiAxios';

class Details extends Component {
  static propTypes = {
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
        <h1>Details</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Details);
