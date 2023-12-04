// Store.js
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../Reducer/Reducer";  // Asegúrate de tener la ruta y el nombre de archivo correctos

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancer(applyMiddleware(thunkMiddleware)) 
);

export default store;
