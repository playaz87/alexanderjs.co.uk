import React from 'react';
import { HomeCard } from '../HomeLayout';
import styled from 'styled-components';

export const GithubCard = (): React.ReactElement => {
  return (
    <HomeCard onClick={() => window.open('https://github.com/playaz87', '_blank')}>
      <Header>Github</Header>
      <Img />
    </HomeCard>
  );
};

const Header = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const Img = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 220px;
  mask: url('/icons/github.svg');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: white;
  aspect-ratio: 1 / 1;
`;
