import React, { useState } from 'react';
import styled from 'styled-components';
import type { Pokemon } from '../../../common/types/poke-api/poke-api';
import { useAppSelector } from '../../../store/store';
import { selectorFindSpecies } from '../../../store/poke-api/selectors';
import SpiderGraph from '../../../common/components/SpiderGraph';
import { ProgressBar } from '../../../common/components/ProgressBar';

interface Props {
  pokemon: Pokemon;
}

export const PokeStats: React.FC<Props> = ({ pokemon }) => {
  const [sectionIdx, setSectionIdx] = useState(0);
  const species = useAppSelector(state => selectorFindSpecies(state, pokemon.id.toString(10)));

  const calcStat = (stat: number, asPercentage?: boolean) => {
    let max = Number.MIN_SAFE_INTEGER;
    for (const s of pokemon.stats) {
      if (s.base_stat > max) max = s.base_stat;
    }

    const fraction = Math.floor((stat / max) * 100) / 100;

    if (!asPercentage) {
      return fraction;
    } else {
      return fraction * 100;
    }
  };

  if (!species) return null;

  return (
    <Container>
      <ToggleWrapper>
        <ToggleItem $icon={'spider-chart.svg'} onClick={() => setSectionIdx(0)} $color={species.color.name} />
        <ToggleItem $icon={'bar-chart.svg'} onClick={() => setSectionIdx(1)} $color={species.color.name} />
        <ToggleIndicator $activeIdx={sectionIdx} $color={species.color.name} />
      </ToggleWrapper>

      <Wrapper $activeSection={sectionIdx}>
        {sectionIdx == 0 && (
          <SpiderGraph
            size={500}
            color={species.color.name}
            data={pokemon.stats.map(s => ({
              label: s.stat.name,
              value: calcStat(s.base_stat),
              originalValue: s.base_stat,
            }))}
          />
        )}
        {sectionIdx === 1 &&
          pokemon.stats.map(s => (
            <Row key={`stat-${s.stat.url}`}>
              <Label>{s.stat.name}</Label>
              <ProgressBar percent={calcStat(s.base_stat, true)} color={`var(--color-${species?.color.name})`} label={s.base_stat} />
            </Row>
          ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 500px;
`;

const ToggleWrapper = styled.div`
  --padding-block: 0.5rem;
  --padding-inline: 1rem;
  --icon-size: 2rem;
  --gap: 1rem;
  width: auto;
  display: flex;
  align-items: center;
  gap: var(--gap);
  position: relative;
  border-radius: 6px;
  padding-block: var(--padding-block);
  padding-inline: var(--padding-inline);
`;

const ToggleItem = styled.div<{ $icon: string; $color: string }>`
  width: var(--icon-size);
  height: var(--icon-size);
  mask: url('/icons/${props => props.$icon}');
  mask-size: cover;
  cursor: pointer;
  background-color: var(--color-${props => props.$color});
`;

const ToggleIndicator = styled.div<{ $activeIdx: number; $color: string }>`
  --pad: 0.8rem;
  width: calc(var(--icon-size) + var(--pad));
  height: calc(var(--icon-size) + var(--pad));
  border: 3px solid ${props => `var(--color-${props.$color})`};
  border-radius: 8px;
  position: absolute;
  left: calc(var(--padding-inline) - calc(var(--pad) / 2));
  top: calc(var(--padding-block) - calc(var(--pad) / 2));
  margin-left: calc(${props => props.$activeIdx} * calc(var(--icon-size) + var(--gap)));
  transition: margin-left 0.2s ease;
`;

const Wrapper = styled.div<{ $activeSection: number }>`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: ${props => (props.$activeSection === 0 ? '1fr' : 'auto 1fr')};
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  transform: rotateY(-30deg);
  transition: all 0.2s ease;

  &:hover {
    transform: rotateY(0);
  }
`;

const Row = styled.div`
  display: contents;
`;

const Label = styled.div`
  text-align: end;
  font-weight: bold;
  color: var(--accent);
`;
