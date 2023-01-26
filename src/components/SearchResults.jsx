import React, { useEffect, useState } from "react";
import { drinkSearch } from "../api/api";
import axios from "axios";
const dataFetch = axios.create({
  baseURL: "www.thecocktaildb.com/api/json/v1/1/",
  headers: {
    Accept: "application/json",
  },
});

export default function postSearch() {
  let [post, setPost] = useState([]);
  useEffect(() => {});
  //finishing returning search results on
  //cocktail--> name, id, first letter,
  //ingedient-->name,id,first letter
}
