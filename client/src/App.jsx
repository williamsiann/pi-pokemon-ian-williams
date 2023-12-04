import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import Post from "./Views/Post/Post";
import Detail from "./Views/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";


function App() {

  const location = useLocation();
  const isLandingPage = location.pathname === "/"; 
  
  return (
    <div className="App">
      {!isLandingPage && <Navbar />} 
      <Routes>
        <Route exact path={"/"} element={<Landing />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/detail/:id"} element={<Detail />} />
        <Route path={"/form"} element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
