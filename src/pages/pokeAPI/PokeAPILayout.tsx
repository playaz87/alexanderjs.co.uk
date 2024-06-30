import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchNextPokemonPage } from '../../store/poke-api/pokeApiSlice';
import { usePokeFont } from '../../common/hooks/usePokeFont';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { BackArrow } from '../../common/components/BackArrow';
import styled from 'styled-components';
import { selectorFindPokemon, selectorFindSpecies } from '../../store/poke-api/selectors';
import { extractPokeApiId } from '../../common/utils/utils';

const PokeApiLayout = (): React.ReactElement => {
  const { name } = useParams();
  const pokemon = useAppSelector(state => selectorFindPokemon(state, name));
  const species = useAppSelector(state => selectorFindSpecies(state, extractPokeApiId(pokemon?.species.url)));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  usePokeFont();

  useEffect(() => {
    dispatch(fetchNextPokemonPage());
  }, []);

  return (
    <Container>
      <Header $color={species?.color.name}>
        <BackArrow />
        <div>PokeAPI</div>
      </Header>
      <Outlet />
    </Container>
  );
};

export default PokeApiLayout;

const Container = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  max-height: 100vh;
  max-height: 100svh;
  background-color: var(--bg-1);
  overflow: auto;
`;

const Header = styled.nav<{ $color?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--color-${props => props.$color}, var(--color-red));
  font-family: 'Pokemon Hollow', sans-serif;

  > div:last-of-type {
    background-color: yellow;
    background-clip: text;
    -webkit-text-fill-color: yellow;
    font-size: 2.6rem;
  }
`;
