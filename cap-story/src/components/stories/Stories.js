import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../cardSection/Card";
import Pagination from "./Pagination";
import { Filter, Button } from "./Stories.elements";

function Stories() {
  const [filterState, setFilterState] = useState([]);
  const [finalIndex] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const state = useSelector((data) => data);

  function setData() {
    setFilterState(state);
  }

  useEffect(() => {
    setData();
  }, []);

  const indexOfLasPost = currentPage * finalIndex;
  const indexOfFirstPosts = indexOfLasPost - finalIndex;

  const paginate = (number) => setCurrentPage(number);

  const data = filterState.slice(indexOfFirstPosts, indexOfLasPost);

  function filterData(filter) {
    switch (filter) {
      case "all": {
        setFilterState(state);
        return;
      }
      case "nature": {
        const filteredData = state.filter((data) => data.topic === "nature");
        setFilterState(filteredData);
        return;
      }
      case "Sci-Fi": {
        const filteredData = state.filter((data) => data.topic === "Sci-Fi");
        setFilterState(filteredData);
        return;
      }
      case "city": {
        const filteredData = state.filter((data) => data.topic === "city");
        setFilterState(filteredData);
        return;
      }
      default:
        return "invalid";
    }
  }

  return (
    <>
      <Filter>
        <Button onClick={() => filterData("all")}>all</Button>
        <Button onClick={() => filterData("nature")}>nature</Button>
        <Button onClick={() => filterData("city")}>city</Button>
        <Button onClick={() => filterData("Sci-Fi")}>Sci-Fi</Button>
      </Filter>
      <Card state={data} />
      <Pagination
        totalPost={filterState.length}
        postPerPage={finalIndex}
        paginate={paginate}
      />
    </>
  );
}

export default Stories;
