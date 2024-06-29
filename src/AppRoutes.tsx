import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PokemonDetailLayout } from './pages/pokemon-detail/PokemonDetailLayout';
import { Spinner } from './common/components/Spinner';
import styled from 'styled-components';
import { HomeLayout } from './pages/home/HomeLayout';

export const appRoutes = {
  home: {
    path: '/home',
    nav: () => '/home',
  },
  resume: {
    path: '/resume',
    nav: () => '/resume',
  },
  pokeAPI: {
    path: '/pokeAPI',
    nav: () => '/pokeAPI',
  },
  pokemonDetail: {
    path: '/pokemon-detail/:name',
    nav: (name: string) => `/pokemon-detail/${name}`,
  },
};

export const AppRoutes = (): React.ReactElement => {
  const LazyResume = lazy(() => import('./pages/resume/ResumeLayout'));
  const LazyPokeApi = lazy(() => import('./pages/pokeAPI/PokeAPILayout'));

  return (
    <Routes>
      <Route path={appRoutes.home.path} element={<HomeLayout />} />
      <Route
        path={appRoutes.resume.path}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <LazyResume />
          </Suspense>
        }
      />
      <Route
        path={appRoutes.pokeAPI.path}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <LazyPokeApi />
          </Suspense>
        }
      />
      <Route path={appRoutes.pokemonDetail.path} element={<PokemonDetailLayout />} />
      <Route path={'/'} element={<HomeLayout />} />
    </Routes>
  );
};

export const SuspenseFallback: React.FC = () => {
  return (
    <Container>
      <Spinner $size={'8rem'} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
