import {
  favPokemonsCollection,
  pokemonsCollection,
} from "../mongoDB/mongoConnect";

import { Request, Response, router } from "../utlites/expressUtilites";

import { promiseHandler } from "../utlites/helpers";

export const pokemonsRoutes = router();

// Get num page to show to client and name query.
pokemonsRoutes.get(
  "/getPokemons/:page",
  async (req: Request, res: Response) => {
    const pageRes = Number(req.params.page);
    const queryName = req.query.name;
    const curser = pokemonsCollection
      .find(queryName ? { name: { $regex: `^${queryName}` } } : {})
      .limit(12)
      .skip((pageRes - 1) * 12);
    const [data, err] = await promiseHandler(curser.toArray());
    if (err) return res.status(400).json([]);
    return res.status(200).json(data);
  }
);

// Creates new favorite poekmons list .
pokemonsRoutes.post(
  "/saveFavoritePokemons",
  async (req: Request, res: Response) => {
    await favPokemonsCollection.deleteMany({});
    const [data, err] = await promiseHandler(
      favPokemonsCollection.insertMany(req.body)
    );

    if (err) return res.status(400).send("The data is not added");
    return res.status(200).send("The data is added successfully");
  }
);

// Get the favorite poekmons list from the database.
pokemonsRoutes.get(
  "/getFavoritePokemons",
  async (req: Request, res: Response) => {
    const curser = favPokemonsCollection.find({}).limit(100);
    const [data, err] = await promiseHandler(curser.toArray());

    if (err) return res.status(400).json([]);
    return res.status(200).json(data);
  }
);
