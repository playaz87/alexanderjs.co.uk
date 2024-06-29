import React, { useEffect, useState } from 'react';
import type { Pokemon, PokemonEvolution, PokeType, Resource } from '../../../common/types/poke-api/poke-api';
import styled from 'styled-components';
import { PokeEvolutionTag } from './PokeEvolutionTag';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { selectorFindEvolutionChain, selectorFindSpecies } from '../../../store/poke-api/selectors';
import { extractPokemonId } from '../../../common/utils/utils';
import { fetchPokemonByName } from '../../../store/poke-api/pokeApiSlice';

interface Props {
  pokemon: Pokemon;
}

export const PokeDetails: React.FC<Props> = ({ pokemon }) => {
  const [evolutions, setEvolutions] = useState<Resource[]>([]);
  const dispatch = useAppDispatch();
  const species = useAppSelector(state => selectorFindSpecies(state, pokemon.id.toString(10)));
  const evolution = useAppSelector(state => selectorFindEvolutionChain(state, extractPokemonId(species?.evolution_chain.url ?? '')));

  useEffect(() => {
    if (!evolution) return;
    console.log(evolution);
    setEvolutions(recurseEvolutionChain(evolution.chain, []));
  }, [evolution]);

  const recurseEvolutionChain = (evol: PokemonEvolution, arr: Resource[]) => {
    if (!evol.evolves_to?.length) return [...arr, evol.species];
    return recurseEvolutionChain(evol.evolves_to[0], [...arr, evol.species]);
  };

  useEffect(() => {
    evolutions.forEach(({ name }) => dispatch(fetchPokemonByName(name)));
  }, [evolutions]);

  return (
    <Container>
      <Wrapper>
        <Row>
          <Label>ID</Label>
          <Value>{pokemon.id}</Value>
        </Row>
        <Row>
          <Label>Height</Label>
          <Value>{pokemon.height * 10}cm</Value>
        </Row>

        <Row>
          <Label>Type</Label>
          <Value>
            {pokemon.types.map(({ type }) => (
              <TypeTag key={type.name} $type={type.name}>
                {type.name}
              </TypeTag>
            ))}
          </Value>
        </Row>

        <Row>
          <Label>Abilities</Label>
          <Value>
            {pokemon.abilities.map(ability => (
              <Ability key={ability.ability.url} $color={species?.color.name}>
                {ability.ability.name}
              </Ability>
            ))}
          </Value>
        </Row>

        <Row>
          <Label>Evolution</Label>
          <Value>
            {evolutions.map(evol => (
              <PokeEvolutionTag key={evol.url} pokemonId={extractPokemonId(evol.url)!} />
            ))}
          </Value>
        </Row>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  perspective: 500px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  transform: rotateY(30deg);
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
const Value = styled.div`
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TypeTag = styled.div<{ $type: PokeType }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 1rem;
  background-color: var(--${props => props.$type});
  border-radius: 6px;
  text-transform: capitalize;
  color: white;
  user-select: none;

  &:after {
    content: '';
    height: 1rem;
    width: 1rem;
    mask: url('/icons/${props => props.$type}.png');
    mask-size: cover;
    background-color: white;
  }
`;

const Ability = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  padding: 0.3rem 1rem;
  border-radius: 6px;
  text-transform: capitalize;
  color: white;
  user-select: none;
  font-size: 1rem;
  background-color: var(--color-${props => props.$color}, var(--color-default));
`;
