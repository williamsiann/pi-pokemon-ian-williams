import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../Redux/Actions/Actions";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = () => {
  const dispatch = useDispatch();
  const allTypes= useSelector((state) => state.Types);

  const [form, setForm] = useState({
    name: "",
    image: "",
    health: "",
    stroke: "",
    defending: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const validate = () => {
    const newErrors = {};
  

  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSelect = (event) => {
    const selected = event.target.value;
    if (form.types.length < 5 && !form.types.includes(selected)) {
      setForm({ ...form, types: [...form.types, selected] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post("http://localhost:3001/pokemon/", form)
        .then(() => {
          alert("Pokemon creado con éxito");
          setForm({ ...form, types: [] });
        })
        .catch(() => {
          alert("Error al crear el Pokemon");
        });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-card">
        <h1 className="h1-form">Crea tu Pokemon!</h1>

        {["name", "image", "health", "stroke", "defending"].map((field) => (
          <section key={field}>
            <input
              className={`input-container ${errors[field] ? "error" : ""}`}
              type="text"
              name={field}
              value={form[field]}
              onChange={handleInputChange}
              placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}...`}
            />
            {errors[field] && <p className="error-text">{errors[field]}</p>}
          </section>
        ))}

        {["speed", "height", "weight"].map((field) => (
          <section key={field}>
            <input
              className={`input-container ${errors[field] ? "error" : ""}`}
              type="text"
              name={field}
              value={form[field]}
              onChange={handleInputChange}
              placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}...`}
            />
            {errors[field] && <p className="error-text">{errors[field]}</p>}
          </section>
        ))}

        <section>
          <h3 className="h3-form">Select Type</h3>
          <div className="Type-container-create">
            <select
              className={`${errors.types ? "error" : ""}`}
              name="types"
              onChange={handleSelect}
            >
              {allTypes && allTypes.map((type) => (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
            {errors.types && <p className="error-text">{errors.types}</p>}
          </div>
          <div className="selected">
            {form.types.map((type) => (
              <span className="type-span" key={type}>
                {type}
              </span>
            ))}
          </div>
        </section>

        <button className="delete-btn" onClick={() => setForm({ ...form, types: [] })}>
          X
        </button>
        <button className="submit" type="submit">
          Create Pokemon
        </button>
        <Link to="/home">
          <button className="back-home">Home</button>
        </Link>
      </form>
    </div>
  );
};

export default Post;
