import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectorFindPokemon, selectorFindSpecies } from '../../store/poke-api/selectors';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPokemonById } from '../../store/poke-api/pokeApiSlice';
import { PokeDetails } from './components/PokeDetails';
import { PokeStats } from './components/PokeStats';

export const PokemonDetailLayout = (): React.ReactElement => {
  const { id } = useParams();
  const pokemon = useAppSelector(state => selectorFindPokemon(state, id));
  const species = useAppSelector(state => selectorFindSpecies(state, id));

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) return;
    // Pokemon should be in store
    // If visiting by direct url fetch anyway
    // Action will be rejected if pokemon already exists
    dispatch(fetchPokemonById(id));
  }, [id]);

  if (!pokemon || !id) return <></>;

  return (
    <Container>
      <Name>{pokemon.name.toUpperCase()}</Name>
      <DetailWrap>
        <PokeDetails pokemon={pokemon} />
        {/*<Img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />*/}
        <Img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${leftPadId(id)}.png`} alt={pokemon.name} />
        <PokeStats pokemon={pokemon} />
      </DetailWrap>
    </Container>
  );
};

function leftPadId(id: string) {
  if (id.length < 3) return leftPadId(`0${id}`);
  return id;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: var(--bg-1);
`;

const Name = styled.div`
  text-transform: capitalize;
  font-size: 2.2rem;
`;

const DetailWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(250px, 500px) 1fr;
`;

const Img = styled.img`
  width: 100%;
`;
