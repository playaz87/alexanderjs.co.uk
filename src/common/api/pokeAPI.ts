import axios from 'axios';
import type { Paginate, Pokemon } from '../types/poke-api/poke-api';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const getPokemonList = async (): Promise<Paginate> => {
  const { data } = await instance.get('/pokemon');
  return data;
};

export const getPokemonByNameOrId = async (id: string): Promise<Pokemon> => {
  const { data } = await instance.get(`/pokemon/${id}`);
  return data;
};
