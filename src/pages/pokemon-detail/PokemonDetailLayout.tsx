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
import { BackArrow } from '../../common/components/BackArrow';
import { appRoutes } from '../../AppRoutes';
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
      <Header $color={species?.color.name}>
        <BackArrow onClick={() => navigate(appRoutes.pokeAPI.nav())} />
        <div>PokeAPI</div>
      </Header>
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
  height: 100vh;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: 100svh;
  display: grid;
  grid-template-rows: auto 1fr;
  font-family: 'Pokemon Hollow', sans-serif;
`;

const Header = styled.nav<{ $color: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--color-${props => props.$color});

  > div:last-of-type {
    background-color: yellow;
    background-clip: text;
    -webkit-text-fill-color: yellow;
    font-size: 2.6rem;
  }
`;

const Back = styled.div``;

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
  grid-template-columns: 1fr minmax(250px, 500px) 1fr;
`;

const Img = styled.img`
  width: 100%;
`;
