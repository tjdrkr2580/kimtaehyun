import React, { useState, useEffect } from "react";
import Loading from "./../components/Loading";

const Home = () => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setInterval(() => {
  //     setLoading(!loading);
  //   }, 2500);
  // }, []);
  return <Loading />;
  // {loading ? <Loading /> : <div className="home"></div>}</Loading>;
};

export default Home;
