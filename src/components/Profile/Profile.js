import PropTypes from 'prop-types';
import {
  Prolile,
  Description,
  Img,
  UserName,
  Tag,
  Location,
  Stats,
  Label,
  Text,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <Prolile>
      <Description>
        <Img src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Label>
          <span>Followers</span>
          <Text>{followers}</Text>
        </Label>
        <Label>
          <span>Views</span>
          <Text>{views}</Text>
        </Label>
        <Label>
          <span>Likes</span>
          <Text>{likes}</Text>
        </Label>
      </Stats>
    </Prolile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
