import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaTrashAlt, FaArrowRight } from 'react-icons/fa';

import UserActions from '../../store/ducks/users';

import { Container, Icon, ContentIcon } from './styles';

const Cards = ({ gitUser, getUserRemove }) => (
  <Container>
    <header>
      <img src={gitUser.avatar_url} alt="" />
      <strong>{gitUser.name}</strong>
      <small>{gitUser.login}</small>
    </header>
    <ul>
      <li>
        {gitUser.followers} <small>Followers</small>
      </li>
      <li>
        {gitUser.following} <small>Following</small>
      </li>
      <li>
        {gitUser.public_repos} <small>Public Repos</small>
      </li>
      <li>
        <strong>Bio: </strong>
        {gitUser.bio}
      </li>
    </ul>
    <ContentIcon>
      <Icon type="button" onClick={() => getUserRemove(gitUser.id)}>
        <FaTrashAlt />
      </Icon>
      <Icon type="button" onClick={() => {}}>
        <FaArrowRight />
      </Icon>
    </ContentIcon>
  </Container>
);

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Cards);
