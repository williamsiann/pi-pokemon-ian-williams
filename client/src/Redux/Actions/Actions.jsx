import axios from "axios"

import{
    GET_POKEMONS,
    GET_POKEMON_DETAIL,
    GET_ALL_TYPES,

    ORDER_ASC_DESC,
    ORDER_BY_STROKE,

    FILTER_API_DB,  
    FILTER_BY_TYPE,

    POKEMON_NAME
}from "../ActionsTypes/ActionsTypes"



export const getPokemons = ()=>{
    return async function (dispatch) {
        const pokemons = await axios.get("http://localhost:3001/pokemon");
        dispatch( {type: GET_POKEMONS, payload: pokemons.data} )
    }
}

export const getPokemonDetail = (id)=>{
    return  async function (dispatch) {
        const pokemonDetail = await axios.get(`http://localhost:3001/pokemon/${id}`);
        dispatch( {type: GET_POKEMON_DETAIL, payload: pokemonDetail.data} )
    }
}

export const getTypes=()=>{
    return async function (dispatch){
        const res = await axios.get('http://localhost:3001/types');
        dispatch({type: GET_ALL_TYPES, payload: res.data})
    }
}

export const orderAtoZ=(order)=>{
    return {type: ORDER_ASC_DESC, payload:order}
}

export const orderByAttack=(order)=>{
    return { type: ORDER_BY_STROKE, payload:order}
}

export const filterApiDb=(order)=>{
    return {type: FILTER_API_DB, payload:order}
}

export const filterByType = (order) => {
    return { type: FILTER_BY_TYPE, payload: order };
};

export const PokemonByName = (name) => {
    return async function (dispatch) {
    try {
        const response = await axios.get(`http://localhost:3001/pokemon/name?name=${name}`);
        const pokemonData = response.data;

        dispatch({ type: POKEMON_NAME, payload: pokemonData });
        } catch (error) {
        console.error("Error fetching Pokémon by name:", error);
        }
    };
};






