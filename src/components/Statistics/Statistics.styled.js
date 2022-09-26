import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsBox = styled.section`
  margin-left: auto;
  margin-right: auto;

  max-width: 300px;
  border-radius: 4px;
  margin-bottom: 50px;
  box-shadow: 3px 3px 3px lightgrey;
`;

export const Title = styled.h2`
  color: grey;
  background-color: #fff;
  font-weight: 700;
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Stat = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 8px;
  border: 1px solid rgb(169, 170, 172);
  width: 100%;
  background-color: ${getRandomHexColor};
`;
