import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, types, image, stroke}) => {
  return (
    <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
      <div className="card">
        <div className="card__inner">

          <div className="card__front">
            <div className="image-container">
              <img src={image} alt={name} className="image" />
            </div>
            <div className="text-container">
              <p>{name}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default Card;
