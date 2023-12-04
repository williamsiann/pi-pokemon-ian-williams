const {allPokemons} = require("../controllers/getAllPokemonsController.js");
const {allTypes} = require("../controllers/getAlltypesController.js");
const {pokemonId} = require("../controllers/getPokemonIdController.js");
const {pokemonByName }= require("../controllers/getPokemonName.js");


const getAllPokemons = async (req, res) => {
    try {
        const pokemons = await allPokemons();
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(400).json({ error: `Error al obtener todos los pokemons: ${error.message}` });
    }
}

const getAllTypes = async (req, res) => {
    try {
        const types = await allTypes();
        res.status(200).send(types);
    } catch (error) {
        res.status(400).send({ error: `Error al obtener Todos los TypePokemons: ${error.message}` });
    }
};

const getIdPokemon = async (req, res) => {
    const { id } = req.params;

    const source = isNaN(id) ? "Db" : "Api";

    try {
        const pokemon = await pokemonId(id, source);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: `Error al obtener el Nombre del id: ${error.message}` });
    }
};


const getNamePokemon = async (req, res) => {

    const { name } = req.query;

    try {
        const pokemon = await pokemonByName(name);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: `Error al obtener el Nombre del Pokémon: ${error.message}` });
    }
};



module.exports = {
    getAllTypes,
    getAllPokemons,
    getNamePokemon,
    getIdPokemon
};
