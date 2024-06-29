import React from 'react';
import styled from 'styled-components';
import { ResumeCard } from './components/ResumeCard';
import { PokeApiCard } from './components/PokeApiCard';
import { CandidateCard } from './components/CandidateCard';
import { Td2Card } from './components/TD2Card';
import { ShinBaramCard } from './components/ShinBaramCard';
import { GithubCard } from './components/GithubCard';

export const HomeLayout = (): React.ReactElement => {
  return (
    <Container>
      <Grid>
        <GithubCard />
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
  min-height: 100vh;
  min-height: 100svh;

  background-color: var(--accent);
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  max-width: 1000px;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: auto;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const HomeCard = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
