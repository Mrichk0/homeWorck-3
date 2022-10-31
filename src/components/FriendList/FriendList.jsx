import FriendsListItem from 'components/FriendsListItem/FriendsListItem';

import PropTypes from 'prop-types';

export default function FriendList({ props }) {
  return (
    <ul class="friend-list">
      {props.map(({ id, name, isOnline, avatar }) => (
        <FriendsListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
