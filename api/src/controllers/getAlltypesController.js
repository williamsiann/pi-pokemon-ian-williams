const { Type } = require("../db");
const axios = require("axios");

// Función para obtener tipos de Pokémon desde la API y guardarlos en la base de datos
const allTypes = async () => {
  try {
    let allTypes = []; // Un arreglo para almacenar los nombres de los tipos
  
    // Realiza una solicitud GET a la API de Pokémon para obtener información sobre los tipos
    const infoApi = await axios.get("https://pokeapi.co/api/v2/type");
    const resultApi = await infoApi.data.results;
  
    // Mapea los resultados de la API para extraer los nombres de los tipos
    resultApi.map((e) => allTypes.push(e.name));
  
    // Utiliza Promise.all para ejecutar múltiples operaciones asincrónicas en paralelo
    await Promise.all(
      allTypes.map((type) => Type.findOrCreate({ where: { name: type } }))
    );
  
    // Después de crear o buscar tipos en la base de datos, busca y devuelve todos los tipos
    const typesDb = await Type.findAll();
    return typesDb;
  } catch (error) {
    console.error("Error durante la ejecución de traer todos los types:", error);
    throw error; // Re-lanza el error para que pueda ser manejado por el código que llama a esta función
  }
};

// Exporta la función para su uso en otros módulos
module.exports = {
  allTypes
};
