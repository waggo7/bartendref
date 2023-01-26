import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RandomDrink from "./components/randomdrink";
import Navbar from "./components/navbar";
import Home from "./components/home";
import NewDrink from "./components/NewDrink";
import "./api/api";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar path='/' />
        <Routes>
          <Route exact path='/' element={<Home></Home>}>
            {" "}
          </Route>
          <Route
            path='/RandomDrink'
            element={<RandomDrink></RandomDrink>}></Route>
          {/* <Route path='NewDrink' element={<NewDrink></NewDrink>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
//most recent update on 01-25
//--> popup on random cocktail to view all instructions and ingredients
//--> add search ability..maybe even an autocomplete/predictive search
//--> saving drinks
export default App;
