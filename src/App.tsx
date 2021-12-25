import React from "react";
import "./App.scss";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import createScrapbook from "./components/createscrapbook";

function App() {
  console.log("hey");
  return (
    <div className="App">
      {/* <h1 className="AppHeader">Virtual Scrapbook</h1> */}
      <div className="formContainer">
        <form className="startForm">
          <h2> Virtual Scrapbook</h2>
          <Link to="/editScrapbook">
            <button> Edit existing Scrapbook</button>
          </Link>
          <br></br>
          <Link to="/createScrapbook">
            <button>Create new Scrapbook</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default App;
