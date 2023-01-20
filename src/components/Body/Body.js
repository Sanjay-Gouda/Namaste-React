import Button from "@mui/material/Button";
import { RestroCard } from "./RestroCard";
import { RESTRUALIST } from "../../Config/config";
import { Container } from "@mui/material";
import { useState } from "react";
import "./Body.css";

export const Body = () => {
  // console.error(RESTRUALIST, "List");
  const [restroList, setRestroList] = useState(RESTRUALIST);
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);

    if (e.target.value === "") {
      // alert("called");
      setRestroList(RESTRUALIST);
    }
  };

  const handleSearch = () => {
    const filterData = restroList.filter((data) =>
      data.data.name.includes(searchText)
    );
    console.error(filterData);

    setRestroList(filterData);
  };

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
            {restroList.map((list) => {
              return (
                <div style={{ marginBottom: "2rem", display: "flex" }}>
                  <RestroCard key={list.data.id} {...list.data} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};
