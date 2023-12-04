import { Link } from "react-router-dom";
import "./Navbar.css";
import Filter from "../Filter/Filter.jsx";


const Navbar = () => {
  return (
    <div className="nav-container">  
      <Filter/>
      <div className="title-container">
        <h1>Pokemons</h1>
      </div>

      <div className="button-container">
        <Link to={"/home"}>
          <button className="nav-button">Home</button>
        </Link>

        <Link to={"/form"}>
          <button className="nav-button">Create</button>
        </Link>

        <Link to={"/"}>
          <button className="nav-button exit">Exit</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
