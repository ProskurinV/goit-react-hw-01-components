import PropTypes from 'prop-types';
import { StatisticsBox, Title, Stat, Item } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsBox>
      {title && <Title>{title}</Title>}
      <Stat>
        {stats.map(stat => (
          <Item key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </Item>
        ))}
      </Stat>
    </StatisticsBox>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
