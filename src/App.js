import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <h1>Tobzki Shop</h1>
      <nav style={{ borderBottom: "1px", paddingBottom: "1px" }}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default App;
