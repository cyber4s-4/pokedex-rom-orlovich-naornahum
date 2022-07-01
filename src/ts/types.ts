/* eslint-disable no-unused-vars */
import { PokemonsData } from "./PokemonsData";

export interface IPokemonApi {
  id: number;
  name: string;
  height: string;
  weight: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}
export interface IPokemon {
  id: string;
  name: string;
  type: string[];
  weight: string;
  height: string;
  img: string;
}

export type TPokemonsData = InstanceType<typeof PokemonsData>;
export interface IPokemonsListRenderOptions {
  query?: string;
  start?: 0;
  end?: 20;
}
export type TUpdatePokemonsList = (
  pokemonsData: IPokemon[],
  parentEl: string,
  options?: IPokemonsListRenderOptions
) => void;
