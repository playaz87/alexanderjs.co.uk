import axios from 'axios';
import type { Paginate, Pokemon, PokemonEvolutionChain, PokemonSpecies } from '../types/poke-api/poke-api';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const getPokemonList = async (): Promise<Paginate> => {
  const { data } = await instance.get('/pokemon');
  return data;
};

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  const { data } = await instance.get(`/pokemon/${id}`);
  return data;
};

export const getPokemonEvolutionChain = async (id: string | number): Promise<PokemonEvolutionChain> => {
  const { data } = await instance.get(`/evolution-chain/${id}`);
  return data;
};

export const getPokemonSpecies = async (id: string | number): Promise<PokemonSpecies> => {
  const { data } = await instance.get(`/pokemon-species/${id}`);
  return data;
};
