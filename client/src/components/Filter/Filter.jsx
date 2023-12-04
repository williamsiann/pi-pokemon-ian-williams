// import { useEffect,  } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useEffect} from "react";
import "./Filter.css";
import {
  getTypes,
  orderAtoZ,
  orderByAttack,
  filterApiDb,
  filterByType,
  getPokemons
  
} from "../../Redux/Actions/Actions";

const Filter = ({ resetPage }) => {
  const dispatch= useDispatch();
  const allTypes= useSelector((state) => state.Types);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    if (resetPage) {
      resetPage();
    }
  }, [resetPage]);

  const AtoZHandler = (e) => {
    dispatch(orderAtoZ(e.target.value));
  };
  
  const AttackHandler = (e) => {
    dispatch(orderByAttack(e.target.value));
  };
  
  const OriginHandler = (e) => {
    dispatch(filterApiDb(e.target.value));
  };

  const FilterByType = (e) => {
    dispatch(filterByType(e.target.value));
  };
  
  return (
    <div className="filter-container">
      <div className="NavBar">
        <select onClick={AtoZHandler} className="AtoZ select">
          <option value="All">ALL</option>
          <option value="Az">A-Z</option>
          <option value="Za">Z-A</option>
        </select>
  
        <select onClick={AttackHandler} className="Atack select">
          <option value="All">ATTACK</option>
          <option value="Max">MAX</option>
          <option value="Min">MIN</option>
        </select>
  
        <select onClick={OriginHandler} className="Origin select">
          <option value="All">ORIGIN</option>
          <option value="Api">API</option>
          <option value="Created">CREATED</option>
        </select>
  
        <select className="Type select" defaultValue="All" onClick={FilterByType}>
          <option value="All">TYPES</option>
          {allTypes?.map((e) => (
            <option key={e.id} value={e.name}> {e.name} </option>
          ))}
        </select>

      </div>
    </div>
  );
  
};

export default Filter;
