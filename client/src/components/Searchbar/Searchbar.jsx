import "./Searchbar.css";
import pokeball from "../../assets/pokeball.png"
import { useDispatch } from "react-redux";
import {React, useState}from "react";
import { PokemonByName, getPokemons} from "../../Redux/Actions/Actions";


const Searchbar=()=>{
  const dispatch= useDispatch();
  // Estado local para almacenar el valor de búsqueda
  const [searchValue, setSearchValue]=useState('')

  // Manejar el cambio en el campo de búsqueda
  const HandleChange=(event)=>{
    setSearchValue(event.target.value);
  }
   // Realizar una búsqueda y despachar una acción para obtener Pokémon por nombre
  const HandleSearch=()=>{
    dispatch(PokemonByName(searchValue))
    setSearchValue('')}

     // Restaurar la lista de todos los Pokémon
    const HandleQuit=()=>{
      dispatch(getPokemons())
    }

  return (
    <div className="container">
      <input
          className="search-container"
          placeholder="Search Driver"
          type="search"
          onChange={HandleChange} 
          value={searchValue} 
          
        />
      <img 
      src={pokeball} 
      onClick={HandleSearch} 
      className="pokeball btn"
      />
  
    </div>

  );
};

export default Searchbar;
