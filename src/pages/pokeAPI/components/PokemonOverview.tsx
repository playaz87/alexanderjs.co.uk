import React, { useEffect, useRef } from 'react';
import type { Resource } from '../../../common/types/poke-api/poke-api';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { selectorFindPokemon } from '../../../store/poke-api/selectors';
import { extractPokemonId } from '../../../common/utils/utils';
import { fetchPokemonByUrl } from '../../../store/poke-api/pokeApiSlice';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';

interface Props {
  resource: Resource;
}

export const PokemonOverview: React.FC<Props> = ({ resource }) => {
  const id = useRef(extractPokemonId(resource.url));
  const pokemon = useAppSelector(state => selectorFindPokemon(state, id.current));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPokemonByUrl(resource.url));
  }, []);

  if (!pokemon) return null;

  return (
    <Container onClick={() => navigate(appRoutes.pokemonDetail.nav(id.current!))}>
      <Img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      <div>{resource.name}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--accent);
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.2rem;
  color: wheat;
  text-transform: capitalize;
  cursor: pointer;
  transition: scale 0.3s;

  &:hover {
    scale: 1.2;
  }
`;
const Img = styled.img`
  width: 90%;
  aspect-ratio: 1 /1;
`;
