import React, { useEffect, useState } from "react";
import "../styles/pages.css";
import Navbar from "../components/Navbar";
import '../pages/LoginPage';
import {Navigate} from 'react-router-dom';

const Dashboard = () => {
    const [logUser, setLogUser] = useState(localStorage.getItem("Login"))
    useEffect(()=>{
      console.clear()
      console.log(logUser)
    })
    
    // if (logUser === false)
    // {
      return <Navbar />;
    // }
    // else {
    //   return <Navigate to='/'/>
    }

export default Dashboard;
