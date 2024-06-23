import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ResumeLayout } from './pages/resume/ResumeLayout';
import { PokeApiLayout } from './pages/pokeAPI/PokeAPILayout';
import { PokemonDetailLayout } from './pages/pokemon-detail/PokemonDetailLayout';

export const appRoutes = {
  resume: {
    path: '/resume',
    nav: () => '/resume',
  },
  pokeAPI: {
    path: '/pokeAPI',
    nav: () => '/pokeAPI',
  },
  pokemonDetail: {
    path: '/pokemon-detail/:id',
    nav: (id: string) => `/pokemon-detail/${id}`,
  },
};

export const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={appRoutes.resume.path} element={<ResumeLayout />} />
      <Route path={appRoutes.pokeAPI.path} element={<PokeApiLayout />} />
      <Route path={appRoutes.pokemonDetail.path} element={<PokemonDetailLayout />} />
    </Routes>
  );
};
