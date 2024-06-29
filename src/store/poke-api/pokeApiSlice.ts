import { createSlice } from '@reduxjs/toolkit';
import type { Paginate, Pokemon, PokemonEvolutionChain, PokemonSpecies } from '../../common/types/poke-api/poke-api';
import * as client from '../../common/api/pokeAPI';
import axios from 'axios';
import { createAppAsyncThunk } from '../redux_utils';
import { extractPokeApiId } from '../../common/utils/utils';

export const fetchNextPokemonPage = createAppAsyncThunk<Paginate>(
  'pokemon/fetchNextPage',
  async (_, { getState }) => {
    if (getState().pokeSlice.paginate?.next) {
      const { data } = await axios.get(getState().pokeSlice.paginate!.next!);
      return data;
    } else if (!getState().pokeSlice.paginate) {
      return client.getPokemonList();
    } else {
      const pokemon: string[] = [];
      getState().pokeSlice.pokemon.forEach(p => pokemon.push(p.name));
      console.log(pokemon);
    }
  },
  {
    condition: (_, { getState }) => {
      const paginate = getState().pokeSlice.paginate;
      if (paginate && paginate.count === paginate?.results.length) {
        return false;
      }
    },
  },
);

export const fetchPokemonByName = createAppAsyncThunk<Pokemon, string>('pokemon/fetchPokemonByName', async (name, { dispatch }) => {
  const pokemon = await client.getPokemonByNameOrId(name);
  dispatch(fetchPokemonSpecies(pokemon.species.url));
  return pokemon;
});

export const fetchPokemonEvolution = createAppAsyncThunk<{ chain: PokemonEvolutionChain; id: string }, string>(
  'pokemon/fetchPokemonEvolution',
  async url => {
    const { data: chain } = await axios.get<PokemonEvolutionChain>(url);
    const id = extractPokeApiId(url)!;
    return { chain, id };
  },
  {
    condition: (id, { getState }) => !getState().pokeSlice.evolutions.has(id),
  },
);
export const fetchPokemonSpecies = createAppAsyncThunk<{ species: PokemonSpecies; id: string }, string>(
  'pokemon/fetchPokemonSpecies',
  async (url, { dispatch }) => {
    const { data: species } = await axios.get<PokemonSpecies>(url);
    const id = extractPokeApiId(url)!;
    dispatch(fetchPokemonEvolution(species.evolution_chain.url));
    return { species, id };
  },
  {
    condition: (id, { getState }) => !getState().pokeSlice.species.has(id),
  },
);

interface State {
  paginate?: Paginate;
  pokemon: Map<string, Pokemon>; // Pokemon name
  evolutions: Map<string, PokemonEvolutionChain>;
  species: Map<string, PokemonSpecies>; // Species id
}

const initialState: State = {
  pokemon: new Map(),
  evolutions: new Map(),
  species: new Map(),
};

const pokeApiSlice = createSlice({
  name: 'pokeApi',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNextPokemonPage.fulfilled, (state, action) => {
        const { payload } = action;
        if (!state.paginate) {
          state.paginate = payload;
          return;
        }

        // Limit to first 905 pokemon as no img assets after that
        const lastId = parseInt(extractPokeApiId(action.payload.results.at(-1)?.url)!);
        if (lastId >= 905) {
          const diff = lastId - 905;
          for (let i = diff; i > 0; i--) {
            payload.results.pop();
          }
          payload.next = undefined;
        }

        const p: Paginate = {
          ...payload,
          results: [...state.paginate.results, ...action.payload.results],
        };
        state.paginate = p;
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.pokemon.set(action.payload.name, action.payload);
      })
      .addCase(fetchPokemonEvolution.fulfilled, (state, action) => {
        state.evolutions.set(action.payload.id, action.payload.chain);
      })
      .addCase(fetchPokemonSpecies.fulfilled, (state, action) => {
        state.species.set(action.payload.id, action.payload.species);
      });
  },
});

export default pokeApiSlice.reducer;
