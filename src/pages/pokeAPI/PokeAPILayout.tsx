import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectorPokeApiResults } from '../../store/poke-api/selectors';
import { PokemonOverview } from './components/PokemonOverview';
import { fetchNextPokemonPage } from '../../store/poke-api/pokeApiSlice';
import { usePokeFont } from '../../common/hooks/usePokeFont';

const PokeApiLayout = (): React.ReactElement => {
  const results = useAppSelector(selectorPokeApiResults);
  const dispatch = useAppDispatch();
  const container = useRef<HTMLDivElement>(null);
  usePokeFont();

  useEffect(() => {
    dispatch(fetchNextPokemonPage());
  }, []);

  // useInfiniteScroll(container, () => dispatch(fetchNextPokemonPage()));

  return (
    <Container ref={container}>
      {results.map(r => (
        <PokemonOverview key={r.name} resource={r} />
      ))}
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
  grid-template-columns: repeat(auto-fill, minmax(10rem, 20vw));
  grid-auto-rows: min-content;
  justify-content: center;
  gap: 2rem;
  column-gap: 3%;
  background-color: var(--bg-1);
  padding: 2rem 1rem;
  overflow: auto;
`;
