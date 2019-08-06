import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaTrashAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import UserActions from '../../store/ducks/users';

import { Container, Icon, ContentIcon } from './styles';

export default function Cards({ gitUser }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <header>
        <img src={gitUser.avatar_url} alt={gitUser.name} />
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
      </ul>
      <ContentIcon>
        <Icon type="button" onClick={() => dispatch(UserActions.getUserRemove(gitUser.id))}>
          <FaTrashAlt />
        </Icon>
        <Link to={`/user/${gitUser.login}`}>
          <FaArrowRight />
        </Link>
      </ContentIcon>
    </Container>
  );
}

Cards.propTypes = {
  gitUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    public_repos: PropTypes.number,
    following: PropTypes.number,
    followers: PropTypes.number,
  }).isRequired,
};
