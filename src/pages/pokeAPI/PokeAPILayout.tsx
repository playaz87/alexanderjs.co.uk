import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectorHasMoreResults, selectorPokeApiResults } from '../../store/poke-api/selectors';
import { PokemonOverview } from './components/PokemonOverview';
import { fetchNextPokemonPage } from '../../store/poke-api/pokeApiSlice';
import { usePokeFont } from '../../common/hooks/usePokeFont';
import { useInfiniteScroll } from '../../common/hooks/useInfiniteScroll';

const PokeApiLayout = (): React.ReactElement => {
  const results = useAppSelector(selectorPokeApiResults);
  const hasMoreResults = useAppSelector(selectorHasMoreResults);
  const dispatch = useAppDispatch();
  const container = useRef<HTMLDivElement>(null);
  usePokeFont();

  useEffect(() => {
    dispatch(fetchNextPokemonPage());
  }, []);

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

export default PokeApiLayout;

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
