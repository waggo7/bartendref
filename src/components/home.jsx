import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import NewDrink from "./NewDrink";

//import Navbar from "./navbar";
export default function Home() {
  return (
    <>
      <div className='container container-sm text-center'>
        <div class='pt-4 w-50 '>
          <h1
            style={{ color: "rgb(63, 16, 20)" }}
            class='display-3 text-capitalize text-center '>
            Welcome to the Cocktail Reference app
          </h1>
        </div>
        <form type='submit' className='text-center w-50'>
          <div className='mb-3'>
            <label class='fw-bold fs-4' htmlFor>
              <strong>Search for a cocktail</strong>
            </label>
            <input type='text' class='form-control' />
            <p>
              If you dont see the one you're looking for click{" "}
              <Link to='/NewDrink'> here </Link> to add your own{" "}
            </p>
          </div>
        </form>
      </div>

      {/* <Routes>
        <Route exact path='/NewDrink' element={<NewDrink />}></Route>
      </Routes> */}
    </>
  );
}
