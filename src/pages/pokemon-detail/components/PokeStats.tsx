import React from 'react';
import styled from 'styled-components';
import type { Pokemon } from '../../../common/types/poke-api/poke-api';

interface Props {
  pokemon: Pokemon;
}

export const PokeStats: React.FC<Props> = ({ pokemon }) => {
  return (
    <Container>
      <Wrapper>
        {pokemon.stats.map(s => (
          <Row key={`stat-${s.stat.url}`}>
            <Label>{s.stat.name}</Label>
            <div>{s.base_stat}</div>
          </Row>
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
`;

const Row = styled.div`
  display: contents;
`;

const Label = styled.div`
  text-align: end;
  font-weight: bold;
  color: var(--accent);
`;
