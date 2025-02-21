const express = require("express");
const { getAllPokemon, getPokemonByDexNumber } = require("../db/pokemon-db");
const router = express.Router();

router.get("/", function (req, res) {
  // TODO Add necessary data to res.locals before rendering the "home" page.
  res.locals.pokemonlist = getAllPokemon();
  const defaultpokemon = getPokemonByDexNumber(116);
  res.locals.image = defaultpokemon.imageUrl;
  res.locals.dexNumber = defaultpokemon.dexNumber;
  res.locals.name = defaultpokemon.name;
  res.locals.types = defaultpokemon.types;
  res.locals.dexEntry = defaultpokemon.dexEntry
  res.render("home");
});

module.exports = router;
