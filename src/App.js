import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Modal/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Modal/Register";

function App() {
  return (
    <>
      <Register />
      <Login />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
