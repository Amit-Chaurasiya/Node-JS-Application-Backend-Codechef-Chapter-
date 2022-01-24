import React from "react";
import "../App.css";

const Home = ({setLoginUser}) => {
  return (
    <>
      <div className="homepage">
        <h1>DashBoard</h1>
        <h3>Welcome to Home Page</h3>
        <div className="button" onClick={() => setLoginUser({})}>
          Logout
        </div>
      </div>
    </>
  );
};

export default Home;
