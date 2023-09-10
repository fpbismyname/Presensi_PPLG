import React, { useEffect, useState } from "react";
import "../styles/pages.css";
import Navbar from "../components/Navbar";
import "../pages/LoginPage";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  
  const [logUser, setLogUser] = useState(localStorage.getItem('Log'));

  useEffect(() => {
    console.clear();
    console.log(logUser);
  });

  if (logUser === "true") {
    return (
      <>
        <Navbar />
        {/* <button onClick={Logout}>Logout</button> */}
      </>
    );
  } else if (logUser === "false") {
    return <Navigate to='/'/>
  }
};

export default Dashboard;
