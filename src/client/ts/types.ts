/* eslint-disable no-unused-vars */
import { InewPokemon } from "../../server/types";
import { PokemonsDataClient } from "./PokemonsDataClient";

export type { InewPokemon };
export type TPokemonsDataClient = InstanceType<typeof PokemonsDataClient>;
export interface InewPokemonsListRenderOptions {
  search?: boolean;
  query?: string;
  page?: number;
}
export type TUpdatePokemonsList = (
  parentEl: string,
  pokemonsData: TPokemonsDataClient,
  options?: InewPokemonsListRenderOptions
) => void;

export interface FavoritePokemon {
  id: string;
  name: string;
  img: string[];
}

export type UpdateFavoritePokemonListFun = (
  // favoritePokemonArr: FavoritePokemon[],
  parentQuery: string,
  pokemonsData: TPokemonsDataClient
) => void;
