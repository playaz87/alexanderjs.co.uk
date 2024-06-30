import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectorFindPokemon, selectorFindSpecies } from '../../store/poke-api/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { PokeDetails } from './components/PokeDetails';
import { PokeStats } from './components/PokeStats';
import { extractPokeApiId, leftPadId } from '../../common/utils/utils';
import { fetchPokemonByName } from '../../store/poke-api/pokeApiSlice';
import { usePokeFont } from '../../common/hooks/usePokeFont';
import { Spinner } from '../../common/components/Spinner';

export const PokemonDetailLayout = (): React.ReactElement => {
  const { name } = useParams();
  const pokemon = useAppSelector(state => selectorFindPokemon(state, name));
  const species = useAppSelector(state => selectorFindSpecies(state, extractPokeApiId(pokemon?.species.url)));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  usePokeFont();

  useEffect(() => {
    if (!name) return;
    // Pokemon should be in store
    // If visiting by direct url fetch anyway
    // Action will be rejected if pokemon already exists
    dispatch(fetchPokemonByName(name));
  }, [name]);

  if (!pokemon || !species)
    return (
      <SpinnerContainer>
        <Spinner $size={'10rem'} />
      </SpinnerContainer>
    );

  return (
    <Container>
      <Wrapper>
        <Name $color={species?.color.name}>{pokemon.name.toUpperCase()}</Name>
        <DetailWrap>
          <PokeDetails pokemon={pokemon} />
          {/*<Img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />*/}
          <Img
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${leftPadId(pokemon.id.toString(10))}.png`}
            alt={pokemon.name}
          />
          <PokeStats pokemon={pokemon} />
        </DetailWrap>
      </Wrapper>
    </Container>
  );
};

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  font-family: 'Pokemon Hollow', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: var(--bg-1);
  font-family: Roboto Slab;
`;

const Name = styled.div<{ $color: string }>`
  text-transform: capitalize;
  font-size: 2.2rem;
  font-family: 'Pokemon Hollow', sans-serif;
  font-weight: 800;
  -webkit-text-fill-color: var(--color-${props => props.$color});
`;

const DetailWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(20rem, 1fr) minmax(16rem, 32rem) minmax(20rem, 1fr);
  align-items: center;

  @media screen and (max-width: 60rem) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 1rem;
  }
`;

const Img = styled.img`
  width: 100%;

  @media screen and (max-width: 60rem) {
    max-width: 50vw;
  }
`;
