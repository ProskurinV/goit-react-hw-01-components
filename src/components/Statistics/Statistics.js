import PropTypes from 'prop-types';
import { StatisticsBox, Title, Stat, Item } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsBox class="statistics">
      <Title class="title">{title}</Title>

      <Stat class="stat-list">
        {stats.map(stat => (
          <Item key={stat.id} class="item">
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
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
