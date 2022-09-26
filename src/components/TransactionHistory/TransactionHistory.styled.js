import styled from 'styled-components';

export const TrHistory = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  width: 500px;
  background-color: lightblue;
  box-shadow: 3px 3px 3px lightgrey;
`;

export const Header = styled.thead`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const HeaderEl = styled.th`
  height: 30px;
  font-size: x-large;
  font-weight: 700;
  background-color: deepskyblue;
`;

export const BgLine = styled.tr`
  :nth-child(2n) {
    background-color: lightskyblue;
  }
`;

export const TableEl = styled.td`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;
