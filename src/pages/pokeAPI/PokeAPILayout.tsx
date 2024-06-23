import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchNextPokemonPage } from '../../store/poke-api/pokeApiSlice';
import { selectorPokeApiResults } from '../../store/poke-api/selectors';
import { PokemonOverview } from './components/PokemonOverview';

export const PokeApiLayout = (): React.ReactElement => {
  const results = useAppSelector(selectorPokeApiResults);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNextPokemonPage());
  }, []);

  return (
    <Container>
      {results.map(r => (
        <PokemonOverview key={r.name} resource={r} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 20vw));
  grid-auto-rows: min-content;
  justify-content: center;
  gap: 2rem;
  column-gap: 3%;
  background-color: var(--bg-1);
`;
