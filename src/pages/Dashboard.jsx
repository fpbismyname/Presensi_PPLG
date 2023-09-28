import React, { useEffect, useState } from "react";
// import "../styles/pages.css";
import Navbars from "../components/Navbars";
import "../pages/LoginPage";
import { Navigate } from "react-router-dom";
import Dashboard_1 from '../components/Dashboard_1';

const Dashboard = () => {

  const [logUser, setLogUser] = useState(localStorage.getItem('Log'));

  //Debug UseState
  useEffect(() => {
    console.clear();
    console.log(logUser);
  });

  if (logUser === "true") {
    return (
      <div className="DashboardMain">
        <Navbars/>
        <div className="innerDashboard">
          {/* <button onClick={Logout}>Logout</button> */}
          <Dashboard_1 />
        </div>
      </div>
    );
  } else if (logUser === "false") {
    return <Navigate to='/' />
  }
};

export default Dashboard;
