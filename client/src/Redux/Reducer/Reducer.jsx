import {
    GET_POKEMONS,
    GET_POKEMON_DETAIL,
    GET_ALL_TYPES,
    ORDER_ASC_DESC,
    ORDER_BY_STROKE,
    FILTER_API_DB,
    FILTER_BY_TYPE,
    POKEMON_NAME
    } from "../ActionsTypes/ActionsTypes";

    const initialState = {
    pokemons: [],
    pokemonsCopy: [],
    pokemonDetail: [],
    Types: [],
    PokemonName: [],
    OrderAttack: [],
    OrderName: [],
    OrderOrigin: [],
    OrderTypes: [],
    };

    const Reducer = (state = initialState, action) => {
    switch (action.type) {


        case GET_POKEMONS:       
        return {
            ...state,
            pokemons: action.payload,
            pokemonsCopy: action.payload     
        };

        case GET_POKEMON_DETAIL:
        return {
            ...state,
            pokemonDetail: action.payload,
        };

        case GET_ALL_TYPES:
        return {
            ...state,
            Types: action.payload,
        };



        case ORDER_ASC_DESC:
        if (action.payload === "All") {
            return { ...state, pokemons: state.pokemons };
        } else if (action.payload === "Az") {
            const sortedpokemons = [...state.pokemons].sort((a, b) =>
            a.name.localeCompare(b.name, "en", { sensitivity: "base" })
            );
            return {
            ...state,
            pokemons: sortedpokemons,
            };
        } else if (action.payload === "Za") {
            const sortedpokemonsZA = [...state.pokemons].sort((a, b) =>
            b.name.localeCompare(a.name, "en", { sensitivity: "base" })
            );
            return { ...state, pokemons: sortedpokemonsZA };
        } else {
            return state;
        }

        case ORDER_BY_STROKE:
        if (action.payload === "All") {
            return { ...state, pokemons: state.pokemons };
        } else if (action.payload === "Max") {
            const sortedPokemonsMax = [...state.pokemons].sort(
            (a, b) => b.stroke - a.stroke
            );
            return { ...state, pokemons: sortedPokemonsMax };
        } else if (action.payload === "Min") {
            const sortedPokemonsMin = [...state.pokemons].sort(
            (a, b) => a.stroke - b.stroke
            );
            return { ...state, pokemons: sortedPokemonsMin };
        } else {
            return state;
        }


        case FILTER_API_DB:
        const filterConfig = {
            All: { filterFn: () => true, errorMessage: null },
            Created: {
            filterFn: (e) => e.createdInDb,
            errorMessage: "No hay Pokémon en la base de datos",
            },
            Api: {
            filterFn: (e) => !e.createdInDb,
            errorMessage: "No hay Pokémon de la API",
            },
        };
        const selectedFilter =
            filterConfig[action.payload] || filterConfig["All"];
        const filteredPokemons = state.pokemonsCopy.filter(
            selectedFilter.filterFn
        );
        return {
            ...state,
            pokemons: filteredPokemons,
            filteredPokemons: filteredPokemons,
        };
        

        case FILTER_BY_TYPE:
            
            const filteredPokemonsCopy = state.pokemonsCopy.filter((pokemon) => {
            
            if (pokemon.types && Array.isArray(pokemon.types)) {
                
                const lowercasedTypes = pokemon.types.map(type => type.toLowerCase());
                
                return lowercasedTypes.includes(action.payload);
            }
            
            return false;
            });
            return {
                ...state,
                pokemons: filteredPokemonsCopy
            };


        case POKEMON_NAME:
        return {
            ...state,
            pokemons: action.payload,
        };



        default:
        return {
            ...state,
        };
    }
    };

export default Reducer;
