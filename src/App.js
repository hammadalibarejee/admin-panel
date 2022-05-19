import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { Login } from "./components/Login/Login";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
