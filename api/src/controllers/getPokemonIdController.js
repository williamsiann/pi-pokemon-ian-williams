const axios = require("axios");
const { Pokemon, Type } = require("../db");
const {cleanData, cleanResponse} = require("../functionsRecycled/cleanDate")

const pokemonId = async (id, source) => {

if (source === "Api") {
    const apiResponse = (
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    ).data;
    const apiRes = cleanData(apiResponse);
    return apiRes;
}else if(source === 'Db') {
    const bddResponse = await Pokemon.findOne({
        where: { id: id },
        include: {
        model: Type,
        attributes: ["id", "name"],
        },
    });
    const res = bddResponse.dataValues;
    const bddRes = cleanResponse(res);
    return bddRes;
}}

module.exports = { pokemonId };     