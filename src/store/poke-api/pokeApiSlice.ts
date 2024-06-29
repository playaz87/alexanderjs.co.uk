import { createSlice } from '@reduxjs/toolkit';
import type { Paginate, Pokemon, PokemonEvolutionChain, PokemonSpecies } from '../../common/types/poke-api/poke-api';
import * as client from '../../common/api/pokeAPI';
import { getPokemonById } from '../../common/api/pokeAPI';
import axios from 'axios';
import { createAppAsyncThunk } from '../redux_utils';
import { extractPokemonId } from '../../common/utils/utils';

export const fetchNextPokemonPage = createAppAsyncThunk<Paginate>(
  'pokemon/fetchNextPage',
  async (_, { getState }) => {
    if (getState().pokeSlice.paginate?.next) {
      const { data } = await axios.get(getState().pokeSlice.paginate!.next!);
      return data;
    } else {
      return client.getPokemonList();
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

export const fetchPokemonByUrl = createAppAsyncThunk<{ pokemon: Pokemon; id: string }, string>(
  'pokemon/fetchPokemon',
  async url => {
    const { data } = await axios.get(url);
    const id = extractPokemonId(url);

    if (!id || !data) {
      return Promise.reject();
    }

    return { pokemon: data, id };
  },
  {
    condition: (url, { getState }) => {
      const id = extractPokemonId(url);
      return id ? !getState().pokeSlice.pokemon.has(id) : true;
    },
  },
);

export const fetchPokemonById = createAppAsyncThunk<{ pokemon: Pokemon; id: string }, string>(
  'pokemon/fetchPokemonById',
  async (id, { dispatch }) => {
    dispatch(fetchPokemonSpecies(id));
    const pokemon = await client.getPokemonById(id);
    return { pokemon, id };
  },
  {
    condition: (id, { getState }) => {
      return !getState().pokeSlice.pokemon.has(id);
    },
  },
);

export const fetchPokemonByName = createAppAsyncThunk<Pokemon, string>('pokemon/fetchPokemonByName', async (name, { dispatch }) => {
  // api accepts name or id
  const pokemon = await getPokemonById(name);
  dispatch(fetchPokemonSpecies(pokemon.id.toString(10)));
  return pokemon;
});

export const fetchPokemonEvolution = createAppAsyncThunk<{ chain: PokemonEvolutionChain; id: string }, string>(
  'pokemon/fetchPokemonEvolution',
  async id => {
    const chain = await client.getPokemonEvolutionChain(id);
    return { chain, id };
  },
  {
    condition: (id, { getState }) => !getState().pokeSlice.evolutions.has(id),
  },
);
export const fetchPokemonSpecies = createAppAsyncThunk<{ species: PokemonSpecies; id: string }, string>(
  'pokemon/fetchPokemonSpecies',
  async (id, { dispatch }) => {
    const species = await client.getPokemonSpecies(id);
    dispatch(fetchPokemonEvolution(extractPokemonId(species.evolution_chain.url)!));
    return { species, id };
  },
  {
    condition: (id, { getState }) => !getState().pokeSlice.species.has(id),
  },
);

interface State {
  paginate?: Paginate;
  pokemon: Map<string, Pokemon>;
  evolutions: Map<string, PokemonEvolutionChain>;
  species: Map<string, PokemonSpecies>;
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
        if (!state.paginate) {
          state.paginate = action.payload;
        } else {
          const p: Paginate = {
            ...action.payload,
            results: [...state.paginate.results, ...action.payload.results],
          };
          state.paginate = p;
        }
      })
      .addCase(fetchPokemonByUrl.fulfilled, (state, action) => {
        state.pokemon.set(action.payload.id, action.payload.pokemon);
      })
      .addCase(fetchPokemonById.fulfilled, (state, action) => {
        state.pokemon.set(action.payload.id, action.payload.pokemon);
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.pokemon.set(action.payload.id.toString(10), action.payload);
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
