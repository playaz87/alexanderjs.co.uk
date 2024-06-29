import React from 'react';
import { HomeCard } from '../HomeLayout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';

export const Td2Card = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <HomeCard onClick={() => navigate(appRoutes.td2.nav())}>
      <Header>Tome of D2</Header>
      <Img src={'/icons/td2.png'} />
      <Content>
        The world&apos;s most popular <span>Diablo 2</span> companion app with over 70k downloads
      </Content>
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

  > span {
    white-space: pre;
  }
`;
