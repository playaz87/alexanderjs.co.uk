import React from 'react';
import styled from 'styled-components';
import type { Pokemon } from '../../../common/types/poke-api/poke-api';
import { ProgressBar } from "../../../common/components/ProgressBar";
import { useAppSelector } from "../../../store/store";
import { selectorFindSpecies } from "../../../store/poke-api/selectors";

interface Props {
  pokemon: Pokemon;
}

export const PokeStats: React.FC<Props> = ({ pokemon }) => {
    const species = useAppSelector(state => selectorFindSpecies(state, pokemon.id.toString(10)));

    const calcStat = (stat: number) => {
        let max = Number.MIN_SAFE_INTEGER;
        for (const s of pokemon.stats) {
            if (s.base_stat > max) max = s.base_stat;
        }
        return (stat / max) * 100
    }

  return (
    <Container>
      <Wrapper>
        {pokemon.stats.map(s => (
          <Row key={`stat-${s.stat.url}`}>
            <Label>{s.stat.name}</Label>
            <ProgressBar percent={calcStat(s.base_stat)} color={`var(--color-${species?.color.name})`} label={s.base_stat} />
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
