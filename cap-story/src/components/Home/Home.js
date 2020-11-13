import React from "react";
import { useSelector } from "react-redux";
import HomeHeader from "../homeHeader/HomeHeader";
import Card from "../cardSection/Card";
import { objTwo, objOne } from "./Data";
import { Trending, HeadTrending } from "./home.elements";
import { HiOutlineTrendingUp } from "react-icons/hi";

function Home() {
  const state = useSelector((data) => data.content);

  const story = state.slice(0, 4);
  const story2 = state.slice(0, 4);

  return (
    <>
      <HomeHeader data={objOne} />
      <Card state={story} />
      <HomeHeader data={objTwo} />
      <Card state={story2} />
    </>
  );
}

export default Home;
