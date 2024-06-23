export interface Paginate {
  count: number;
  next?: string;
  previous?: string;
  results: Resource[];
}

export interface Resource {
  name: string;
  url: string;
}

export interface TypedResource<T> {
  name: T;
  url: string;
}

export type PokeType =
  | 'grass'
  | 'poison'
  | 'water'
  | 'fire'
  | 'bug'
  | 'normal'
  | 'electric'
  | 'fairy'
  | 'ground'
  | 'fighting'
  | 'rock'
  | 'ice'
  | 'dragon'
  | 'psychic'
  | 'dark'
  | 'ghost'
  | 'steel';

export interface Pokemon {
  id: number;
  name: string;
  abilities: PokemonAbility[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: Resource[];
  height: number;
  is_default: boolean;
  location_area_encounters: string;
  species: Resource;
  types: { type: TypedResource<PokeType> }[];
  sprites: {
    other: any; // Invalid json
  };
  stats: {
    base_stat: number;
    stat: Resource;
  }[];
}

interface PokemonAbility {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonEvolution {
  species: Resource;
  evolves_to?: PokemonEvolution[];
}

export interface PokemonEvolutionChain {
  chain: PokemonEvolution;
}

export interface PokemonSpecies {
  evolves_from_species?: Resource;
  evolution_chain: Resource;
  color: Resource;
}
