import PropTypes from 'prop-types';
import { Item, Status, Name, Avatar } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item className="item">
      <Status className="status" isOnline={isOnline}>
        {isOnline}
      </Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </Item>
  );
}

FriendListItem.protoType = {
  avatar: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};
