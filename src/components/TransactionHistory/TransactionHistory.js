import PropTypes from 'prop-types';
import {
  TrHistory,
  Header,
  HeaderEl,
  TableEl,
  BgLine,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TrHistory class="transaction-history">
      <Header>
        <BgLine>
          <HeaderEl>Type</HeaderEl>
          <HeaderEl>Amount</HeaderEl>
          <HeaderEl>Currency</HeaderEl>
        </BgLine>
      </Header>

      <tbody>
        {items.map(item => (
          <BgLine key={item.id}>
            <TableEl>{item.type}</TableEl>
            <TableEl>{item.amount}</TableEl>
            <TableEl>{item.currency}</TableEl>
          </BgLine>
        ))}
      </tbody>
    </TrHistory>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
