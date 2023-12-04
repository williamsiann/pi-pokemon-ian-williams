const axios = require('axios');
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

const allPokemons = async (name) => {
    try {
        // API
        const apiPokemons = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10');
        
        const apiPokemonDetails = await Promise.all(apiPokemons.data.results.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            const types = details.data.types.map(typeInfo => typeInfo.type.name);
            return {
                id: details.data.id,
                name: details.data.name,
                image: details.data.sprites.front_default,
                stroke: details.data.stats[1].base_stat,
                types: types
            };
        }));
        // DB
        let dbPokemons;
        if (name) {
            dbPokemons = await Pokemon.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    },
                },
                include: [{
                    model: Type,
                    attributes: ["id", "name"],
                }],
            });
        } else {
            dbPokemons = await Pokemon.findAll({
                include: [{
                    model: Type,
                    attributes: ["id", "name"],
                }],
            });
        }

        return [...apiPokemonDetails, ...dbPokemons];
    } catch (error) {
        throw new Error(`Error fetching Pokemon data: ${error.message}`);
    }
};

module.exports = { allPokemons };
