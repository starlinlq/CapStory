import React from "react";
import { useSelector } from "react-redux";
import HomeHeader from "../homeHeader/HomeHeader";
import Card from "../cardSection/Card";
import objOne from "./Data";

function Home() {
  const state = useSelector((data) => data.content);

  const story = state.slice(0, 4);
  const story2 = state.slice(0, 4);

  return (
    <>
      <HomeHeader />
      <Card state={story} />
      <HomeHeader objOne={objOne} />
      <Card state={story2} />
    </>
  );
}

export default Home;
