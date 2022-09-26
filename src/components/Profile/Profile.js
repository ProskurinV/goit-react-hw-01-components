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
    <Prolile class="profile">
      <Description class="description">
        <Img src={avatar} alt="User avatar" class="avatar" />
        <UserName class="name">{username}</UserName>
        <Tag class="tag">{tag}</Tag>
        <Location class="location">{location}</Location>
      </Description>

      <Stats class="stats">
        <Label>
          <span class="label">Followers</span>
          <Text class="quantity">{followers}</Text>
        </Label>
        <Label>
          <span class="label">Views</span>
          <Text class="quantity">{views}</Text>
        </Label>
        <Label>
          <span class="label">Likes</span>
          <Text class="quantity">{likes}</Text>
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
