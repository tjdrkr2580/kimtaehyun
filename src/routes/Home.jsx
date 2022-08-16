import React, { useState, useEffect } from "react";
import Loading from "./../components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(!loading);
    }, 10000);
  }, []);
  return <>{loading ? <Loading /> : <div className="home"></div>};</>;
};

export default Home;
