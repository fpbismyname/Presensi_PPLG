import React, { useEffect, useState } from 'react';
import '../styles/pages.css';
import Navbar from '../components/Navbar';
import { Navigate } from 'react-router-dom';

const Dashboard = () =>{
    const [Log, setLog] = useState(null);
    useEffect(()=>{
        const Logged_User = localStorage.getItem("Log");
        if (Logged_User){
            setLog(Logged_User);
        }
    },[]);

    if (!Log){
        return <Navigate to="/"/>;
    } else {
        return(
            <Navbar/>
        )
    }   
    }

export default Dashboard;