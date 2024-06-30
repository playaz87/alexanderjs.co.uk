import React from 'react';
import { GithubCard } from './GithubCard';
import { ResumeCard } from './ResumeCard';
import { PokeApiCard } from './PokeApiCard';
import { CandidateCard } from './CandidateCard';
import { Td2Card } from './TD2Card';
import { ShinBaramCard } from './ShinBaramCard';
import styled from 'styled-components';

export const HomeContent = (): React.ReactElement => {
  return (
    <Grid>
      <GithubCard />
      <ResumeCard />
      <PokeApiCard />
      <CandidateCard />
      <Td2Card />
      <ShinBaramCard />
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  max-width: 1000px;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: auto;
  padding: 2rem;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
