const {
    getAllTypes,
    getAllPokemons,
    getNamePokemon,
    getIdPokemon
} = require("../handlers/getHandler");

const {postNewPokemon} = require("../handlers/postHandler");

const { Router } = require("express");
const router = Router();



router.get("/types", getAllTypes);
router.get("/pokemon", getAllPokemons);
router.get("/pokemon/name", getNamePokemon);
router.get("/pokemon/:id", getIdPokemon);



router.post("/pokemon", postNewPokemon);





module.exports = router;