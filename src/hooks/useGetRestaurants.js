import { useState, useEffect } from "react";
import { GET_RESTAURANTS_URL } from "../config/config";

export const useGetRestaurants = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(GET_RESTAURANTS_URL);
    const json = await data.json();
    console.log(json, "data");

    setRestroList(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return restroList;
};
