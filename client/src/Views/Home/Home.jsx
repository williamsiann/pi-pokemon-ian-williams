import "./Home.css";
import { getPokemons, getTypes } from "../../Redux/Actions/Actions.jsx";

import Searchbar from "../../components/Searchbar/Searchbar";

import Card from "../../components/Card/Card.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";

const Home = () => {

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);


  const [pagina, setPagina] = useState()
  const [porPagina, setPorPagina] = useState(6)


  const maximo = pokemons.length / porPagina


  return (
    <div className="home-container">
      <div className="filter-container">
        <Searchbar className="searchbar" />
      </div>
      <div className="center-container">
        <div className={"pagination-container-Cards card-Container"}>   
          
          {pokemons.map((pokemon) => (
            // Verificar que las propiedades necesarias estén presentes y tengan valores
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
                attack={pokemon.stroke}
              />
          ))}
        </div>
      </div>
      <div className={"pagination-container"}></div>
    </div>
  );
};

export default Home;
