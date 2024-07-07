import React, { useEffect, useRef } from 'react';
import { useAppSelector } from '../../store/store';
import { usePokeFont } from '../../common/hooks/usePokeFont';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { BackArrow } from '../../common/components/BackArrow';
import styled from 'styled-components';
import { selectorFindPokemon, selectorFindSpecies } from '../../store/poke-api/selectors';
import { extractPokeApiId } from '../../common/utils/utils';
import Search, { type SearchHandle } from '../../common/components/Search';
import { ALL_POKEMON_NAMES } from './all_pokemon_names';
import { Body } from '../../common/styled-components/styled_text';
import { appRoutes } from '../../AppRoutes';

const PokeApiLayout = (): React.ReactElement => {
  const { name } = useParams();
  const pokemon = useAppSelector(state => selectorFindPokemon(state, name));
  const species = useAppSelector(state => selectorFindSpecies(state, extractPokeApiId(pokemon?.species.url)));
  const navigate = useNavigate();
  const searchRef = useRef<SearchHandle>(null);
  usePokeFont();

  useEffect(() => {
    if (name !== searchRef.current?.getTerm()) {
      searchRef.current?.reset();
    }
    searchRef.current?.close();
  }, [name]);

  return (
    <Container>
      <Header $color={species?.color.name}>
        <BackArrow />
        <Search
          ref={searchRef}
          data={ALL_POKEMON_NAMES.map(name => ({ id: name, name }))}
          renderer={({ name }) => (
            <Item>
              <Body $size={'s'}>{name}</Body>
            </Item>
          )}
          searchKeys={['name']}
          selectKey={'name'}
          strategy={'fixed'}
          onSelect={({ name }) => navigate(appRoutes.pokeAPI.children.detail.nav(name))}
          placeholder={'Search...'}
        />
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
  overflow: hidden;
`;

const Item = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
`;

const Header = styled.nav<{ $color?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: var(--color-${props => props.$color}, var(--color-red));
  font-family: 'Pokemon Hollow', sans-serif;

  > div:last-of-type {
    background-color: yellow;
    background-clip: text;
    -webkit-text-fill-color: yellow;
    font-size: 2.6rem;

    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
  }
`;
