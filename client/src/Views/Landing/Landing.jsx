import { Link } from "react-router-dom";
import "./Landing.css";
import Logo from "../../assets/pngegg.png";
import Mano from "../../assets/pngeggmano.png"
import { useState, useEffect } from "react";

const Landing = () => {
  const [showText, setViewText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setViewText(true);
    }, 4000);
    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className="landing-container">
      <div>
        <Link to={"/home"}>
          <img src={Logo} className="landing-image" />
        </Link>
      </div>
      {showText && (

        <img src={Mano} className="landing-image-timig"/>

      )}
    </div>
  );
};

export default Landing;



