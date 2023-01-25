import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Modal/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Modal/Register";
import Account from "./Components/Account/Account";
import AccountHome from "./Components/Account/AccountHome/AccountHome";

function App() {
  return (
    <>
      <Register />
      <Login />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/compte" element={<Account />}>
          <Route path="/compte/mon-compte" element={<AccountHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
