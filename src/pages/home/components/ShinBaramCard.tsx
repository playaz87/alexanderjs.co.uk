import React from 'react';
import styled from 'styled-components';
import { HomeCard } from '../HomeLayout';

export const ShinBaramCard = (): React.ReactElement => {
  return (
    <HomeCard>
      <Img src={'/icons/shinbaram.png'} />
      <Content>A secondhand market place for agricultural products</Content>
    </HomeCard>
  );
};

const Img = styled.img`
  border-bottom: 1px solid white;
  padding: 1rem;
  max-width: 40vw;
`;

const Content = styled.div``;
