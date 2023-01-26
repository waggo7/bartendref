/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./components.css";
import { Link, Route, Routes } from "react-router-dom";
import RandomDrink from "./randomdrink";
import NewDrink from "./NewDrink";

export default function Navbar() {
  return (
    <div className=''>
      <nav className='navbar navbar-expand-lg ' id='navbar'>
        <div className='container-fluid ' id='nav_container'>
          <Link
            class='nav-link active navbar-brand text-light fs-3'
            // border  border-3 border-bottom-0'
            to='/'>
            {" "}
            Drink Reference
            {/* goal with the navbar is to add 2 different color.
            1 for the overall navbar
            1 for the individual links.. almost to look like tabs
            just for experiment/practice sake */}
          </Link>
          <div className='collapse navbar-collapse'>
            <ul class='navbar-nav'>
              <li className='nav-item'>
                <Link
                  class='nav-link active text-light fs-4 p-2 '
                  to='/NewDrink'>
                  Add Drink
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/randomdrink'
                  class='nav-link active text-light fs-4 p-2'>
                  Random Drink
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='' class='nav-link active text-light fs-4 p-2'>
                  Drink Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        {/* <Route exact path='/randomdrink' element={<RandomDrink />}></Route> */}
        <Route exact path='/NewDrink' element={<NewDrink />}></Route>
      </Routes>
    </div>
  );
}
