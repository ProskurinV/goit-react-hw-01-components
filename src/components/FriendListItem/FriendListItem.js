import PropTypes from 'prop-types';
import { Item, Status, Name, Avatar } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item class="item">
      <Status isOnline={isOnline} class="status">
        {isOnline}
      </Status>
      <Avatar class="avatar" src={avatar} alt="User avatar" width="48" />
      <Name class="name">{name}</Name>
    </Item>
  );
}

FriendListItem.protoType = {
  avatar: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};
