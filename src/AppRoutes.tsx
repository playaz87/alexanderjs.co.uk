import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PokemonDetailLayout } from './pages/pokemon-detail/PokemonDetailLayout';
import { Spinner } from './common/components/Spinner';
import styled from 'styled-components';
import { HomeLayout } from './pages/home/HomeLayout';
import { CandidateLayout } from './pages/candiate/CandidateLayout';
import { Td2Layout } from './pages/td2/Td2Layout';
import { ShinbaramLayout } from './pages/shimbaram/ShinbaramLayout';

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
  candidate: {
    path: '/candidate',
    nav: () => '/candidate',
  },
  td2: {
    path: '/td2',
    nav: () => '/td2',
  },
  shinbaram: {
    path: '/shinbaram',
    nav: () => '/shinbaram',
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
      <Route path={appRoutes.candidate.path} element={<CandidateLayout />} />
      <Route path={appRoutes.td2.path} element={<Td2Layout />} />
      <Route path={appRoutes.shinbaram.path} element={<ShinbaramLayout />} />
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
