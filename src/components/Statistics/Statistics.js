import PropTypes from 'prop-types';
import { StatisticsBox, Title, Stat, Item } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsBox className="statistics">
      <Title className="title">{title}</Title>

      <Stat className="stat-list">
        {stats.map(stat => (
          <Item className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </Item>
        ))}
      </Stat>
    </StatisticsBox>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
