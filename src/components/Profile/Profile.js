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
    <Prolile className="profile">
      <Description className="description">
        <Img src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <Tag className="tag">{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <Stats className="stats">
        <Label>
          <span className="label">Followers</span>
          <Text className="quantity">{followers}</Text>
        </Label>
        <Label>
          <span className="label">Views</span>
          <Text className="quantity">{views}</Text>
        </Label>
        <Label>
          <span className="label">Likes</span>
          <Text className="quantity">{likes}</Text>
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
