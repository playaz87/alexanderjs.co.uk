import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { selectorFindPokemon } from '../../../store/poke-api/selectors';
import { fetchPokemonById } from '../../../store/poke-api/pokeApiSlice';
import { appRoutes } from '../../../AppRoutes';
import type { PokeType, TypedResource } from '../../../common/types/poke-api/poke-api';

interface Props {
  pokemonId: string;
}

export const PokeEvolutionTag: React.FC<Props> = ({ pokemonId }) => {
  const pokemon = useAppSelector(state => selectorFindPokemon(state, pokemonId));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPokemonById(pokemonId));
  }, []);

  if (!pokemon) return null;

  return (
    <TypeTag $gradient={mapTypesToGradient(pokemon.types)} onClick={() => navigate(appRoutes.pokemonDetail.nav(pokemon.id.toString(10)))}>
      {pokemon.name}
      {pokemon.types.map(t => (
        <TypeIcon key={t.type.name} $type={t.type.name} />
      ))}
    </TypeTag>
  );
};

function mapTypesToGradient(types: { type: TypedResource<PokeType> }[]) {
  const vars = types.map(t => `var(--${t.type.name})`);

  // If only one type, duplicate the css var so gradients has start and end vals
  if (vars.length === 1) {
    vars.push(vars[0]);
  }
  return `linear-gradient(to right, ${vars.join(', ')})`;
}

const TypeTag = styled.button<{ $gradient: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  text-transform: capitalize;
  color: white;
  user-select: none;
  border: none;
  outline: none;
  background-image: ${props => props.$gradient};
`;

const TypeIcon = styled.div<{ $type: PokeType }>`
  height: 1rem;
  width: 1rem;
  mask: url('/icons/${props => props.$type}.png');
  mask-size: cover;
  background-color: white;

  &:not(:first-of-type) {
    margin-left: -0.5rem;
  }
`;