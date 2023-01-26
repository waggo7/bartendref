import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function RandomDrink() {
  //let [drink, setDrink] = useState();
  const [data, setData] = useState({});
  function getData() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        setData(response.data.drinks[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    //creating the axios call into a function in order to have a button that can get a new random drink each time

    getData();
  }, []);
  console.log(data);
  return (
    <div className='contianer p-4'>
      <h5 class='display-3 text-center'>Rando Cocktail</h5>
      <div class='card ' style={{ "max-width": "450px" }}>
        <h1 className='fs-4 p-3'>{data.strDrink}</h1>
        <img src={data.strDrinkThumb} class='card-img-top p-2' alt='...' />
        <div class='card-body'>
          <p class='card-text'>{data.strInstructions}</p>
          <button className='btn btn-primary'>see more details</button>
          {/* here is where i want to add more functionality by being able to click the button have the full ingredient list pop up */}
        </div>
      </div>
      <button className='btn'>
        {/*  onClick={getData()} */} or click here for another random cocktail
      </button>
    </div>
  );
}
