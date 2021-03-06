import { PokemonsDataServer } from "./PokemonsDataServer";

export type TPokemonsDataServer = InstanceType<typeof PokemonsDataServer>;
export interface InewPokemonApi {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    //  front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface IbasicPokemon {
  id: string;
  name: string;
  type: string[];
  weight: number;
  height: number;
}
export interface IoldPokemon extends IbasicPokemon {
  img: string;
}

export interface InewPokemon extends IbasicPokemon {
  img: string[];
}

export interface FieldName {
  nameField: string;
  type: string;
  constraint?: string;
}

export interface OptionsCreateTable {
  existTable?: boolean;
  drop?: boolean;
}
