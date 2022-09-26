import styled from 'styled-components';

export const Prolile = styled.div`
  padding: 10px;

  margin-left: auto;
  margin-right: auto;

  margin-bottom: 50px;
  width: 300px;

  background-color: ${p => p.theme.colors.background};
`;

export const Description = styled.div`
  background-color: ${p => p.theme.colors.white};
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Img = styled.img`
  width: 50px;
  margin-bottom: 30px;
`;

export const UserName = styled.p`
  font-weight: ${p => p.theme.fontWeights.bolt};
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-bottom: 5px;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;

  background-color: rgb(231, 236, 242);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Label = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 8px;
  border: 1px solid rgb(169, 170, 172);
  width: 100%;
`;

export const Text = styled.span`
  font-weight: 700;
`;
