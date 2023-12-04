const { allPokemons } = require("../controllers/getAllPokemonsController.js");

const pokemonByName = async (name) => {
    try {
        
        // Obtén todos los Pokémon o filtra por nombre si se proporciona
        const pokemonsFilterName = await allPokemons(name);

        // Filtra los Pokémon por nombre de manera insensible a mayúsculas/minúsculas y de forma exacta
        const filteredPokemons = pokemonsFilterName.filter(pokemon =>
            pokemon.name.toLowerCase() === name.toLowerCase()
        );

        if (filteredPokemons.length > 0) {
            return filteredPokemons;
        }

        throw new Error(`No se encontró ningún Pokémon${name ? ` llamado '${name}'` : ''}`);

    } catch (error) {
        console.error("Error:", error);
        throw new Error("Ocurrió un error al buscar el Pokémon por nombre.");
    }
};

module.exports = { pokemonByName };
