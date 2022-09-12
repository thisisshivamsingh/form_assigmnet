import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state.data);
  console.log(state);
  return <div>Home</div>;
};

export default Home;
