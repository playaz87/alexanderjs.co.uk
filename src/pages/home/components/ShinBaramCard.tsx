import React from 'react';
import styled from 'styled-components';
import { HomeCard } from '../HomeLayout';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';

export const ShinBaramCard = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <HomeCard onClick={() => navigate(appRoutes.shinbaram.nav())}>
      <Header>Shinbaram</Header>
      <Img src={'/icons/shinbaram.png'} />
      <Content>A secondhand market place for agricultural products</Content>
    </HomeCard>
  );
};

const Header = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const Img = styled.img`
  padding: 1rem;
  max-width: 100%;
  max-height: 300px;
`;

const Content = styled.div`
  text-align: center;
  text-wrap: pretty;
  font-size: 1.2rem;
`;
