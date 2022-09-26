import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: 100%;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 3px 3px 3px lightgrey;
  border-radius: 4px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;

  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  padding-bottom: 5px;
  padding-top: 5px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: large;
`;
