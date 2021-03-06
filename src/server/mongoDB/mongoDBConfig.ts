import { MongoClient, ServerApiVersion } from "mongodb";

const LOCAL_MONGODB_URL = "mongodb://127.0.0.1:27017";
export const URL_CONNECTION = process.env.MONGO_DB_URL || LOCAL_MONGODB_URL;
// Creates mongoDB object
export const clientDB = new MongoClient(URL_CONNECTION, {
  serverApi: ServerApiVersion.v1,
});

// Creates db refenrence and collections.
export const dbPokemons = clientDB.db("pokemonsDB");
export const pokemonsCollection = dbPokemons.collection("pokemons");
export const favPokemonsCollection = dbPokemons.collection("favPokemons");
