import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PokemonDetailLayout } from './pages/pokemon-detail/PokemonDetailLayout';
import { Spinner } from './common/components/Spinner';
import styled from 'styled-components';
import { HomeLayout } from './pages/home/HomeLayout';
import { CandidateLayout } from './pages/candiate/CandidateLayout';
import { Td2Layout } from './pages/td2/Td2Layout';
import { ShinbaramLayout } from './pages/shimbaram/ShinbaramLayout';
import { HomeContent } from './pages/home/components/HomeContent';
import { PokeApiContent } from './pages/pokeAPI/components/PokeApiContent';

export const appRoutes = {
  resume: {
    path: '/resume',
    nav: () => '/resume',
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
  pokeAPI: {
    path: '/pokeAPI',
    nav: () => '/pokeAPI',
    children: {
      detail: {
        path: ':name',
        nav: (name: string) => `/pokeAPI/${name}`,
      },
    },
  },
};

export const AppRoutes = (): React.ReactElement => {
  const LazyResume = lazy(() => import('./pages/resume/ResumeLayout'));
  const LazyPokeApi = lazy(() => import('./pages/pokeAPI/PokeAPILayout'));

  return (
    <Routes>
      <Route path={'/'} element={<HomeLayout />}>
        <Route element={<HomeContent />} index />
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
        >
          <Route path={appRoutes.pokeAPI.path} element={<PokeApiContent />} index />
          <Route path={appRoutes.pokeAPI.children.detail.path} element={<PokemonDetailLayout />} />
        </Route>

        <Route path={appRoutes.candidate.path} element={<CandidateLayout />} />
        <Route path={appRoutes.td2.path} element={<Td2Layout />} />
        <Route path={appRoutes.shinbaram.path} element={<ShinbaramLayout />} />
      </Route>
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
