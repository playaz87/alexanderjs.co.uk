import React from 'react';
import { ResumeCard } from './ResumeCard';
import { PokeApiCard } from './PokeApiCard';
import { CandidateCard } from './CandidateCard';
import { Td2Card } from './TD2Card';
import { ShinBaramCard } from './ShinBaramCard';
import styled from 'styled-components';
import { IntroCard } from './IntroCard';

export const HomeContent = (): React.ReactElement => {
  return (
    <Grid>
      <IntroCard />
      {/*<GithubCard />*/}
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
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  margin: auto;
  background-color: rgba(45, 212, 191, 0.1);
  gap: 1rem;
`;
