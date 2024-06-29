import React from 'react';
import { HomeCard } from '../HomeLayout';
import styled from 'styled-components';

export const Td2Card = (): React.ReactElement => {
  return (
    <HomeCard>
      <Img src={'/icons/td2.png'} />
      <Content>The world&apos;s most popular Diablo 2 companion app with over 70k downloads</Content>
    </HomeCard>
  );
};

const Img = styled.img`
  border-bottom: 1px solid white;
  padding: 1rem;
  max-width: 40vw;
`;

const Content = styled.div``;
