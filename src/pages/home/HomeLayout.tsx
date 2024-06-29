import React from 'react';
import styled from 'styled-components';
import { ResumeCard } from './components/ResumeCard';
import { PokeApiCard } from './components/PokeApiCard';
import { CandidateCard } from './components/CandidateCard';
import { Td2Card } from './components/TD2Card';
import { ShinBaramCard } from './components/ShinBaramCard';

export const HomeLayout = (): React.ReactElement => {
  return (
    <Container>
      <Grid>
        <ResumeCard />
        <PokeApiCard />
        <CandidateCard />
        <Td2Card />
        <ShinBaramCard />
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: 100svh;

  background-color: var(--accent);
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const HomeCard = styled.div`
  color: white;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
