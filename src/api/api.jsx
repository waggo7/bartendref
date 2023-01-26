import React from "react";
import axios from "axios";
export function drinkSearch() {
  let drinkData = axios
    .get("www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
    // .get(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}
    .then((response) => {
      console.log(response);
    });
  //place this on the submit results from the search form/button
  return drinkData;
}
