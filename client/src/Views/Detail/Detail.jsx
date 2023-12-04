import "./Detail.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemonDetail } from "../../Redux/Actions/Actions";


const Detail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, [dispatch, id]);


  return (
    <div className="detail-container">
      <div className="pokemon-card">
        <Link to="/home">
          <button className="back-home">Home</button>
        </Link>
        <div>
            <p className="license-text">Pokemon Detail</p>
        </div>
          <div className="info-center">
          <img src={pokemonDetail.image} className="img-container" alt="" />
          <div className="pokemon-fields">

            <div className="pokemon-field">
                <p>ID: {pokemonDetail.id}</p>
            </div>

            <div className="pokemon-field">
                <p>Name: {pokemonDetail.name}</p>
            </div>

            <div className="pokemon-field">
                <p>Vida: {pokemonDetail.health}</p>
            </div>

            <div className="pokemon-field">
                <p>Ataque: {pokemonDetail.stroke}</p>
            </div>

            <div className="pokemon-field">
                <p>Defensa: {pokemonDetail.defending}</p>
            </div>

            <div className="pokemon-field">
                <p>Velociad: {pokemonDetail.speed}</p>
            </div>

            <div className="pokemon-field">
                <p>Altura: {pokemonDetail.height}</p>
            </div>

            <div className="pokemon-field">
                <p>Peso: {pokemonDetail.weight}</p>
            </div>

            <div className="pokemon-field">
            <p>Types: {" "}
              {Array.isArray(pokemonDetail.types)
                ? pokemonDetail.types.map((types) => types.name).join(", ")
                : pokemonDetail.types}</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Detail;
