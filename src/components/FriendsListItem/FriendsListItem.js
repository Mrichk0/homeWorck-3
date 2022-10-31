import PropTypes from 'prop-types';
import styled from 'styled-components';

const Element = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 4px 3px 3px 2px grey;

  width: ${p => p.theme.sizes.s};
  border-radius: ${p => p.theme.radii.normal}px;

  margin: auto;
  margin-bottom: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export default function FriendsListItem({ name, isOnline, avatar }) {
  return (
    <Element>
      <span style={{ backgroundColor: isOnline ? 'red' : 'green' }}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </Element>
  );
}

FriendsListItem.protoType = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
