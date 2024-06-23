import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Stable reference to preserve memoization
const emptyArr = [] as const;

export const selectorPokeApiResults = createSelector(
  [(state: RootState) => state.pokeSlice.paginate?.results],
  results => results ?? (emptyArr as NonNullable<typeof results>),
);

export const selectorFindPokemon = createSelector([(state: RootState) => state.pokeSlice.pokemon, (_, id?: string) => id], (pokemon, id) =>
  id ? pokemon.get(id) : undefined,
);

export const selectorFindEvolutionChain = createSelector(
  [(state: RootState) => state.pokeSlice.evolutions, (_, id?: string) => id],
  (evolutions, id) => (id ? evolutions.get(id) : undefined),
);

export const selectorFindSpecies = createSelector([(state: RootState) => state.pokeSlice.species, (_, id?: string) => id], (species, id) =>
  id ? species.get(id) : undefined,
);
