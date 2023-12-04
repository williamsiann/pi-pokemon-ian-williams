const { createPokemon } = require("../controllers/postPokemon");

const postNewPokemon = async (req, res) => {
    const {
        name,
        image,
        health,
        stroke,
        defending,
        speed = null,
        height = null,
        weight = null,
        createdInDb = true, 
        types,
    } = req.body;

    try {
        const pokemon = await createPokemon(
            name,
            image,
            health,
            stroke,
            defending,
            speed,
            height,
            weight,
            createdInDb,
            types.map(type => type.toLowerCase()) // Convertir a minúsculas
        );

        res.status(200).json(pokemon);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            // Manejar errores de validación de Sequelize (campos faltantes, etc.)
            res.status(400).json({ error: error.errors.map(e => e.message) });
        } else {
            // Otros errores
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = { postNewPokemon };
