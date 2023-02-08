import Button from "@mui/material/Button";
import { RestroCard } from "./RestroCard";
import {
  RESTRUALIST,
  SWIGGY_API,
  GET_RESTAURANTS_URL,
} from "../../config/config";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { filterRestoList } from "../../utils/helper";
// import { GET_RESTAURANTS_URL } from "../../Config/config";

import "./Body.css";
import { Shimmer } from "../Shimmer/Shimmer";

import { useGetRestaurants } from "../../hooks/useGetRestaurants";
import { Header } from "../Header/Header";

export const Body = () => {
  // console.error(RESTRUALIST, "List");
  const [restroList, setRestroList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const hookRestroList = useGetRestaurants();

  console.log(hookRestroList, "list");
  const handleChange = (e) => {
    setSearchText(e.target.value);

    if (e.target.value === "") {
      // alert("called");
      setRestroList(filteredRestaurants);
    }
  };

  const handleSearch = () => {
    const filterData = filterRestoList(searchText, hookRestroList);
    // const filterData = restroList.filter((data) =>
    //   data?.data?.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    // );
    // console.error(filterData);

    setRestroList(filterData);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  // const getRestroData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const jsonData = await data.json();

  //   console.error(jsonData);
  // };

  async function getRestaurants() {
    const data = await fetch(GET_RESTAURANTS_URL);
    const json = await data.json();
    console.log(json, "data");

    setRestroList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const handleRedirect = (id) => {
    navigate(`/menu/${id}`);
  };
  return (
    <>
      {/* <Header /> */}
      <Container maxWidth="xl">
        <div style={{ marginTop: "2rem" }}>
          <div className="body-wrapper">
            <input
              type="text"
              placeholder="Search here"
              value={searchText}
              onChange={handleChange}
              className="input"
            />

            <button onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>

          <div className="card-wrapper">
            {hookRestroList?.length === 0 ? (
              <>
                <Shimmer />
              </>
            ) : (
              <>
                {hookRestroList?.map((list) => {
                  return (
                    <div style={{ marginBottom: "2rem", display: "flex" }}>
                      <RestroCard
                        onClick={() => {
                          handleRedirect(list.data.id);
                        }}
                        key={list.data.id}
                        {...list.data}
                      />
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
