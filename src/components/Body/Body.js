import Button from "@mui/material/Button";
import { RestroCard } from "./RestroCard";
import { RESTRUALIST, SWIGGY_API } from "../../Config/config";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";

import "./Body.css";
import { Shimmer } from "../Shimmer/Shimmer";

export const Body = () => {
  // console.error(RESTRUALIST, "List");
  const [restroList, setRestroList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);

    if (e.target.value === "") {
      // alert("called");
      setRestroList(filteredRestaurants);
    }
  };

  const handleSearch = () => {
    const filterData = restroList.filter((data) =>
      data?.data?.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    );
    console.error(filterData);

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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.error(json);

    setRestroList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <>
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
            {restroList.length === 0 ? (
              <>
                <Shimmer />
              </>
            ) : (
              <>
                {restroList.map((list) => {
                  return (
                    <div style={{ marginBottom: "2rem", display: "flex" }}>
                      <RestroCard key={list.data.id} {...list.data} />
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
