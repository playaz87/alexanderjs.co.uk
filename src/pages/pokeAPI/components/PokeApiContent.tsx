import React, { useRef } from 'react';
import { PokemonOverview } from './PokemonOverview';
import styled from 'styled-components';
import { useInfiniteScroll } from '../../../common/hooks/useInfiniteScroll';
import { fetchNextPokemonPage } from '../../../store/poke-api/pokeApiSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { selectorHasMoreResults, selectorPokeApiResults } from '../../../store/poke-api/selectors';

export const PokeApiContent = (): React.ReactElement => {
  const results = useAppSelector(selectorPokeApiResults);
  const hasMoreResults = useAppSelector(selectorHasMoreResults);
  const dispatch = useAppDispatch();
  const container = useRef<HTMLDivElement>(null);
  const target = useInfiniteScroll(container, () => dispatch(fetchNextPokemonPage()), !hasMoreResults);
  return (
    <Container ref={container}>
      {results.map(r => (
        <PokemonOverview key={r.name} resource={r} />
      ))}
      {target}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  max-height: 100vh;
  max-height: 100svh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(10rem, 100%), 10vw));
  grid-auto-rows: min-content;
  justify-content: center;
  gap: 2rem;
  column-gap: 3%;
  background-color: var(--bg-1);
  padding: 2rem 1rem;
  overflow: auto;
  container-type: inline-size;
`;
