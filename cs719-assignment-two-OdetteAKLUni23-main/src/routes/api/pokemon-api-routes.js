const express = require("express");
const { getPokemonByDexNumber } = require("../../db/pokemon-db");
const router = express.Router();

// TODO Add an API endpoint here.
// When sending a GET request for /:dexNumber (:dexNumber is a path param),
// return the JSON representation of the correct Pokemon, or return a 404 error
// if that Pokemon is not found.

router.get("/:dexNumber", function (req, res) {
    const dex = req.path.substring(1);
    const pokemon = getPokemonByDexNumber(dex);
    if (pokemon){
    res.json(pokemon);}
    else{
    res.sendStatus(404);}
  });

module.exports = router;
